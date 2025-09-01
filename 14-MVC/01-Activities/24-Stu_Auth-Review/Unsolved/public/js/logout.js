const logout = async () => {
  // TODO: Add a comment describing the functionality of this expression
  // sends a post request to log a user out
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // TODO: Add a comment describing the functionality of this statement
    // replaces log out with log in
    document.location.replace('/login');
  } else {
    alert('Failed to log out');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
