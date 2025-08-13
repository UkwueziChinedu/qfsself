<?php
// signup.php
// This script handles user registration, form validation, and database insertion.
// It also includes the HTML for the signup form and a success modal.

// Start output buffering and session to handle headers and session variables.
ob_start();
session_start();

// Include necessary files.
// require_once 'includes/header.php'; // Assuming this file exists and contains the opening HTML tags.
require_once 'config/sdp.php';     // Assumes db.php is in a 'config' directory.

// --- PHP Logic for Form Submission ---
// CSRF protection token
// This generates a unique token to protect against Cross-Site Request Forgery attacks.
if (empty($_SESSION['_token'])) {
    $_SESSION['_token'] = bin2hex(random_bytes(32));
}

// Check if the request method is POST.
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Validate CSRF token.
    // We use hash_equals for a timing attack safe comparison.
    if (!hash_equals($_SESSION['_token'], $_POST['_token'] ?? '')) {
        // Return a 403 Forbidden status and JSON response for invalid token.
        http_response_code(403);
        echo json_encode(['success' => false, 'error' => "Invalid request token."]);
        exit;
    }

    // Get and sanitize inputs.
    $username = trim($_POST["username"] ?? '');
    $email    = trim($_POST["email"] ?? '');
    $password = $_POST["password"] ?? '';

    // Validate fields.
    // If any field is empty, return a 400 Bad Request status.
    if ($username === '' || $email === '' || $password === '') {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => "All fields are required."]);
        exit;
    }

    // Validate email format.
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => "Invalid email format."]);
        exit;
    }

    // Validate password length.
    if (strlen($password) < 8) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => "Password must be at least 8 characters."]);
        exit;
    }

    try {
        // Check if username or email already exists in the database.
        // We use a prepared statement to prevent SQL injection.
        // The `$pdo` variable comes from `config/db.php`.
        $stmt = $pdo->prepare("SELECT id FROM users WHERE username = :username OR email = :email");
        $stmt->execute(['username' => $username, 'email' => $email]);
        
        if ($stmt->fetch()) {
            // If a user with that username or email is found, return a 409 Conflict status.
            http_response_code(409);
            echo json_encode(['success' => false, 'error' => "Username or email already exists."]);
            exit;
        }

        // Insert the new user into the database.
        // Hash the password before storing it for security.
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("INSERT INTO users (username, email, password_hash) VALUES (:username, :email, :password_hash)");
        $stmt->execute([
            'username'      => $username,
            'email'         => $email,
            'password_hash' => $passwordHash
        ]);

        // If insertion is successful, return a 201 Created status.
        http_response_code(201);
        echo json_encode(['success' => true, 'message' => "Account created successfully!"]);
        exit;

    } catch (PDOException $e) {
        // Catch any database errors.
        error_log("Registration Error: " . $e->getMessage());
        http_response_code(500); // Internal Server Error
        echo json_encode(['success' => false, 'error' => "An error occurred. Please try again."]);
        exit;
    }
}
ob_end_flush();
?>

