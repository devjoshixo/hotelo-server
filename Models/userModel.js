const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.checkEmail = async function (email) {
  if (!email) {
    throw Error('Please Provide an Email');
  }

  if (!validator.isEmail(email)) {
    throw Error('Please Provide a valid Email');
  }

  const exists = await this.findOne({ email });
  if (exists) {
    return true;
  }
  return false;
};

userSchema.statics.signup = async function (email, password) {
  if (!password) {
    throw Error('Please Provide a password');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!password) {
    throw Error('Please Provide a password');
  }

  const user = await this.findOne({ email });
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error('Incorrect password');
  }

  return user;
};

module.exports = mongoose.model('User', userSchema);
