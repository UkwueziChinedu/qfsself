<?php
// swap.php - This script fetches a specific crypto asset's details based on the URL parameter
// and populates a dynamic swap page.

// Start the session to access session variables.
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Check if the user is logged in. If not, redirect to the login page.
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

// 1. Establish a database connection
// Assuming 'config/db.php' handles the database connection and returns a $conn object.
require_once 'db.php';
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 2. Get the asset ID from the URL (e.g., swap.php?id=1)
$asset_id = isset($_GET['id']) ? intval($_GET['id']) : 0; 

// If the asset ID is not valid, show an error message
if ($asset_id === 0) {
    die("Invalid asset ID!");
}

// 3. Prepare and execute the SQL query to fetch the specific asset data
// Use a prepared statement to prevent SQL injection.
// The query selects all necessary fields for the swap page.
$sql = "SELECT `id`, `user_id`, `symbol`, `name`, `network_badge`, `image_url`, `balance`, `fiat_worth` FROM `user_assets` WHERE `id` = ? AND `user_id` = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $asset_id, $_SESSION['user_id']);
$stmt->execute();
$result = $stmt->get_result();
$from_asset = $result->fetch_assoc();

// If no asset is found, display an error
if (!$from_asset) {
    die("Asset not found or you are not authorized to access it!");
}

// 4. Fetch all other assets for the 'to' token dropdown menu
$other_assets_sql = "SELECT `id`, `symbol`, `name`, `network_badge` FROM `user_assets` WHERE `user_id` = ? AND `id` != ?";
$other_assets_stmt = $conn->prepare($other_assets_sql);
$other_assets_stmt->bind_param("ii", $_SESSION['user_id'], $asset_id);
$other_assets_stmt->execute();
$other_assets_result = $other_assets_stmt->get_result();
$other_assets = [];
while ($row = $other_assets_result->fetch_assoc()) {
    $other_assets[] = $row;
}

// Close statements and connection
$stmt->close();
$other_assets_stmt->close();
$conn->close();

// In a real application, this would be a real deposit address for the "from" token.
// For this example, we'll use a hardcoded placeholder address.
$deposit_address = "bc1qxy2kgdygjrsqtzq2n0yrf24a0r8j3j3j8r2y"; // Example BTC address

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="HjR7Pl6rMs3SoIgyh6fodmCCvEjzDRZpS7p8zNod">
    <title>Swap <?php echo htmlspecialchars($from_asset['symbol']); ?> | QFS Self Custody Ledger</title>

    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900&display=swap"
        rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Styles -->
    <style>
        :root {
            --qfs-dark: #0b0f14;
            --qfs-dark-lighter: #0e1318;
            --qfs-dark-medium: #11151a;
            --qfs-primary: #6b6df3;
        }

        .bg-dark {
            background-color: var(--qfs-dark) !important;
        }

        .bg-dark-lighter {
            background-color: var(--qfs-dark-lighter) !important;
        }

        .bg-dark-medium {
            background-color: var(--qfs-dark-medium) !important;
        }

        .text-primary {
            color: var(--qfs-primary) !important;
        }

        .border-primary {
            border-color: rgba(107, 109, 243, .25) !important;
        }
    </style>
</head>

