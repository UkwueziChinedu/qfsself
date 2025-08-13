<?php
// assets.php - Page to display a single crypto asset's details.

// This is a simplified example. In a real application, you would need proper database connection handling,
// security measures (like prepared statements to prevent SQL injection), and error handling.

// 1. Establish a database connection (replace with your actual database credentials)
require_once 'db.php'; // Include your database configuration file
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 2. Get the asset ID from the URL
// Use $_GET to get the ID from the URL (e.g., assets.php?id=1)
// We use intval() to ensure the ID is a safe integer.
$asset_id = isset($_GET['id']) ? intval($_GET['id']) : 0; 

// If the asset ID is not valid, redirect or show an error
if ($asset_id === 0) {
    die("Invalid asset ID!");
}

// 3. Prepare and execute the SQL query to fetch the asset data
// We use a prepared statement to prevent SQL injection.
$sql = "SELECT `id`, `user_id`, `symbol`, `name`, `network_badge`, `image_url`, `balance`, `price`, `price_history`, `fiat_worth` FROM `user_assets` WHERE `id` = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $asset_id);
$stmt->execute();
$result = $stmt->get_result();
$asset = $result->fetch_assoc();

// If no asset is found, you might want to display an error or redirect
if (!$asset) {
    die("Asset not found!");
}

// Close the statement and connection
$stmt->close();
$conn->close();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="HjR7Pl6rMs3SoIgyh6fodmCCvEjzDRZpS7p8zNod">
    <title><?php echo htmlspecialchars($asset['name']); ?> | QFS Self Custody Ledger</title>

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
        .btn-admin {
            display: flex;
            margin-right: 20px;
            align-items: center;
            background: #0F8322;
            padding-left: 10px;
            padding-right: 10px;
            border-radius: 8px;
            transition: all .3s;
        }

        .btn-admin:hover {
            background: #57C5698A;
        }

        .btn-admin svg {
            margin-right: 5px;
        }

        .network-badge {
            display: inline-block;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.65rem;
            background: rgba(87, 197, 105, 0.2);
            color: #57C569;
            margin-left: 4px;
        }

        .blue-glassmorphism {
            background: rgba(13, 20, 39, 0.5);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
    </style>
</head>

<body class="bg-slate-900 text-gray-100 antialiased">
    <!-- User Menu Modal -->
    <div id="userMenu" class="hidden fixed inset-0 z-50">
        <div class="absolute inset-0 bg-black/20 backdrop-blur-sm" id="userMenuBackdrop"></div>
        <div
            class="absolute transform right-4 top-16 w-[calc(100%-2rem)] sm:w-80 md:w-96 bg-slate-800 rounded-lg shadow-lg py-1 ring-1 ring-white/10 mx-4 sm:mx-0">
            <ul class="divide-y divide-gray-700">
                <li>
                    <a href="https://www.simplex.com/account/buy"
                        class="block px-4 py-2.5 text-sm text-gray-300 hover:text-blue-500 hover:bg-gray-800 transition-colors">
                        Simplex
                    </a>
                </li>
                <li>
                    <a href="https://buy.moonpay.com/"
                        class="block px-4 py-2.5 text-sm text-gray-300 hover:text-blue-500 hover:bg-gray-800 transition-colors">
                        MoonPay
                    </a>
                </li>
                <li>
                    <a href="https://exchange.mercuryo.io/"
                        class="block px-4 py-2.5 text-sm text-gray-300 hover:text-blue-500 hover:bg-gray-800 transition-colors">
                        Mercuryo
                    </a>
                </li>
                <li>
                    <a href="https://app.ramp.network/"
                        class="block px-4 py-2.5 text-sm text-gray-300 hover:text-blue-500 hover:bg-gray-800 transition-colors">
                        Ramp
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <!-- Main Content -->
    <div class="min-h-screen bg-slate-900">
        <div class="relative w-full overflow-x-hidden">
            <!-- Header -->
            <div class="bg-slate-800 border-b border-gray-700 w-full">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div class="flex justify-between items-center mb-6">
                        <a href="app"
                            class="p-2 hover:bg-gray-700 rounded-full transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10.707 3.293a1 1 0 010 1.414L6.414 9H17a1 1 0 110 2H6.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <div class="text-center">
                        <div class="flex items-center justify-center mb-8">
                            <div class="flex items-center gap-2">
                                <img src="<?php echo htmlspecialchars($asset['image_url']); ?>"
                                    alt="<?php echo htmlspecialchars($asset['name']); ?>"
                                    class="w-16 h-16 rounded-full">
                                <div class="text-left space-y-px">
                                    <h1 class="text-2xl font-bold">
                                        <?php echo htmlspecialchars($asset['symbol']); ?>
                                        <?php if (!empty($asset['network_badge'])): ?>
                                            <span class="network-badge"><?php echo htmlspecialchars($asset['network_badge']); ?></span>
                                        <?php endif; ?>
                                    </h1>
                                    <div class="flex flex-col">
                                        <span class="text-lg coinPrice">$<?php echo htmlspecialchars($asset['price']); ?></span>
                                        <span class="text-sm text-green-500"
                                            id="priceHistory"><?php echo htmlspecialchars($asset['price_history']); ?></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-3 blue-glassmorphism inline-block px-6 py-3 rounded-xl mb-2">
                            <p class="text-2xl font-bold text-white" id="cryptoAmount">
                                <?php echo htmlspecialchars($asset['balance']); ?>
                                <span class="text-sm text-gray-400 ml-2"><?php echo htmlspecialchars($asset['symbol']); ?></span>
                            </p>
                            <p class="text-lg font-medium text-blue-300" id="fiatAmount">$<?php echo htmlspecialchars($asset['fiat_worth']); ?></p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    <!-- Withdraw -->
                    <a href="withdraw.php?id=<?php echo $asset['id']; ?>"
                        class="flex flex-col items-center p-4 bg-slate-800 rounded-xl hover:bg-gray-700 transition-colors">
                        <div class="p-3 bg-slate-900 rounded-full mb-2">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span class="text-xs sm:text-sm">Withdraw</span>
                    </a>

                    <!-- Deposit -->
                    <a href="deposit.php?id=<?php echo $asset['id']; ?>"
                        class="flex flex-col items-center p-4 bg-slate-800 rounded-xl hover:bg-gray-700 transition-colors">
                        <div class="p-3 bg-slate-900 rounded-full mb-2">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span class="text-xs sm:text-sm">Deposit</span>
                    </a>

                    <!-- Swap -->
                    <a href="swap.php?id=<?php echo $asset['id']; ?>"
                        class="flex flex-col items-center p-4 bg-slate-800 rounded-xl hover:bg-gray-700 transition-colors">
                        <div class="p-3 bg-slate-900 rounded-full mb-2">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                            </svg>
                        </div>
                        <span class="text-xs sm:text-sm">Swap</span>
                    </a>

                    <!-- Buy -->
                    <button
                        class="showBox flex flex-col items-center p-4 bg-slate-800 rounded-xl hover:bg-gray-700 transition-colors">
                        <div class="p-3 bg-slate-900 rounded-full mb-2">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm1-7h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 112 0v3z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span class="text-xs sm:text-sm">Buy</span>
                    </button>
                </div>
            </div>

            <!-- Transaction History -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div class="bg-slate-800 rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center min-h-[300px]">
                    <p class="text-gray-400">Transaction history will appear here.</p>
                </div>
            </div>
        </div>
    </div>
</body>
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
</script>
<script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</html>