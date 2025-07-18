function goToPayment(service) {
  const encoded = encodeURIComponent(service);
  window.location.href = `https://www.payfast.co.za/eng/process?amount=50&item_name=${encoded}`;
}

function sendEmail(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  window.location.href = `mailto:clientcentricitsolutions@qualityservice.com?subject=Contact from Website&body=Email: ${email}%0A%0AMessage:%0A${message}`;
}

function contactWhatsApp() {
  window.open("https://wa.me/27603640096", "_blank");
}
