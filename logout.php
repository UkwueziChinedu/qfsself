<?php
// logout.php
// This script handles user logout with a confirmation prompt.

// Start the session to access session variables.
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Check if the user has confirmed logout via a POST request.
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Unset all of the session variables.
    $_SESSION = [];

    // Destroy the session.
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
    }
    session_destroy();

    // Redirect to the login page after a successful logout.
    header("Location: login.php");
    exit;
}

// If it's a GET request, display the confirmation page.
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logout Confirmation</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
        .bg-dark { background-color: #1a202c; }
        .bg-dark-lighter { background-color: #2d3748; }
        .text-primary { color: rgb(255, 99, 71); }
    </style>
</head>
<body class="bg-dark text-gray-100 antialiased min-h-screen flex items-center justify-center p-4">

    <div class="w-full max-w-md bg-dark-lighter rounded-lg shadow-lg p-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Are you sure you want to log out?</h2>
        <p class="text-gray-400 mb-6">You will be securely logged out of your account.</p>
        
        <form method="POST" action="logout.php" class="space-y-4">
            <button type="submit" class="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Yes, Log Me Out
            </button>
            <a href="dashboard.php" class="block text-gray-400 hover:text-white transition-colors py-2">
                No, go back
            </a>
        </form>
    </div>

</body>
</html>
