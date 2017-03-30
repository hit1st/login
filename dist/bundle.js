(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./components/registration":2}],2:[function(require,module,exports){
const Registration = {

  // script we will be injecting into html
  registrationInput: `<div id='userInfo'>
                        Create User Name<input id='userName' type='text' placeholder='enter user name'>
                        Create Password<input id='password' type='text' placeholder='enter password'>
                        <button id='registerButton' type='submit'>Register User</button>
                      </div>
                      <div id='registerMsg'><br /></div>`,
}

module.exports = Registration;
},{}]},{},[1]);
