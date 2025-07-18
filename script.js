function openWhatsApp() {
  window.open('https://wa.me/27603640096', '_blank');
}

function goToPayment(service) {
  alert(`You are being redirected to pay 50% deposit for: ${service}`);
  window.location.href = "https://www.payfast.co.za/eng/payment";
}

function sendEmail(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("All fields are required.");
    return;
  }

  const mailto = `mailto:clientcentricitsolutions@qualityservice.com?subject=Message from ${name}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
  window.location.href = mailto;
}
