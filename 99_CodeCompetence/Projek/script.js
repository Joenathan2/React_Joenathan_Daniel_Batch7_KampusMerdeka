const form = document.getElementById("contactForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  document.getElementById("outputUsername").textContent = username;
  document.getElementById("outputEmail").textContent = email;
  document.getElementById("outputPesan").textContent = pesan;

  document.getElementById("output").classList.remove("hidden");
});