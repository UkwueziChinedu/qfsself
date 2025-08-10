  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

  <script>
    // Contact Form Handler (keeps original behavior)
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
      e.preventDefault();
      const form = this;
      const submitBtn = form.querySelector('button[type="submit"]');
      const info = document.getElementById('info');

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending...';
      info.classList.add('d-none');

      fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
          }
        })
        .then(response => response.json())
        .then(data => {
          info.textContent = data;
          info.classList.remove('d-none');
          form.reset();
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Message';
        });
    });

    // Google Translate
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'en'
      }, 'google_translate_element');
    }
  </script>
  <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

  <script>
    const toggleButton = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    const authButtons = document.querySelector(".auth-buttons");

    toggleButton.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      authButtons.classList.toggle("active");
    });
  </script>

  <script>
    // Smartsupp Live Chat
    var _smartsupp = _smartsupp || {};
    _smartsupp.key = "YOUR_SMARTSUP_KEY";
  </script>

</body>

</html>