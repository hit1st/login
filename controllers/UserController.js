const fs = require('fs');
// const path = require('path');
const cheerio =require('cheerio');
const path = require('path');

// establishes that we can use our ToDoModel schema and our link to database
// '..' drops path to parent directory
const User = require('../models/UserModel');
// contains the HTML injections we will be using
const loginNode = require('../components/loginNode');

// create ToDoController object with associated methods
const UserController = {

  // route to todo.html
  index(req, res) {
    console.log('index __dirname:', __dirname);
    console.log('index __dirname:', path.join(__dirname, '/../index.html'));
    // get the index.html file so we can inject data into it later on
    // '/..' drops path to parent directory
    let html = fs.readFileSync(__dirname + '/../index.html', 'utf8');

    // load html to allow for injection into html
    const $ = cheerio.load(html);

    // append login script to #root div of html
    $('#root').append(loginNode.loginInput);

    // send cheerio html page with injected script to be rendered
    res.send($.html());
    
  },

  // Create and add a new user in the database
  createUser(req, res) {
    console.log('in create');
    User.create({
      name: req.body.name,
      password: req.body.password,
    }, (err, data) => {
      console.log(err);
      if (err) throw err;
      res.send(data);
    });
  },

  // // get all names on the user database and send it to response
  // getAllUsers(req, res) {
  //   User.find((err, userData) => {
  //     console.log('userData:', userData);
  //     // userData.forEach((User, index) => {
  //     //   console.log('user:', user);
  //     // })
  //     if (err) throw err;
  //     res.send(userData);
  //   });
  // },

  // get user with name on the user database and send it to response
  getUserWithName(req, res) {
    User.find({ 'name': req.params.name, 'password': req.params.password }, (err, userData) => {
      console.log('userData:', userData);
      if (err) throw err;
      res.send(userData);
    });
  },

  // get a user with name from the database, and update the name
  updateUser(req, res) {
    const updatename = {
      name: req.body.name,
      password: req.body.password
    }
    User.findOneAndUpdate({ 'name': req.params.name }, updatename,
      { new: true }, (err, userData) => {
      console.log('userData:', userData);
      if (err) throw err;
      res.send(userData);
    });
  },

  // delete a user with name from the database
  deleteUser(req, res) {
    User.findOneAndRemove({ 'name': req.params.name },
    (err, userData) => {
      console.log('in findOneAndRemove');
      if (err) throw err;
      res.send(userData);
    });
  },
};

module.exports = UserController;