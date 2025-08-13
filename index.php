<?php
require_once 'includes/header.php';
?>

<body class="bg-dark text-white">

  <!-- Navbar -->
  <nav class="navbar P-8">
    <div class="logo">
      <img src="img/png/logo.png" alt="Logo">
    </div>

    <!-- Mobile Toggle Button -->
    <button class="nav-toggle" aria-label="Toggle navigation">
      ☰
    </button>

    <ul class="nav-links">
      <li><a href="#">About</a></li>
      <li><a href="#">Live Price</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

    <div class="auth-buttons">
      <a href="#" class="login">Login</a>
      <a href="#" class="register">Register</a>
    </div>
  </nav>


  <!-- Hero Section -->
  <header id="hero" class="hero position-relative p-4">
    <div class="position-absolute inset-0" style="inset:0;">
      <div class="position-absolute w-100 h-100" style="background:rgba(3,6,11,0.7);z-index:1;"></div>
      <video autoplay muted loop playsinline class="w-100 h-100 object-fit-cover position-absolute top-0 start-0" style="object-fit:cover;">
        <source src="img/videos/hero.mp4" type="video/mp4">
      </video>
    </div>

    <div class="container position-relative mt-5" style="z-index:2; padding-top:7rem; padding-bottom:4rem;">
      <div class="row align-items-center">
        <div class="col-md-7">
          <h1 class="display-5 fw-bold text-white">
            <span style="color:rgb(255, 99, 71)">QFS Self Custody Ledger</span>
            <div class="mt-3 fs-3">Secure Your Digital Assets</div>
          </h1>
          <p class="lead text-gray-300 mt-4">A User-Friendly and Potent Cryptocurrency Ledger</p>

          <div class="mt-4 d-flex flex-wrap gap-2">
            <a href="register" class="btn btn-lg text-white rounded-pill border-radius" style="background-color:rgb(255, 99, 71)">Get Started</a>
            <a href="#about" class="btn btn-outline-light btn-lg rounded-pill">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Live Price Ticker -->
  <div class="bg-dark-lighter py-3">
    <div style="height:62px; overflow:hidden; text-align:right; font-size:12px;">
      <div style="height:40px;">
        <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no"
          width="100%" height="36px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0"></iframe>
      </div>
    </div>
  </div>

  <!-- About Section -->
  <section id="about" class="py-5 bg-dark-lighter">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="fw-bold display-6">QFS Self Custody Ledger: <span class="text-uppercase">Driving the Crypto Economy!</span></h2>
        <p class="text-white/60 mx-auto" style="max-width:800px;">
          QFS Self Custody Ledger operates as a comprehensive
          cryptocurrency service platform, catering to both crypto-focused businesses and institutional clients. We
          provide customized solutions in lending, trading, and custody based on your specific requirements.</p>
      </div>

      <div class="row g-4 mb-5">
        <div class="col-md-3 bg-dark">
          <div class="p-4 rounded h-100">
            <img src="https://qfsselfcustody.com/images/accepted-worldwide.svg" alt="Worldwide" class="mb-3" width="64">
            <h5 class="fw-bold">Universally Accepted</h5>
            <p class="text-white/60">A global trading platform with unparalleled security.</p>
          </div>
        </div>

        <div class="col-md-3">
          <div class="p-4 rounded bg-dark h-100">
            <img src="https://qfsselfcustody.com/images/decentralised-currency.svg" alt="Decentralized" class="mb-3" width="64">
            <h5 class="fw-bold">Decentralised Currency</h5>
            <p class="text-white/60">Transparent and decentralized network currency.</p>
          </div>
        </div>

        <div class="col-md-3">
          <div class="p-4 rounded bg-dark h-100">
            <img src="https://qfsselfcustody.com/images/safe-and-secure.svg" alt="Security" class="mb-3" width="64">
            <h5 class="fw-bold">Secure and Reliable</h5>
            <p class="text-white/60">Top-tier security team protecting your assets.</p>
          </div>
        </div>

        <div class="col-md-3">
          <div class="p-4 rounded bg-dark h-100">
            <img src="https://qfsselfcustody.com/images/payment-integration.svg" alt="Insurance" class="mb-3" width="64">
            <h5 class="fw-bold">Safeguarded by Insurance</h5>
            <p class="text-white/60">QFS Self Custody Ledger maintains crypto insurance.</p>
          </div>
        </div>
      </div>

      <div class="p-4 rounded-3 bg-dark">
        <h3 class="fw-bold text-uppercase mt-5">Experts on Blockchain Data</h3>
        <h5 class="text-primary">What we are good at</h5>
        <ul class="mt-3 text-white/60">
          <li>Our main strength is the accessibility of our financial program, consistently open to crypto investors
            from all walks of life.</li>
          <li>Stay updated with the latest prices and charts, along with significant market cues.</li>
          <li>Validate transactions, scrutinize market trends, and expand your knowledge about cryptocurrency.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="service" class="py-5 bg-dark">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="fw-bold display-6">OUR MISSION</h2>
        <p class="fw-medium" style="color:rgb(255, 99, 71)">SMART MISSION MANAGEMENT</p>
        <div class="mx-auto" style="max-width:720px;">
          <p class="text-white/60">Our mission at QFS Self Custody Ledger is to promote the seamless global
            circulation of digital value.</p>
          <p class="text-white/60">QFS Self Custody Ledger asserts that the evolution of technology will revolutionize
            our approach to value creation and distribution. We look forward to a time when involvement with crypto
            will be universal.</p>
          <p class="text-white/60">Products Propelled by Technology: We are harnessing state-of-the-art technologies to
            establish valuable services that increase the accessibility of the blockchain revolution.</p>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-lg-4 col-md-6">
          <div class="p-4 rounded-3 bg-dark-lighter h-100">
            <div class="bg-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;">
              <img src="https://qfsselfcustody.com/images/investment.svg" alt="KYC" width="36">
            </div>
            <h5 class="fw-bold">KYC Verification</h5>
            <p class="text-white/60">Secure and streamlined identity verification process ensuring compliance and trust.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="p-4 rounded-3 bg-dark-lighter h-100">
            <div class="bg-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;">
              <img src="https://qfsselfcustody.com/images/digital-cash.svg" alt="Banking" width="36">
            </div>
            <h5 class="fw-bold">Crypto Banking</h5>
            <p class="text-white/60">Next-generation banking solutions for your digital assets with institutional-grade security.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="p-4 rounded-3 bg-dark-lighter h-100">
            <div class="bg-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;">
              <img src="https://qfsselfcustody.com/images/fast-transaction.svg" alt="Transactions" width="36">
            </div>
            <h5 class="fw-bold">Fast Transactions</h5>
            <p class="text-white/60">Lightning-fast transaction processing with minimal fees and maximum efficiency.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="p-4 rounded-3 bg-dark-lighter h-100">
            <div class="bg-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;">
              <img src="https://qfsselfcustody.com/images/low-risk.svg" alt="Asset Management" width="36">
            </div>
            <h5 class="fw-bold">Asset Management</h5>
            <p class="text-white/60">Professional portfolio management and risk assessment services for optimal returns.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="p-4 rounded-3 bg-dark-lighter h-100">
            <div class="bg-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;">
              <img src="https://qfsselfcustody.com/images/payment-integration.svg" alt="Updates" width="36">
            </div>
            <h5 class="fw-bold">Real-Time Updates</h5>
            <p class="text-white/60">Stay informed with instant notifications and live market data updates.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="p-4 rounded-3 bg-dark-lighter h-100">
            <div class="bg-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;">
              <img src="https://qfsselfcustody.com/images/safe-and-secure.svg" alt="Security" width="36">
            </div>
            <h5 class="fw-bold">Asset Security</h5>
            <p class="text-white/60">Multi-layer security protocols and insurance coverage for your digital assets.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Live Price Section -->
  <section id="buy-token" class="py-5 bg-dark-lighter">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="fw-bold display-6">Live Cryptocurrency Prices</h2>
        <p class="text-primary fw-medium">REAL-TIME MARKET DATA</p>
        <p class="text-white/60 mx-auto" style="max-width:800px;">Monitor cryptocurrency price changes in real-time. Stay informed with comprehensive market data and
          trading volumes.</p>
      </div>

      <div class="row g-4 mb-4">
        <div class="col-md-6">
          <div class="p-3 rounded-3 bg-dark" style="height:100%;">
            <div class="bg-dark p-2 rounded" style="height:440px;">
              <iframe class="responsive-iframe" src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=859&pref_coin_id=1505"></iframe>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="p-3 rounded-3 bg-dark" style="height:100%;">
            <div class="bg-dark p-2 rounded" style="height:440px;">
              <iframe class="responsive-iframe" src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=145&pref_coin_id=1505"></iframe>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-dark p-3 rounded-3 mb-4">
        <div class="bg-dark p-2 rounded" style="height:400px;">
          <iframe class="responsive-iframe" src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=6&pref_coin_id=1505&graph=yes"></iframe>
        </div>
      </div>

      <div class="text-center">
        <div class="mx-auto bg-dark p-4 rounded-3" style="max-width:800px;">
          <h3 class="fw-bold">Ready to Start Trading?</h3>
          <p class="text-white/60">Join QFS Self Custody Ledger today and access advanced trading features, secure storage, and real-time market data.</p>
          <a href="https://qfsselfcustody.com/register" class="btn btn-primary btn-lg">Create Your Account</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-5 bg-dark">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="fw-bold display-6" >Get In Touch</h2>
        <p class=" fw-medium" style="color:rgb(255, 99, 71)">CONTACT US</p>
      </div>

      <div class="row g-4">
        <div class="col-md-4">
          <div class="p-4 rounded-3 bg-dark">
            <h4 class="fw-bold">Contact Information</h4>
            <div class="mt-3">
              <div class="d-flex align-items-center mb-3">
                <div class="bg-dark-lighter rounded-circle p-2 me-3">
                  <svg class="bi" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                  </svg>
                </div>
                <a href="mailto:support@qfsselfcustody.com" class="text-white/60">support@qfsselfcustody.com</a>
              </div>

              <div class="d-flex align-items-center">
                <div class="bg-dark-lighter rounded-circle p-2 me-3">
                  <svg class="bi" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z" />
                  </svg>
                </div>
                <div class="text-white/60">
                  <p class="mb-0">24/7 Live Chat Support</p>
                  <small class="text-white/60">We're always here to help</small>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-md-8">
          <div class="p-4 rounded-3 bg-dark">
            <form method="POST" action="https://qfsselfcustody.com/contact" id="contactForm">
              <input type="hidden" name="_token" value="Sw2oQjmEN4W5UEkehF0aa9HkMxDObLRSXhui3k5l" autocomplete="off">

              <div class="row g-3 mb-3">
                <div class="col-md-6">
                  <label for="name" class="form-label text-white/60">Full Name</label>
                  <input type="text" id="name" name="name" required class="form-control bg-dark-lighter text-white border-0">
                </div>
                <div class="col-md-6">
                  <label for="email" class="form-label text-white/60">Email Address</label>
                  <input type="email" id="email" name="email" required class="form-control bg-dark-lighter text-white border-0">
                </div>
              </div>

              <div class="mb-3">
                <label for="message" class="form-label text-white/60">Message</label>
                <textarea id="message" name="message" rows="6" required class="form-control bg-dark-lighter text-white border-0"></textarea>
              </div>

              <div id="form-messages" class="notification contact d-none"></div>
              <p id="info" class="text-success d-none">Message sent successfully!</p>

              <button type="submit" class="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-4 bg-dark">
    <div class="container">
      <div class="row gy-4">
        <div class="col-md-4">
          <div class="d-flex align-items-center mb-3">
            <span class="fs-4 fw-bold me-2 text-white">QFS</span>
            <span class="fs-4 fw-bold text-primary">Self</span>
            <span class="fs-4 fw-bold text-primary">Custody</span>
            <span class="fs-4 fw-bold text-white">Ledger</span>
          </div>
          <p class="text-white/60">Our reputation as the world's most secure cryptocurrency platform is consistently affirmed through our commitment to full reserves, robust banking relationships, and strict compliance standards.</p>
        </div>

        <div class="col-md-2">
          <h6 class="fw-bold">Quick Links</h6>
          <ul class="list-unstyled text-white/60">
            <li><a href="#about" class="text-white/60">About Us</a></li>
            <li><a href="#buy-token" class="text-white/60">Live Prices</a></li>
            <li><a href="#service" class="text-white/60">Services</a></li>
            <li><a href="#contact" class="text-white/60">Contact</a></li>
          </ul>
        </div>

        <div class="col-md-2">
          <h6 class="fw-bold">Legal</h6>
          <ul class="list-unstyled text-white/60">
            <li><a href="https://qfsselfcustody.com/privacy-policy" class="text-white/60">Privacy Policy</a></li>
            <li><a href="#" class="text-white/60">Terms of Service</a></li>
          </ul>
        </div>

        <div class="col-md-4">
          <h6 class="fw-bold">Language</h6>
          <div id="google_translate_element"></div>
        </div>
      </div>

      <div class="border-top mt-4 pt-3 text-center">
        <p class="text-muted mb-0">&copy; 2025 QFS Self Custody Ledger. All rights reserved.</p>
      </div>
    </div>
  </footer>

<?php
require_once 'includes/footer.php';
?>