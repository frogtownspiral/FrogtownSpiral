emailjs.init("YOUR_PUBLIC_KEY");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const button = form.querySelector("button");
  button.innerText = "Sending...";
  button.disabled = true;

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      button.innerText = "Sent!";
      form.reset();
    })
    .catch(() => {
      button.innerText = "Error - Try Again";
      button.disabled = false;
    });
});
