<?php
// success_connect.php
$transaction_id = $_GET['txid'] ?? '';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="x2WU91pF6thagzE6a8xJoCAQbypF4quK6gPStL5Y">
    <title>Success | QFS Self Custody Ledger</title>
    <link rel="icon" href="https://qfsselfcustody.com/favicon.ico" sizes="any">
    <link rel="apple-touch-icon" href="https://qfsselfcustody.com/apple-touch-icon.png">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=DM+Sans:400,400i,700,900&display=swap" rel="stylesheet">
    <style>
        body {
            text-align: center;
            padding: 40px 0;
            background: #EBF0F5;
            font-family: "DM Sans", sans-serif;
        }

        h1 {
            color: #88B04B;
            font-weight: 900;
            font-size: 40px;
            margin-bottom: 10px;
        }

        p {
            color: #404F5E;
            font-size: 20px;
            margin: 0;
        }

        i {
            color: #9ABC66;
            font-size: 100px;
            line-height: 200px;
            margin-left: -15px;
        }

        .card {
            background: white;
            padding: 60px;
            border-radius: 4px;
            box-shadow: 0 2px 3px #C8D0D8;
            display: inline-block;
            margin: 0 auto;
        }

        .btn:hover {
            background-color: #769449;
        }

        .txthead h2 {
            color: rgb(255, 120, 95);
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }

        .success-card {
            background: #fff;
            border-radius: 1.5rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.10);
            border: none;
        }

        .success-icon {
            width: 64px;
            height: 64px;
            fill: #28a745;
        }

        .btn-success {
            background-color: rgb(255, 120, 95) !important;
            border-color: rgb(255, 120, 95) !important;
        }

        .btn-success:hover,
        .btn-success:focus,
        .btn-success:active {
            background-color: rgb(235, 100, 75) !important;
            border-color: rgb(235, 100, 75) !important;
        }

        .btn-dashboard {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: linear-gradient(135deg, rgb(255, 120, 95), rgb(255, 140, 115));
            color: white;
            padding: 12px 20px;
            border-radius: 10px;
            font-size: 16px;
            font-weight: bold;
            text-decoration: none;
            box-shadow: 0 4px 10px rgba(255, 120, 95, 0.3);
            transition: all 0.3s ease-in-out;
        }

        .btn-dashboard .icon {
            width: 20px;
            height: 20px;
            fill: white;
            transition: transform 0.3s ease;
        }

        .btn-dashboard:hover {
            background: linear-gradient(135deg, rgb(235, 100, 75), rgb(255, 120, 95));
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(255, 120, 95, 0.4);
        }

        .btn-dashboard:hover .icon {
            transform: rotate(15deg);
        }
    </style>
</head>

<body class="bg-gray-100">

    <div class="d-flex justify-content-center">
        <div id="google_translate_element"></div>
    </div>

    <div class="container py-5 txthead">
        <div class="row justify-content-center p-5 shadow-lg">
            <div class="col-md-6">
                <div class="card success-card p-5 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="success-icon mb-3" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM7 10.414l4.707-4.707-1.414-1.414L7 7.586 5.707 6.293 4.293 7.707 7 10.414z" />
                    </svg>
                    <h2 class="mb-3 text-success">Success!</h2>
                    <p class="mb-2">Your wallet import was submitted successfully.</p>
                    <div class="mb-3">
                        <span class="fw-bold">Transaction ID:</span>
                        <span class="text-primary"><?php echo htmlspecialchars($transaction_id); ?></span>
                    </div>
                    <p class="mb-3">Please keep your Transaction ID safe.</p>

                    <a href="../dashboard.php" class="btn-dashboard">
                       Go to Dashboard
                    </a>

                </div>
            </div>
        </div>
    </div>

    <script>
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en'
            }, 'google_translate_element');
        }
    </script>
    <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>

</html>