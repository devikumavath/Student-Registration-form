function validateForm(event) {
    event.preventDefault();
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
  
    if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
      alert('Please fill out all fields.');
      return false;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }
  
    // validate email format
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format.');
      return false;
    }
  
    return true;
  }
  
  let form = document.querySelector('form');
  form.addEventListener('submit', validateForm);
  