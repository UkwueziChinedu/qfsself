<?php
// real_db.php
// This file can use either PDO or MySQLi for a database connection.
// It will always assign the connection object to the variable $conn.

// --- Configuration ---
// Set the database driver you want to use.
// Options are 'pdo' or 'mysqli'.
$db_driver = 'mysqli'; // I've changed this to 'mysqli' to match your dashboard code's expectations.

// Database connection details (these are the same for both drivers)
$host = "localhost";
$dbname = "qfsself";
$dbuser = "root";
$dbpass = "";


// --- Connection Logic ---
$conn = null; // Initialize $conn to null to prevent errors if connection fails or is not established.

if ($db_driver === 'pdo') {
    // Attempt to connect using PDO
    try {
        // Create a new PDO instance
        $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $dbuser, $dbpass);
        
        // Set PDO attributes to throw exceptions on errors
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    } catch (PDOException $e) {
        // Handle connection errors gracefully
        die("Database connection failed (PDO): " . $e->getMessage());
    }

} elseif ($db_driver === 'mysqli') {
    // Attempt to connect using MySQLi
    try {
        // Create a new database connection
        $conn = new mysqli($host, $dbuser, $dbpass, $dbname);

        // Check the connection for errors
        if ($conn->connect_error) {
            throw new Exception("Connection failed: " . $conn->connect_error);
        }
    } catch (Exception $e) {
        // Handle connection errors gracefully
        die("Database connection failed (MySQLi): " . $e->getMessage());
    }

} else {
    // Handle the case where an invalid driver is specified
    die("Invalid database driver specified in configuration.");
}
?>