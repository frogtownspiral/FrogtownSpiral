// Initialize EmailJS
(function () {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    this
  )
  .then(() => {
    alert("Request sent successfully!");
    this.reset();
  })
  .catch((error) => {
    alert("Failed to send. Try again.");
    console.error(error);
  });
});