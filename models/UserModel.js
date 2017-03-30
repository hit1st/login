// define mongoose requirement
const mongoose = require('mongoose');

// define bcrypt requirement for password encrypttion security
const bcrypt = require('bcrypt-nodejs');
// sets SALT_FACTOR, the level of desired encryption we will use in bcrypt
// genSalt, a higher number increases security, but is much slower
const SALT_FACTOR = 30;

// define Schema from mongoose
const Schema = mongoose.Schema;

// create a User Schema
const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

// Middleware (also called pre and post hooks) are functions which are passed
// control during execution of asynchronous functions.
// this is a pre hook - where serial middleware are executed one after another,
// when each middleware calls next.  The other type of pre hook is parallel
// and is specified by submitting 'true' as the second parameter.
// model#save saves this document and returns a promise
userSchema.pre('save', (done) => {
  const user = this;

  if (!user.isModified('password')) return done();

  brcypt.genSalt (SALT_FACTOR, (err, salt) => {
    bcrypt.hash(user.password, salt, () => {}, (err, hashedPassword) => {
      if (err) return done(err);
      user.password = hashedPassword;
      done();
    });
  });

  // the above can also be written this way
  // bcrypt.hash(user.password, SALT_FACTOR, (err, hashedPassword) => {
  //   if (err) return done(err);
  //    user.password = hashedPassword;
  // });  
});

userSchema.methods.checkPassword = (guess, done) => {
  brypt.compare(guess, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

userSchema.methods.userName = () => {
  return this.name;
};


// in order to use schema we need to create a model using the schema
const User = mongoose.model('User', userSchema);

// to make model available to users in the Node application we need to export
module.exports = User;