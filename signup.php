<?php
ob_start();
session_start();
require_once 'includes/header.php';
require_once 'config/db.php';

// CSRF protection token
if (empty($_SESSION['_token'])) {
    $_SESSION['_token'] = bin2hex(random_bytes(32));
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Validate CSRF token
    if (!hash_equals($_SESSION['_token'], $_POST['_token'] ?? '')) {
        $_SESSION['error'] = "Invalid request token.";
        header("Location: signup");
        exit;
    }

    // Get and sanitize inputs
    $username = trim($_POST["username"] ?? '');
    $email    = trim($_POST["email"] ?? '');
    $password = $_POST["password"] ?? '';

    // Validate fields
    if ($username === '' || $email === '' || $password === '') {
        $_SESSION['error'] = "All fields are required.";
        header("Location: signup");
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $_SESSION['error'] = "Invalid email format.";
        header("Location: signup");
        exit;
    }

    if (strlen($password) < 8) {
        $_SESSION['error'] = "Password must be at least 8 characters.";
        header("Location: signup");
        exit;
    }

    try {
        // Check if username or email exists
        $stmt = $pdo->prepare("SELECT id FROM users WHERE username = :username OR email = :email");
        $stmt->execute(['username' => $username, 'email' => $email]);
        
        if ($stmt->fetch()) {
            $_SESSION['error'] = "Username or email already exists.";
            header("Location: signup");
            exit;
        }

        // Insert new user
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("INSERT INTO users (username, email, password_hash) VALUES (:username, :email, :password_hash)");
        $stmt->execute([
            'username'      => $username,
            'email'         => $email,
            'password_hash' => $passwordHash
        ]);

        $_SESSION['success'] = "Account created successfully. Please log in.";
        header("Location: login");
        exit;
    } catch (PDOException $e) {
        error_log("Registration Error: " . $e->getMessage());
        $_SESSION['error'] = "An error occurred. Please try again.";
        header("Location: signup");
        exit;
    }
}
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
            <a href="/" class="flex items-center space-x-2 text-xl font-bold">
                <span class="text-white">QFS</span>
                <span>Self</span>
                <span>Custody</span>
                <span class="text-white">Ledger</span>
            </a>
        </div>
    </div>

    <!-- Right Side -->
    <div class="w-full lg:w-1/2 flex flex-col min-h-screen">
        <!-- Mobile Logo -->
        <div class="lg:hidden p-8">
            <a href="./" class="flex items-center space-x-2 text-xl font-bold">
                <span class="text-white">QFS</span>
                <span style="color: rgb(255, 99, 71);">Self</span>
                <span style="color: rgb(255, 99, 71);">Custody</span>
                <span class="text-white">Ledger</span>
            </a>
        </div>

        <!-- Navigation -->
        <div class="flex justify-end p-8">
            <p class="text-gray-400">
                Already have an account?
                <a href="login" style="color: rgb(255, 99, 71);" class="hover:text-primary-light transition-colors">
                    Sign in now
                </a>
            </p>
        </div>

        <!-- Main Form -->
        <div class="flex-grow flex items-center justify-center p-8">
            <div class="w-full max-w-md">
                <h2 class="text-4xl font-bold mb-8" style="color: rgb(255, 99, 71);">Sign Up</h2>
                <?php if (!empty($_SESSION['error'])): ?>
                    <p class="text-red-500 mb-4"><?= htmlspecialchars($_SESSION['error']) ?></p>
                    <?php unset($_SESSION['error']); ?>
                <?php endif; ?>
                <form method="POST" action="signup.php" class="space-y-6">
                    <input type="hidden" name="_token" value="<?= htmlspecialchars($_SESSION['_token']) ?>">
                    
                    <div>
                        <label for="username" class="block text-sm font-medium text-gray-400 mb-2">Username</label>
                        <input type="text" name="username" id="username" required
                            class="w-full bg-dark-lighter rounded-lg border-2 border-dark-lighter px-4 py-3 text-gray-300 focus:outline-none"
                            placeholder="Choose a username">
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                        <input type="email" name="email" id="email" required
                            class="w-full bg-dark-lighter rounded-lg border-2 border-dark-lighter px-4 py-3 text-gray-300 focus:outline-none"
                            placeholder="Enter your email">
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-400 mb-2">Password</label>
                        <input type="password" name="password" id="password" required
                            class="w-full bg-dark-lighter rounded-lg border-2 border-dark-lighter px-4 py-3 text-gray-300 focus:outline-none"
                            placeholder="Create a password">
                    </div>

                    <button type="submit" style="background-color:rgb(255, 99, 71)"
                        class="w-full text-white py-4 px-8 rounded-lg hover:bg-primary-dark transition-colors font-semibold">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
<?php require_once 'includes/footer.php'; ?>
