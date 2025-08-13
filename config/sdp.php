<?php
/**
 * config/db.php
 * * This file is responsible for establishing a database connection using PDO
 * (PHP Data Objects) and making the connection object available globally
 * as the $pdo variable. This resolves the "Undefined variable $pdo" error.
 * * You MUST replace the placeholder values for host, dbname, username, and password
 * with your actual database credentials.
 */

// --- Database Credentials ---
// Replace these with your real database connection details
$host = 'phpmyadmin';
$dbname = 'qfsself'; // Change this to your database name
$username = 'root'; // Change this to your database username
$password = ''; // Change this to your database password (often empty for local XAMPP setups)

// --- Database Connection Logic ---
try {
    // Data Source Name (DSN) string
    // Specifies the database type (mysql), host, and database name.
    $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
    
    // Create a new PDO instance
    // The connection will be stored in the $pdo variable.
    $pdo = new PDO($dsn, $username, $password, [
        // PDO Attributes for better configuration:
        // 1. PDO::ATTR_ERRMODE: Configures how PDO handles errors.
        //    PDO::ERRMODE_EXCEPTION makes PDO throw exceptions on errors, which
        //    allows for cleaner error handling with try/catch blocks.
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, 
        
        // 2. PDO::ATTR_DEFAULT_FETCH_MODE: Sets the default fetch style.
        //    PDO::FETCH_ASSOC returns each row as an associative array,
        //    which is a very common and convenient format.
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,     
        
        // 3. PDO::ATTR_EMULATE_PREPARES: Disables query emulation.
        //    This ensures that the database itself handles the prepared statements,
        //    providing better security against SQL injection.
        PDO::ATTR_EMULATE_PREPARES   => false,                
    ]);

} catch (PDOException $e) {
    // This block catches any exceptions thrown during the connection attempt.
    // We log the detailed error message for debugging purposes.
    error_log("Database connection failed: " . $e->getMessage());
    
    // We display a generic, user-friendly message to prevent sensitive
    // database information from being shown to the public.
    die("Database connection failed. Please try again later.");
}

// session.php
// This script checks if a user session is active and redirects if they try to access
// login or signup pages while already logged in.

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Check if 'user_id' is set in the session.
if (isset($_SESSION['user_id'])) {
    // If the user is logged in, redirect them to the dashboard.
    header("Location: dashboard.php");
    exit;
}
