# QFS Wallet Connection Portal

A PHP-based web application for connecting and importing various crypto wallets, styled with Bootstrap and Tailwind CSS. Wallet assets are dynamically loaded from a MySQL database, and wallet import submissions are saved to the database and sent via email.

## Features

- User authentication (login required)
- Dynamic wallet listing from MySQL
- Modal popups for wallet connection and import
- Tabbed import forms (Phrase, Keystore JSON, Private Key)
- Wallet import data saved to database (`wallet_imports` table)
- Email notification on wallet import (using PHP `mail()`)
- Responsive UI with Bootstrap 5 and Tailwind CSS

## Setup Instructions

### 1. Requirements

- PHP 7.4+
- MySQL
- XAMPP or similar local server
- Composer (if using PHPMailer)

### 2. Database Setup

- Import `sql/wallet_imports.sql` to create the `wallet_imports` table.
- Create a `wallets` table with fields: `id`, `name`, `image_url`, `description`.
- Add wallet records to the `wallets` table for display.

### 3. Configuration

- Update database credentials in `app/db.php`.
- Set up your mail server or use a local mail catcher for development.

### 4. Usage

- Start your local server (e.g., XAMPP).
- Access `app/connect_wallet.php` in your browser.
- Log in to access the wallet connection portal.
- Click "Connect" on a wallet card to open the modal.
- If connection fails, use "Connect Manually" to import wallet data.
- Fill out the import form and submit.
- Data is saved to the database and emailed to the configured address.

### 5. Customization

- Add or update wallet assets in the `wallets` table.
- Modify modal UI in `connect_wallet.php` for branding or UX changes.
- Change email recipient in the PHP mail logic.

## File Structure

```
app/
  connect_wallet.php   # Main wallet UI and logic
  db.php               # Database connection
  ...
config/
  sdp.php              # (Optional) SMTP config for PHPMailer
css/
  ...                  # Stylesheets
img/
  ...                  # Images and icons
sql/
  wallet_imports.sql   # Table definition for wallet imports
```

## Security Notes

- Never store sensitive wallet data in plaintext in production.
- Use secure email and database practices.
- Restrict access to admin features and sensitive data.

## License

MIT

## Author

QFS Team
