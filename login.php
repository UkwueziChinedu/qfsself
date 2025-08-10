<?php
ob_start(); // Start output buffering
session_start();
require_once 'config/db.php';

// CSRF token creation
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Handle form submission before any HTML output
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = trim($_POST["email"] ?? '');
    $password = $_POST["password"] ?? '';
    $csrf = $_POST["_token"] ?? '';

    // CSRF check
    if (!hash_equals($_SESSION['csrf_token'], $csrf)) {
        $_SESSION['error'] = "Invalid request. Please try again.";
        header("Location: login.php");
        exit;
    }

    if (empty($email) || empty($password)) {
        $_SESSION['error'] = "Email and password are required.";
        header("Location: login.php");
        exit;
    }

    try {
        // Check failed attempts
        $stmt = $pdo->prepare("SELECT failed_attempts, last_failed_login FROM users WHERE email = :email");
        $stmt->execute(['email' => $email]);
        $attemptData = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($attemptData && $attemptData['failed_attempts'] >= 5 && strtotime($attemptData['last_failed_login']) > strtotime('-15 minutes')) {
            $_SESSION['error'] = "Account locked due to too many failed logins. Try again later.";
            header("Location: login.php");
            exit;
        }

        // Fetch user
        $stmt = $pdo->prepare("SELECT id, username, password_hash, two_factor_secret FROM users WHERE email = :email");
        $stmt->execute(['email' => $email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password_hash'])) {
            // Reset failed attempts
            $pdo->prepare("UPDATE users SET failed_attempts = 0, last_failed_login = NULL WHERE id = :id")
                ->execute(['id' => $user['id']]);

            session_regenerate_id(true);

            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];

            if (!empty($user['two_factor_secret'])) {
                $_SESSION['2fa_pending'] = true;
                header("Location: two_factor");
                exit;
            }

            header("Location: dashboard");
            exit;
        } else {
            // Log failed attempt
            if ($attemptData) {
                $pdo->prepare("UPDATE users SET failed_attempts = failed_attempts + 1, last_failed_login = NOW() WHERE email = :email")
                    ->execute(['email' => $email]);
            }

            $_SESSION['error'] = "Invalid email or password.";
            header("Location: login.php");
            exit;
        }
    } catch (PDOException $e) {
        error_log("Login Error: " . $e->getMessage());
        $_SESSION['error'] = "An error occurred. Please try again.";
        header("Location: login.php");
        exit;
    }
}

require_once 'includes/header.php';
 ob_end_flush();
?>

<body class="bg-dark text-gray-100 antialiased min-h-screen">
    <div class="flex min-h-screen">
        <!-- Left Side - Video Background -->
        <div class="hidden lg:flex lg:w-1/2 relative">
            <div class="absolute inset-0">
                <div class="absolute inset-0 bg-dark/80 z-10"></div>
                <video autoplay muted loop playsinline class="w-full h-full object-cover">
                    <source src="img/videos/hero.mp4" type="video/mp4">
                </video>
            </div>
            <!-- Logo -->
            <div class="absolute top-8 left-8 z-20">
                <a href="/" class="flex items-center space-x-2">
                    <span class="text-xl font-bold text-white">QFS</span>
                    <span class="text-xl font-bold text-primary">Self</span>
                    <span class="text-xl font-bold text-primary">Custody</span>
                    <span class="text-xl font-bold text-white">Ledger</span>
                </a>
            </div>
        </div>

        <!-- Right Side - Auth Content -->
        <div class="w-full lg:w-1/2 flex flex-col min-h-screen">
            <!-- Mobile Logo -->
            <div class="lg:hidden p-8">
                <a href="/" class="flex items-center space-x-2">
                    <span class="text-xl font-bold text-white">QFS</span>
                    <span class="text-xl font-bold" style="color: rgb(255, 99, 71);">Self</span>
                    <span class="text-xl font-bold" style="color: rgb(255, 99, 71);">Custody</span>
                    <span class="text-xl font-bold text-white">Ledger</span>
                </a>
            </div>

            <!-- Auth Navigation -->
            <div class="flex justify-end px-8">
                <p class="text-gray-400">
                    Don't have an account?
                    <a href="register" style="color: rgb(255, 99, 71);">Sign up now</a>
                </p>
            </div>

            <!-- Main Content Area -->
            <div class="flex-grow flex items-center justify-center p-8">
                <div class="w-full max-w-md">
                    <h2 class="text-4xl font-bold mb-8" style="color: rgb(255, 99, 71);">Log In</h2>

                    <?php if (!empty($_SESSION['error'])): ?>
                        <p class="text-red-500 mb-4"><?= htmlspecialchars($_SESSION['error']) ?></p>
                        <?php unset($_SESSION['error']); ?>
                    <?php endif; ?>

                    <form method="POST" action="login.php" class="space-y-6">
                        <input type="hidden" name="_token" value="<?= htmlspecialchars($_SESSION['csrf_token']) ?>" autocomplete="off">

                        <!-- Email -->
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                            <input type="email" name="email" id="email" required
                                class="w-full bg-dark-lighter rounded-lg border-2 border-dark-lighter px-4 py-3 text-gray-300 focus:outline-none focus:ring-primary"
                                placeholder="Enter your email">
                        </div>

                        <!-- Password -->
                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-400 mb-2">Password</label>
                            <input type="password" name="password" id="password" required
                                class="w-full bg-dark-lighter rounded-lg border-2 border-dark-lighter px-4 py-3 text-gray-300 focus:outline-none focus:ring-primary"
                                placeholder="Enter your password">
                        </div>

                        <!-- Forgot Password -->
                        <div class="flex justify-end">
                            <a href="reset" class="text-sm" style="color: rgb(255, 99, 71);">Forgot Password?</a>
                        </div>

                        <!-- Submit -->
                        <button type="submit" style="background-color:rgb(255, 99, 71)"
                            class="w-full text-white py-4 px-8 rounded-lg hover:bg-primary-dark font-semibold">
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

<?php require_once 'includes/footer.php'; ?>
<?php ?>
