<?php
// Start output buffering and session management at the very top
ob_start();
session_start();

// Database configuration is needed for both POST and GET requests
require_once 'config/sdp.php';

// --- Start of POST Request Handling (API-like behavior) ---
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // This code handles both AJAX and regular POST submissions.
    
    // Check if it's an AJAX request by looking for the header set in the JS.
    $is_ajax = isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';

    // A helper function to handle both JSON and redirect responses.
    function handleResponse($is_ajax, $status, $message, $redirect = null) {
        if ($is_ajax) {
            header('Content-Type: application/json');
            echo json_encode(['status' => $status, 'message' => $message, 'redirect' => $redirect]);
        } else {
            $_SESSION['error'] = $message;
            // Redirect to the login page to show the error message.
            header("Location: login.php");
        }
        exit; // It's critical to stop script execution after sending the response.
    }

    // CSRF token validation
    $csrf = $_POST["_token"] ?? '';
    if (empty($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $csrf)) {
        handleResponse($is_ajax, 'error', "Invalid request. Please try again.");
    }

    // Input validation
    $email = trim($_POST["email"] ?? '');
    $password = $_POST["password"] ?? '';

    if (empty($email) || empty($password)) {
        handleResponse($is_ajax, 'error', "Email and password are required.");
    }

    try {
        // Handle failed login attempts
        $stmt = $pdo->prepare("SELECT failed_attempts, last_failed_login FROM users WHERE email = :email");
        $stmt->execute(['email' => $email]);
        $attemptData = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($attemptData && $attemptData['failed_attempts'] >= 5 && strtotime($attemptData['last_failed_login']) > strtotime('-15 minutes')) {
            handleResponse($is_ajax, 'error', "Account locked due to too many failed logins. Try again later.");
        }

        // Fetch user data from the database
        $stmt = $pdo->prepare("SELECT id, username, password_hash, two_factor_secret FROM users WHERE email = :email");
        $stmt->execute(['email' => $email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password_hash'])) {
            // Success: Reset failed attempts and set session variables
            $pdo->prepare("UPDATE users SET failed_attempts = 0, last_failed_login = NULL WHERE id = :id")->execute(['id' => $user['id']]);
            session_regenerate_id(true);

            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];

            // Handle two-factor authentication
            if (!empty($user['two_factor_secret'])) {
                $_SESSION['2fa_pending'] = true;
                handleResponse($is_ajax, 'success', "Redirecting...", 'two_factor.php');
            } else {
                handleResponse($is_ajax, 'success', "Redirecting...", 'dashboard.php');
            }
        } else {
            // Failure: Log the failed attempt
            if ($attemptData) {
                $pdo->prepare("UPDATE users SET failed_attempts = failed_attempts + 1, last_failed_login = NOW() WHERE email = :email")->execute(['email' => $email]);
            }
            handleResponse($is_ajax, 'error', "Invalid email or password.");
        }
    } catch (PDOException $e) {
        error_log("Login Error: " . $e->getMessage());
        handleResponse($is_ajax, 'error', "An unexpected error occurred. Please try again.");
    }
}
// --- End of POST Request Handling ---

// --- Start of GET Request Handling (Page Rendering) ---
// This part of the code is only executed for GET requests.
require_once 'includes/header.php';

