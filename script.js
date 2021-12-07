const form = document.getElementById("form");
const createPasswordEl = document.getElementById("createPassword");
const confirmPasswordEl = document.getElementById("confirmPassword");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;

let passwordMatch = false;

function validateForm() {
  // Using constraint API
  isValid = form.checkValidity();
  //   console.log(isValid);
  //   Error Message
  if (!isValid) {
    message.textContent = "Please Fill Out All The Fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  // Password Match check
  if (createPasswordEl.value === confirmPasswordEl.value) {
    passwordMatch = true;
    createPasswordEl.style.borderColor = "green";
    confirmPasswordEl.style.borderColor = "green";
  } else {
    passwordMatch = false;
    message.textContent = "Please Make Sure Your Passwords Match";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    createPasswordEl.style.borderColor = "red";
    confirmPasswordEl.style.borderColor = "red";
    return;
  }
  // valid form and passwords matches
  if (isValid && passwordMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function handleFormData(e) {
  e.preventDefault();
  //   console.log(e);
  // Validate Form
  validateForm();
}

// Event Listener
form.addEventListener("submit", handleFormData);
