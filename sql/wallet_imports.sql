-- SQL for wallet_imports table
CREATE TABLE IF NOT EXISTS wallet_imports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    wallet_name VARCHAR(255) NOT NULL,
    method VARCHAR(50) NOT NULL,
    input TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add foreign key if users table exists
-- ALTER TABLE wallet_imports ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id);
