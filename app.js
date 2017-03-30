// contains the HTML injections we will be using
const registration = require('./components/registration');

// DOM element that will be updated
const root = document.getElementById('root');

// 
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
  // userName and password node from DOM
  const userName = document.getElementById('userName');
  console.log('userName.value:', userName.value);
  const password = document.getElementById('password');
  console.log('password.value:', password.value);
  if (userName.value !== 'Gordon') {
    const loginMsg = document.getElementById('loginMsg');
    loginMsg.innerHTML = 'invalid user';
  }
  // search database if user exists
  //   if user exists check if password is a match
  //   if password does not match, report no match
  // if user does not exist, report user does not exist
}); // end of loginButton.addEventListener

// update DOM with register new user inputs
const register = document.getElementById ('register');
register.addEventListener('click', () => {
  const login = document.getElementById('login');
  root.removeChild(login);
  const regDiv = document.createElement('div');
  regDiv.id = 'register';
  regDiv.innerHTML = registration.registrationInput;
  root.appendChild(regDiv);

  
});