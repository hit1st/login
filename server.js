const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// allowes us to use Cross Origin Resource Sharing (CORS)
// (i.e. route to ip address rather than localhost)
const cors = require('cors');
const path = require('path');

const userController = require('./controllers/UserController');

const PORT = 8080;

// connects to Database
mongoose.connect('mongodb://localhost/Users/Fred/projects/to-do-list/data/db');
mongoose.connection.once('open', () => {
  console.log('Connection to database successfull!');
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// enable CORS for this server
app.use(cors());

const loginRouter = express.Router();

// route to login page
// localhost://8080/login
loginRouter.get('/', userController.index);

// Create a to do item in the database
// localhost://8080/login
loginRouter.post('/', userController.createUser);

// sets origin point for all loginRouter routes
app.use('/login', loginRouter);
app.use('/', express.static(__dirname + '/'));

app.listen(PORT, () => console.log(`Listening on PORT: ${ PORT }`));