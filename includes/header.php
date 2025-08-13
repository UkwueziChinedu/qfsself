<?php
// We only start a session here if it hasn't been started in a preceding script.
// This prevents "session_start(): A session had already been started..." warnings.
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="Sw2oQjmEN4W5UEkehF0aa9HkMxDObLRSXhui3k5l">
  <title>QFS Self Custody Ledger</title>
  <link rel="icon" href="img/favicon.ico" sizes="any">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <!-- Tailwind (play CDN) -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Bootstrap 5 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Preserve original app CSS & JS -->
  <link rel="preload" as="style" href="css/style.css" />
  <!-- <link rel="stylesheet" href="css/reset.css" /> -->
  <script type="module" src="js/app.js"></script>

  <!-- Smartsupp Live Chat script -->
  <script type="text/javascript">
    var _smartsupp = _smartsupp || {};
    _smartsupp.key = 'f72cb96b5833ed8e85266d52c8356b25a89b2121';
    window.smartsupp || (function(d) {
      var s, c, o = smartsupp = function() {
        o._.push(arguments)
      };
      o._ = [];
      s = d.getElementsByTagName('script')[0];
      c = d.createElement('script');
      c.type = 'text/javascript';
      c.charset = 'utf-8';
      c.async = true;
      c.src = 'https://www.smartsuppchat.com/loader.js?';
      s.parentNode.insertBefore(c, s);
    })(document);
  </script>
  <noscript> Powered by <a href="https://www.smartsupp.com" target="_blank">Smartsupp</a></noscript>

  <style>
    /* Small helper to keep dark theme similar to original */
    :root {
      --qfs-dark: #0b0f14;
      --qfs-dark-lighter: #0e1318;
      --qfs-dark-medium: #11151a;
      --qfs-primary: #6b6df3;
      /* fallback */
    }

    .bg-dark {
      background-color: var(--qfs-dark) !important;
    }

    .bg-dark-lighter {
      background-color: var(--qfs-dark-lighter) !important;
    }

    .bg-dark-medium {
      background-color: var(--qfs-dark-medium) !important;
    }

    .text-primary {
      color: var(--qfs-primary) !important;
    }

    .border-primary {
      border-color: rgba(107, 109, 243, .25) !important;
    }

    /* keep hero full height under navbar */
    header.hero {
      min-height: calc(100vh - 64px);
    }

    /* small responsive iframe fix */
    .responsive-iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #0d0d0d;
      padding: 10px 40px;
       z-index: 999; /* stay on top of other elements */
       width: 100%;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      color: white;
      font-weight: bold;
    }

    .logo img {
      width: 100%;
      height: 35px;
    }

    .nav-links {
      display: flex;
      gap: 25px;
      list-style: none;
    }

    .nav-links a {
      text-decoration: none;
      color: white;
      font-size: 16px;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      color: #ff5a36;
    }

    .auth-buttons {
      display: flex;
      gap: 10px;
    }

    .auth-buttons a {
      padding: 6px 14px;
      text-decoration: none;
      font-weight: bold;
      border-radius: 3px;
      transition: all 0.3s;
    }

    .login {
      color: #ff5a36;
      border: 1px solid #ff5a36;
      background: transparent;
    }

    .login:hover {
      background: #ff5a36;
      color: white;
    }

    .register {
      background: #ff5a36;
      color: white;
    }

    .register:hover {
      background: #e24c2c;
    }

    /* ✅ Mobile responsiveness */
    @media (max-width: 768px) {
      .navbar {
        flex-wrap: wrap;
        padding: 10px 20px;
      }

      .nav-links {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        margin-top: 10px;
        gap: 15px;
      }

      .auth-buttons {
        width: 100%;
        justify-content: flex-start;
        gap: 8px;
        margin-top: 10px;
      }

      .nav-links a,
      .auth-buttons a {
        font-size: 14px;
      }
    }

    @media (max-width: 480px) {
      .navbar {
        padding: 10px 15px;
      }

      .logo img {
        width: 80px;
        height: auto;
      }

      .nav-links {
        gap: 10px;
      }

      .auth-buttons {
        flex-direction: column;
        align-items: stretch;
      }

      .auth-buttons a {
        text-align: center;
      }
    }

    /* Mobile Toggle Button */
    .nav-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 24px;
      color: white;
      cursor: pointer;
    }

    /* Mobile styles */
    @media (max-width: 768px) {
      .nav-toggle {
        display: block;
      }

      .nav-links,
      .auth-buttons {
        display: none;
        flex-direction: column;
        width: 100%;
        margin-top: 10px;
      }

      .nav-links.active,
      .auth-buttons.active {
        display: flex;
      }
    }
  </style>

</head>