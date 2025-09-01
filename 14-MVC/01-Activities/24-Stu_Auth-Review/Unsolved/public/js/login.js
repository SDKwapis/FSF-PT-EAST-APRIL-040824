const loginFormHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
  // stops the page from reloading
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  // removes any extra spaces from the user input to make sure the values submitted dont throw errors
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // TODO: Add a comment describing the functionality of this expression
    // a post request to submit the user email and password
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
