document.getElementById("reservationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Collect input values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let book = document.getElementById("book").value.trim();
  let author = document.getElementById("author").value.trim();
  let pickupDate = document.getElementById("pickupDate").value;

  // Validation regex
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phoneRegex = /^\d{10}$/;

  // Reset previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  let valid = true;

  // Validation checks
  if (!name) { document.getElementById("nameError").textContent = "Full Name is required"; valid = false; }
  if (!email || !emailRegex.test(email)) { document.getElementById("emailError").textContent = "Enter a valid email"; valid = false; }
  if (!phone || !phoneRegex.test(phone)) { document.getElementById("phoneError").textContent = "Phone must be exactly 10 digits"; valid = false; }
  if (!book) { document.getElementById("bookError").textContent = "Book Title is required"; valid = false; }
  if (!author) { document.getElementById("authorError").textContent = "Author Name is required"; valid = false; }
  if (!pickupDate) { document.getElementById("dateError").textContent = "Pickup Date is required"; valid = false; }

  if (!valid) return;

  // Save data to localStorage
  let reservations = JSON.parse(localStorage.getItem("reservations")) || [];
  reservations.push({ name, email, phone, book, author, pickupDate });
  localStorage.setItem("reservations", JSON.stringify(reservations));

  // Show success message & reset form
  document.getElementById("successMessage").textContent = "✅ Reservation saved successfully!";
  this.reset();
});