<!-- HTML for the signup form and modal -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up | QFS Self Custody Ledger</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
        .bg-dark { background-color: #0d1117; }
        .bg-dark-lighter { background-color: #161b22; }
        .bg-dark-medium { background-color: #1f242b; }
        .text-primary { color: rgb(255, 99, 71); }
        .hover\:bg-primary-dark:hover { background-color: rgb(220, 80, 60); }
        .hover\:text-primary-light:hover { color: rgb(255, 120, 95); }
    </style>
</head>
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
                    <span class="text-primary">Self</span>
                    <span class="text-primary">Custody</span>
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
                    <span class="text-primary">Self</span>
                    <span class="text-primary">Custody</span>
                    <span class="text-white">Ledger</span>
                </a>
            </div>

            <!-- Navigation -->
            <div class="flex justify-end p-8">
                <p class="text-gray-400">
                    Already have an account?
                    <a href="login.php" class="text-primary hover:text-primary-light transition-colors">
                        Sign in now
                    </a>
                </p>
            </div>

            <!-- Main Form -->
            <div class="flex-grow flex items-center justify-center p-8">
                <div class="w-full max-w-md">
                    <h2 class="text-4xl font-bold mb-8 text-primary">Sign Up</h2>
                    <!-- Message container for errors -->
                    <div id="form-error-message" class="text-red-500 mb-4 hidden rounded-lg bg-red-100/10 p-4"></div>
                    <form id="signup-form" method="POST" action="signup.php" class="space-y-6">
                        <!-- CSRF Token field -->
                        <input type="hidden" name="_token" value="<?= htmlspecialchars($_SESSION['_token'] ?? '') ?>">
                        
                        <div>
                            <label for="username" class="block text-sm font-medium text-gray-400 mb-2">Username</label>
                            <input type="text" name="username" id="username" required
                                class="w-full bg-dark-lighter rounded-lg border-2 border-dark-lighter px-4 py-3 text-gray-300 focus:outline-none focus:border-primary-light transition-colors"
                                placeholder="Choose a username">
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                            <input type="email" name="email" id="email" required
                                class="w-full bg-dark-lighter rounded-lg border-2 border-dark-lighter px-4 py-3 text-gray-300 focus:outline-none focus:border-primary-light transition-colors"
                                placeholder="Enter your email">
                        </div>

                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-400 mb-2">Password</label>
                            <input type="password" name="password" id="password" required
                                class="w-full bg-dark-lighter rounded-lg border-2 border-dark-lighter px-4 py-3 text-gray-300 focus:outline-none focus:border-primary-light transition-colors"
                                placeholder="Create a password">
                        </div>

                        <button type="submit"
                            class="w-full text-white py-4 px-8 rounded-lg hover:bg-primary-dark transition-colors font-semibold" style="background-color: rgb(255, 99, 71);">
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Success Modal -->
    <div id="success-modal" class="hidden fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div class="bg-dark-medium rounded-xl p-8 max-w-sm w-full text-center space-y-4 shadow-lg">
            <svg class="mx-auto h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-xl font-bold text-white">Account Created!</h3>
            <p class="text-gray-400">Your account has been successfully created. You can now log in.</p>
            <button id="close-modal-btn" type="button"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors">
                Continue to Login
            </button>
        </div>
    </div>

    <!-- jQuery for the AJAX example -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script>
        // --- JavaScript for Form Submission and Modal ---
        document.addEventListener('DOMContentLoaded', () => {
            const signupForm = document.getElementById('signup-form');
            const successModal = document.getElementById('success-modal');
            const closeModalBtn = document.getElementById('close-modal-btn');
            const errorMessageDiv = document.getElementById('form-error-message');

            // Event listener to close the modal and redirect to the login page.
            if (closeModalBtn) {
                closeModalBtn.addEventListener('click', () => {
                    successModal.classList.add('hidden');
                    window.location.href = 'login.php';
                });
            }

            if (signupForm) {
                // =================================================================
                // OPTION 1: Vanilla JavaScript Form Submission with Fetch API (Active by default)
                // This is the preferred modern approach and is already implemented here.
                // =================================================================
                signupForm.addEventListener('submit', async (event) => {
                    event.preventDefault(); // Prevent the default form submission.

                    const formData = new FormData(signupForm);

                    // Clear any previous error messages.
                    errorMessageDiv.classList.add('hidden');
                    errorMessageDiv.textContent = '';

                    try {
                        const response = await fetch(signupForm.action, {
                            method: signupForm.method,
                            body: formData,
                            headers: {
                                // This header helps the server identify an AJAX request.
                                'X-Requested-With': 'XMLHttpRequest'
                            }
                        });

                        const result = await response.json();

                        if (response.ok) {
                            // On a successful response (status code 200-299), show the modal.
                            successModal.classList.remove('hidden');
                        } else {
                            // On an error response (e.g., 400, 409, 500), display the error message from the server.
                            errorMessageDiv.textContent = result.error;
                            errorMessageDiv.classList.remove('hidden');
                        }
                    } catch (error) {
                        // This catch block handles network-level errors (e.g., server is down, no internet).
                        console.error('Network error:', error);
                        errorMessageDiv.textContent = 'A network error occurred. Please try again.';
                        errorMessageDiv.classList.remove('hidden');
                    }
                });
            }
        });

        // =================================================================
        // OPTION 2: jQuery Form Submission with $.ajax (Commented out)
        // This is a classic approach, provided here for reference.
        // =================================================================
        /*
        $(document).ready(function() {
            $('#signup-form').on('submit', function(event) {
                event.preventDefault(); // Prevent default form submission.

                const form = $(this);
                const formData = form.serialize();
                const actionUrl = form.attr('action');
                const errorMessageDiv = $('#form-error-message');

                errorMessageDiv.addClass('hidden').text('');

                $.ajax({
                    url: actionUrl,
                    method: 'POST',
                    data: formData,
                    dataType: 'json',
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    success: function(response) {
                        // On success, show the modal.
                        $('#success-modal').removeClass('hidden');
                    },
                    error: function(jqXHR) {
                        const response = jqXHR.responseJSON;
                        if (response && response.error) {
                            errorMessageDiv.text(response.error).removeClass('hidden');
                        } else {
                            errorMessageDiv.text('An error occurred. Please try again.').removeClass('hidden');
                        }
                    }
                });
            });

            // Close modal button functionality using jQuery.
            $('#close-modal-btn').on('click', function() {
                $('#success-modal').addClass('hidden');
                window.location.href = 'login.php';
            });
        });
        */
    </script>
    <!-- Assuming includes/footer.php exists and contains the closing HTML tags -->
</body>
</html>
