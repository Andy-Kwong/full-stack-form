const mongoose = require('mongoose');
const debug = require('debug')('app:models:product');

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const UserModel = mongoose.model('User', userSchema);

module.exports = {
  UserModel
};