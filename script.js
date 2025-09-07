// ======================
// Part 1: Event Handling
// ======================

// Simple button click event
document.getElementById("clickBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "You clicked the button!";
});

// ==========================
// Part 2: Interactive Elements
// ==========================

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Collapsible FAQ Section
const questions = document.querySelectorAll(".question");
questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

// ========================
// Part 3: Form Validation
// ========================

const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from refreshing

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  let isValid = true;

  // Validate Name
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    isValid = false;
  }

  // Validate Email with regex
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Validate Password
  const password = document.getElementById("password").value;
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/; 
  // Must contain at least 6 chars, one uppercase, one number
  if (!passwordPattern.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be 6+ chars, include an uppercase letter and a number.";
    isValid = false;
  }

  // Success Message
  if (isValid) {
    document.getElementById("formSuccess").textContent = "Registration successful!";
    form.reset();
  }
});