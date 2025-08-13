--
-- Table structure for table `users`
--

CREATE TABLE users (
    -- Unique identifier for the user.
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    -- User's chosen username, must be unique.
    username VARCHAR(50) UNIQUE NOT NULL,
    
    -- User's email address, must be unique and is used for login.
    email VARCHAR(100) UNIQUE NOT NULL,
    
    -- Hashed password for security.
    password_hash VARCHAR(255) NOT NULL,
    
    -- Timestamp when the user account was created.
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    -- Additional columns for security features.
    two_factor_secret VARCHAR(255) NULL,
    failed_attempts INT DEFAULT 0,
    last_failed_login TIMESTAMP NULL
);


the login.php isnt working can u use ajax.js to help both