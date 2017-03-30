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