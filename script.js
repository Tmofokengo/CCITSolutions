function goToPayment(service) {
  const paymentURL = "https://paystack.com/pay/clientcentric"; // Update to your real gateway
  alert(`You'll be redirected to make a 50% deposit for: ${service}`);
  window.open(paymentURL, "_blank");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  const mailto = `mailto:clientcentricitsolutions@qualityservice.com?subject=Message from ${email}&body=${encodeURIComponent(message)}`;
  window.location.href = mailto;
});
