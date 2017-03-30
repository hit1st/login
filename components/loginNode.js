const LoginInput = {

  // script we will be injecting into html
  loginInput: `<div id='login'>
                <div id='user'>
                  User Name<input id='userName' type='text' placeholder='enter user name'>
                  Password<input id='password' type='text' placeholder='enter password'>
                  <button id='loginButton' type='submit'>Login</button>
                  </div>
                  <div id='loginMsg'><br /></div>
                  <button id='register'>Register New User</button>
                </div>`,
}

module.exports = LoginInput;