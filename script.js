function openWhatsApp() {
  window.open("https://wa.me/27603640096", "_blank");
}

function redirectToPayment(service) {
  alert(`Redirecting to payment for: ${service}`);
  window.location.href = "https://your-payment-link.com"; // Replace with real gateway
}