<body class="bg-dark text-gray-100 antialiased">
    <!-- User Menu Modal -->
    <div id="userMenu" class="hidden fixed inset-0 z-50">
        <div class="absolute inset-0 bg-black/20 backdrop-blur-sm" id="userMenuBackdrop"></div>
        <div
            class="absolute transform right-4 top-16 w-[calc(100%-2rem)] sm:w-80 md:w-96 bg-dark-medium rounded-lg shadow-lg py-1 ring-1 ring-white/10 mx-4 sm:mx-0">
            <!-- User menu content here (if any) -->
        </div>
    </div>

    <!-- Main Content -->
    <div class="min-h-screen bg-dark">
        <div class="min-h-screen">
            <!-- Header -->
            <div class="bg-dark-medium border-b border-dark-lighter">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-4">
                            <a href="https://qfsselfcustody.com/app/assets/<?php echo htmlspecialchars($from_asset['id']); ?>"
                                class="p-2 hover:bg-dark-lighter rounded-full transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10.707 3.293a1 1 0 010 1.414L6.414 9H17a1 1 0 110 2H6.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                            <h1 class="text-xl font-medium">Swap <?php echo htmlspecialchars($from_asset['symbol']); ?></h1>
                        </div>
                        <div id="google_translate_element"></div>
                    </div>
                </div>
            </div>

            <!-- Swap Content -->
            <div class="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div class="bg-dark-medium rounded-xl p-6 sm:p-8">
                    <!-- Balance Display -->
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-xl font-bold">Swap</h2>
                        <div class="text-sm text-gray-400">
                            Balance: <span class="text-white"><?php echo htmlspecialchars($from_asset['balance']); ?>
                                <?php echo htmlspecialchars($from_asset['symbol']); ?></span>
                        </div>
                    </div>

                    <form id="form" method="POST" action="https://qfsselfcustody.com/app/assets/swap_token/<?php echo htmlspecialchars($from_asset['id']); ?>" class="space-y-6">
                        <input type="hidden" name="_token" value="HjR7Pl6rMs3SoIgyh6fodmCCvEjzDRZpS7p8zNod"
                            autocomplete="off">

                        <!-- From Token -->
                        <div class="bg-dark rounded-lg p-4">
                            <div class="swapbox">
                                <div class="swapbox_select" id="from_token_select">
                                    <span id="from_token_text" class="text-white">
                                        <?php echo htmlspecialchars($from_asset['name']); ?> (<?php echo htmlspecialchars($from_asset['symbol']); ?>)
                                    </span>
                                    <input type="hidden" name="from_token_id"
                                        value="<?php echo htmlspecialchars($from_asset['id']); ?>">
                                </div>
                                <div class="relative mt-2">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <img src="<?php echo htmlspecialchars($from_asset['image_url']); ?>" alt=""
                                            class="w-5 h-5 rounded-full">
                                    </div>
                                    <input type="number" name="from_amount" id="from_amount"
                                        class="w-full pl-12 bg-dark-lighter rounded-lg border-2 border-dark-lighter px-4 py-3 text-gray-300 focus:outline-none focus:ring-primary transition-colors"
                                        placeholder="Enter amount" step=".00000001"
                                        max="<?php echo htmlspecialchars($from_asset['balance']); ?>" oninput="checkPrice()"
                                        required>
                                </div>
                            </div>
                        </div>

                        <!-- Swap Direction Indicator -->
                        <div class="flex justify-center">
                            <div class="bg-dark-lighter p-2 rounded-full text-gray-400">TO</div>
                        </div>

                        <!-- To Token -->
                        <div class="bg-dark rounded-lg p-4">
                            <div class="swapbox">
                                <div class="swapbox_select token_select" id="to_token_select">
                                    <select name="to_token_id" id="toTokenId"
                                        class="w-full bg-dark-lighter rounded-lg border-2 border-dark-lighter px-4 py-3 text-gray-300 focus:outline-none focus:ring-primary transition-colors"
                                        onchange="checkPrice()">
                                        <?php foreach ($other_assets as $asset): ?>
                                            <option value="<?php echo htmlspecialchars($asset['id']); ?>" data-coin_id="<?php echo htmlspecialchars($asset['symbol']); ?>">
                                                <?php echo htmlspecialchars($asset['name']); ?> (<?php echo htmlspecialchars($asset['symbol']); ?>)
                                                <?php if (!empty($asset['network_badge'])): ?>
                                                    - <?php echo htmlspecialchars($asset['network_badge']); ?>
                                                <?php endif; ?>
                                            </option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                                <div class="mt-2">
                                    <input type="number" name="to_amount" id="to_amount"
                                        class="w-full bg-dark-lighter rounded-lg border-2 border-dark-lighter px-4 py-3 text-gray-300"
                                        placeholder="Calculated amount" readonly>
                                </div>
                            </div>
                        </div>

                        <!-- Quote Display -->
                        <div class="text-sm text-gray-400 flex items-center space-x-2">
                            <span>Quote:</span>
                            <span>1 <?php echo htmlspecialchars($from_asset['symbol']); ?> ≈ <span class="fromTokenFiatPrice text-white">Loading...</span></span>
                            <input type="hidden" class="fromAssetFiatValue" value="<?php echo htmlspecialchars($from_asset['fiat_worth']); ?>">
                        </div>

                        <!-- Error Display -->
                        <div id="swapError" class="text-red-500 text-sm"></div>

                        <!-- Submit Button -->
                        <button type="submit" id="swapButton" disabled
                            class="w-full bg-primary text-white py-4 px-8 rounded-lg hover:bg-primary-dark transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                            Swap
                        </button>
                    </form>

                    <!-- QR Code Section for Deposit -->
                    <div class="mt-8 text-center">
                        <h3 class="text-xl font-bold mb-4">Deposit <?php echo htmlspecialchars($from_asset['symbol']); ?> to Swap</h3>
                        <p class="text-gray-400 mb-4">You can deposit more funds to your wallet using the QR code below.</p>
                        <div id="qrcode" class="inline-block p-4 bg-white rounded-lg"></div>
                        <div class="relative w-full mt-4">
                            <input type="text" id="deposit-address" value="<?php echo htmlspecialchars($deposit_address); ?>" readonly
                                class="w-full bg-dark rounded-lg border-2 border-dark-lighter px-4 py-3 pr-16 text-gray-300 focus:outline-none focus:ring-primary transition-colors text-sm break-all">
                            <button onclick="copyToClipboard('deposit-address')"
                                class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-dark-lighter transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- QRCode.js library -->
    <script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>
    <script>
        // User Menu Toggle with click outside to close
        const userMenu = document.getElementById('userMenu');
        const userMenuBackdrop = document.getElementById('userMenuBackdrop');

        document.addEventListener('click', (e) => {
            if (e.target.closest('.showBox')) {
                userMenu.classList.remove('hidden');
            } else if (!e.target.closest('.userMenuContent') && !e.target.closest('.showBox')) {
                userMenu.classList.add('hidden');
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                userMenu.classList.add('hidden');
            }
        });

        // --- Swap Price Calculation Logic (Placeholder) ---
        // In a real application, this would fetch real-time exchange rates.
        // For this example, we'll use a hardcoded conversion.
        function checkPrice() {
            const fromAmount = parseFloat(document.getElementById('from_amount').value);
            const toTokenId = document.getElementById('toTokenId').value;
            const fromBalance = parseFloat("<?php echo htmlspecialchars($from_asset['balance']); ?>");
            const swapButton = document.getElementById('swapButton');
            const swapError = document.getElementById('swapError');

            // Simple validation
            if (fromAmount > 0 && fromAmount <= fromBalance) {
                // Get the mock conversion rate based on the selected 'to' token
                // In a real app, this would be an API call.
                let conversionRate;
                switch (toTokenId) {
                    case '2': // ETH
                        conversionRate = 0.06;
                        break;
                    case '3': // XRP
                        conversionRate = 18000;
                        break;
                    default:
                        conversionRate = 1; // Default conversion for others
                }
                document.getElementById('to_amount').value = (fromAmount * conversionRate).toFixed(8);
                swapButton.disabled = false;
                swapError.textContent = '';
            } else {
                document.getElementById('to_amount').value = '';
                swapButton.disabled = true;
                if (fromAmount > fromBalance) {
                    swapError.textContent = 'Insufficient balance.';
                } else if (fromAmount <= 0) {
                    swapError.textContent = 'Amount must be greater than zero.';
                }
            }
        }
        
        // --- QR Code Generation ---
        window.onload = function() {
            const depositAddress = "<?php echo htmlspecialchars($deposit_address); ?>";
            if (depositAddress) {
                new QRCode(document.getElementById("qrcode"), {
                    text: depositAddress,
                    width: 256,
                    height: 256,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
            }
        };

        // --- Clipboard Functionality ---
        function fallbackCopyTextToClipboard(text) {
            var textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                showCopySuccess();
            } catch (err) {
                console.error('Fallback: Unable to copy', err);
            }
            document.body.removeChild(textArea);
        }

        function copyToClipboard(elementId) {
            const element = document.getElementById(elementId);
            const text = element.value;
            if (!navigator.clipboard) {
                fallbackCopyTextToClipboard(text);
                return;
            }
            navigator.clipboard.writeText(text)
                .then(() => showCopySuccess())
                .catch(err => console.error('Could not copy text:', err));
        }

        function showCopySuccess() {
            // Create and show a toast notification
            const toast = document.createElement('div');
            toast.className = 'fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300';
            toast.textContent = 'Address copied to clipboard!';
            document.body.appendChild(toast);
            // Remove the toast after 2 seconds
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 300);
            }, 2000);
        }
    </script>
    <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>

</html>
