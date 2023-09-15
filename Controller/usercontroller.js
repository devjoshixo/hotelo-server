const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({ _id }, `${process.env.SECRET}`, { expiresIn: '3d' });
};

module.exports.checkEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.checkEmail(email);
    console.log(user);
    res.status(200).json({ userExists: user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports.signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