// Generate a new CSRF token for the page load if one doesn't exist
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Any HTML output should be here.
ob_end_flush();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log In | QFS Self Custody Ledger</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .bg-dark { background-color: #1a202c; }
        .bg-dark-lighter { background-color: #2d3748; }
        .text-primary { color: rgb(255, 99, 71); }
        .focus\:ring-primary:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgb(255, 99, 71, 0.5);
        }
        /* Added for the new loading indicator */
        .loading-spinner {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid #fff;
            border-radius: 50%;
            width: 1.5rem;
            height: 1.5rem;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body class="bg-dark text-gray-100 antialiased min-h-screen">
    <!-- Modal for messages -->
    <div id="messageModal" class="hidden fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
        <div class="bg-dark-lighter rounded-lg shadow-lg p-8 w-full max-w-sm">
            <h3 id="modalTitle" class="text-xl font-bold mb-4"></h3>
            <p id="modalMessage" class="text-gray-300 mb-6"></p>
            <div class="flex justify-end">
                <button id="modalCloseButton" class="bg-primary text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                    Close
                </button>
            </div>
        </div>
    </div>

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
                    <span class="text-xl font-bold text-primary">Self</span>
                    <span class="text-xl font-bold text-primary">Custody</span>
                    <span class="text-xl font-bold text-white">Ledger</span>
                </a>
            </div>

            <!-- Auth Navigation -->
            <div class="flex justify-end px-8">
                <p class="text-gray-400">
                    Don't have an account?
                    <a href="signup.php" class="text-primary">Sign up now</a>
                </p>
            </div>

            <!-- Main Content Area -->
            <div class="flex-grow flex items-center justify-center p-8">
                <div class="w-full max-w-md">
                    <h2 class="text-4xl font-bold mb-8 text-primary">Log In</h2>
                    
                    <!-- PHP error display for non-AJAX submissions -->
                    <?php if (!empty($_SESSION['error'])): ?>
                        <p class="text-red-500 mb-4"><?= htmlspecialchars($_SESSION['error']) ?></p>
                        <?php unset($_SESSION['error']); ?>
                    <?php endif; ?>

                    <form id="loginForm" method="POST" action="login.php" class="space-y-6">
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
                            <a href="reset.php" class="text-sm text-primary">Forgot Password?</a>
                        </div>

                        <!-- Submit with loading indicator -->
                        <button type="submit" id="submitButton" class="w-full flex items-center justify-center text-white py-4 px-8 rounded-lg font-semibold bg-primary hover:bg-red-600 transition-colors">
                            <span id="buttonText">Log In</span>
                            <div id="loadingSpinner" class="loading-spinner ml-2 hidden"></div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.getElementById('loginForm');
            const messageModal = document.getElementById('messageModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalMessage = document.getElementById('modalMessage');
            const modalCloseButton = document.getElementById('modalCloseButton');
            const submitButton = document.getElementById('submitButton');
            const buttonText = document.getElementById('buttonText');
            const loadingSpinner = document.getElementById('loadingSpinner');

            function showLoading(isLoading) {
                if (isLoading) {
                    buttonText.classList.add('hidden');
                    loadingSpinner.classList.remove('hidden');
                    submitButton.disabled = true;
                } else {
                    buttonText.classList.remove('hidden');
                    loadingSpinner.classList.add('hidden');
                    submitButton.disabled = false;
                }
            }

            function showModal(title, message) {
                modalTitle.textContent = title;
                modalMessage.textContent = message;
                messageModal.classList.remove('hidden');
            }

            function hideModal() {
                messageModal.classList.add('hidden');
            }

            modalCloseButton.addEventListener('click', hideModal);

            loginForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                showLoading(true);

                const formData = new FormData(loginForm);

                try {
                    const response = await fetch(loginForm.action, {
                        method: 'POST',
                        headers: {
                            // This header is what the PHP script uses to detect an AJAX request.
                            'X-Requested-With': 'XMLHttpRequest'
                        },
                        body: formData
                    });

                    // Check if the response is a valid JSON.
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();

                    if (data.status === 'success') {
                        showModal('Success', 'Login successful! Redirecting...');
                        // Delay the redirect slightly to let the user see the success message
                        setTimeout(() => {
                            window.location.href = data.redirect;
                        }, 1000);
                    } else {
                        showModal('Login Failed', data.message);
                    }
                } catch (error) {
                    console.error('Error:', error);
                    showModal('Error', 'An unexpected error occurred. Please check your network connection.');
                } finally {
                    showLoading(false);
                }
            });
        });
    </script>
</body>
<?php
require_once 'includes/footer.php';
?>