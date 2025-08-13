<?php
// Start the session to access session variables.
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Check if the user is logged in. If not, redirect to the login page.
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

// Get the logged-in user's username from the session.
$username = $_SESSION['username'] ?? 'User';

// Include the real database connection file.
// Assuming 'config/db.php' handles the database connection and returns a $conn object.
require_once 'config/db.php';

// --- DATABASE FETCHING LOGIC ---
$coins_data = [];
$sql = "SELECT * FROM user_assets WHERE user_id = ?";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("i", $_SESSION['user_id']);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $coins_data[] = $row;
        }
    }
    $stmt->close();
} else {
    error_log("Error preparing statement: " . $conn->error);
}

// --- LIVE PRICE FETCHING LOGIC ---
// Get unique coin symbols from the user's assets
$coin_symbols = array_unique(array_column($coins_data, 'symbol'));
$coin_symbols_string = implode(',', array_map('strtolower', $coin_symbols));

$live_prices = [];
if (!empty($coin_symbols_string)) {
    $api_url = "https://api.coingecko.com/api/v3/simple/price?ids={$coin_symbols_string}&vs_currencies=usd";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $api_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['accept: application/json']);

    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($http_code === 200 && $response !== false) {
        $live_prices = json_decode($response, true);
    } else {
        error_log("Failed to fetch live prices. HTTP Code: {$http_code}, cURL Error: " . curl_error($ch));
    }
}

// Update coin data with live prices and calculate total balance
$total_balance = 0;
foreach ($coins_data as &$coin) {
    $coin_id = strtolower($coin['symbol']);
    if (isset($live_prices[$coin_id]['usd'])) {
        $live_price = $live_prices[$coin_id]['usd'];
        $coin['price'] = $live_price;
        $coin['fiat_worth'] = $live_price * (float)$coin['balance'];
    }
    $total_balance += (float)$coin['fiat_worth'];
}
unset($coin); // Break the reference to the last element

include 'includes/header.php';
?>

<body class="bg-dark text-gray-100 antialiased font-sans">

    <div id="userMenu" class="hidden fixed inset-0 z-50">
        <div class="absolute inset-0 bg-black/20 backdrop-blur-sm" id="userMenuBackdrop"></div>
        <div
            class="absolute transform right-4 top-16 w-[calc(100%-2rem)] sm:w-80 md:w-96 bg-dark-medium rounded-lg shadow-lg py-1 ring-1 ring-white/10 mx-4 sm:mx-0">
            <ul class="divide-y divide-dark-lighter">
                <li>
                    <a href="/profile"
                        class="block px-4 py-2.5 text-sm text-gray-300 hover:text-primary hover:bg-dark-lighter transition-colors">
                        My Profile
                    </a>
                </li>
                <li>
                    <a href="/logout" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                        class="block px-4 py-2.5 text-sm text-gray-300 hover:text-primary hover:bg-dark-lighter transition-colors">
                        Logout
                    </a>
                </li>
            </ul>
            <form id="logout-form" action="logout.php" method="POST" class="hidden">
                <input type="hidden" name="_token" value="<?= htmlspecialchars($_SESSION['csrf_token'] ?? '', ENT_QUOTES, 'UTF-8') ?>" autocomplete="off">
            </form>
        </div>
    </div>

    <div class="min-h-screen bg-dark">
        <div class="bg-dark-medium border-b border-dark-lighter">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div class="flex justify-between items-center">
                    <a href="app/connect_wallet.php"
                        class="text-primary hover:text-indigo-400 transition-colors font-medium">
                        Connect Wallet
                    </a>
                    <div class="flex items-center space-x-4">
                        <div class="text-right">
                            <p class="text-sm font-medium">Hi, <?= htmlspecialchars($username) ?></p>
                        </div>
                        <button id="userMenuToggle" class="p-2 hover:bg-dark-lighter rounded-full transition-colors focus:outline-none">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="mt-6 text-center">
                    <h1 class="text-2xl font-bold mb-2">$<?= number_format($total_balance, 2) ?></h1>
                    <div class="inline-block px-3 py-1 bg-dark rounded-lg text-xs text-gray-400">
                        Select token to begin transactions
                    </div>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <?php foreach ($coins_data as $coin): ?>
                    <input type="hidden" class="<?= htmlspecialchars($coin['symbol']) ?>_user_worth" value="<?= htmlspecialchars($coin['balance']) ?>">

                    <a href="app/assets.php?id=<?= htmlspecialchars($coin['id']) ?>"
                        class="block bg-dark-medium rounded-lg p-4 shadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                        <div class="flex justify-between items-start mb-4">
                            <img src="<?= htmlspecialchars($coin['image_url']) ?>" alt="<?= htmlspecialchars($coin['name']) ?>" class="w-8 h-8 rounded-full">
                            <div class="text-right">
                                <span class="<?= htmlspecialchars($coin['symbol']) ?>_price text-sm">$<?= number_format($coin['price'], 2) ?></span>
                                <span class="<?= htmlspecialchars($coin['symbol']) ?>_price_history text-green-500 text-xs block"><?= htmlspecialchars($coin['price_history']) ?>%</span>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <p class="font-medium text-sm">
                                <?= htmlspecialchars($coin['name']) ?>
                                <?php if (!empty($coin['network_badge'])): ?>
                                    <span class="network-badge"><?= htmlspecialchars($coin['network_badge']) ?></span>
                                <?php endif; ?>
                            </p>
                            <div class="flex justify-between text-xs text-gray-400">
                                <span>
                                    <span class="<?= htmlspecialchars($coin['symbol']) ?>_funds">
                                        <?= htmlspecialchars($coin['balance']) ?>
                                    </span>
                                    <?= htmlspecialchars($coin['symbol']) ?>
                                </span>
                                <span class="<?= htmlspecialchars($coin['symbol']) ?>_fiat_worth">$<?= number_format($coin['fiat_worth'], 2) ?></span>
                            </div>
                        </div>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const userMenu = document.getElementById('userMenu');
            const userMenuToggle = document.getElementById('userMenuToggle');
            const userMenuBackdrop = document.getElementById('userMenuBackdrop');

            const showUserMenu = () => {
                userMenu.classList.remove('hidden');
                userMenu.classList.add('flex', 'justify-end');
            };

            const hideUserMenu = () => {
                userMenu.classList.remove('flex', 'justify-end');
                userMenu.classList.add('hidden');
            };

            userMenuToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                if (userMenu.classList.contains('hidden')) {
                    showUserMenu();
                } else {
                    hideUserMenu();
                }
            });

            document.addEventListener('click', (e) => {
                if (!userMenu.contains(e.target) && e.target !== userMenuToggle) {
                    hideUserMenu();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !userMenu.classList.contains('hidden')) {
                    hideUserMenu();
                }
            });
        });

        // Google Translate
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en'
            }, 'google_translate_element');
        }
    </script>
    <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>

</html>