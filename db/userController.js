require('dotenv').config();
const { UserModel } = require('./userModel');
const debug = require('debug')('app:db:controller');

const createUser = async (req, res) => {
  try {
    await UserModel.findOneAndUpdate({ email: req.body.email }, req.body, {
      upsert: true
    });
  } catch (err) {
    res.status(500).send(err.message);
    debug(err.message);
  }
  res.sendStatus(201);
};

const deleteUser = async (req, res) => {
  try {
    await UserModel.findOneAndDelete({ email: req.body.email });
  } catch (err) {
    res.status(500).send(err.message);
    debug(err.message);
  }
  debug(req.body);
  res.status(202).end();
};

module.exports = {
  createUser,
  deleteUser,
};
