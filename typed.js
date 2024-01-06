const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (name && email && message) {
    // Form is valid, do something here (e.g. send form data to a server)
  } else {
    // Form is invalid, display an error message
  }
});