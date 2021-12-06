const form = document.getElementById("form");
const createPasswordEl = document.getElementById("createPassword");
const confirmPasswordEl = document.getElementById("confirmPassword");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;

function validateForm() {
  // Using constraint API
  isValid = form.checkValidity();
  //   console.log(isValid);
  //   Error Message
  message.textContent = "Please fill out all the fields.";
  message.style.color = "red";
  messageContainer.style.borderColor = "red";
}

function handleFormDate(e) {
  e.preventDefault();
  //   console.log(e);
  // Validate Form
  validateForm();
}

// Event Listener
form.addEventListener("submit", handleFormDate);
