// Get references to the HTML elements we'll be working with
const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const submitButton = document.querySelector('button[type="submit"]');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get form field values
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Send form data to server
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);

  fetch('/submit-form', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      // Display confirmation message
      const confirmationMsg = document.getElementById('confirmation-msg');
      confirmationMsg.style.display = 'block';

      // Clear form inputs
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    }
  })
  .catch(error => {
    console.error(error);
  });
});
