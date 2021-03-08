require('dotenv').config();
const debug = require('debug')('app:server:index');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const userDb = require('../db/userController');

const port = 3000;
const host = process.env.HOST || 'localhost';

mongoose.connect(`mongodb://${host}/fsWorkshop`,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    const app = createServer();
    app.listen(port, () => {
      debug(`C.T.C 1 on port ${port}`);
    });
  });

const createServer = () => {
  const app = express();
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(express.json());
  app.post('/api/user/', userDb.createUser);
  app.delete('/api/user/', userDb.deleteUser);
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });
  return app;
};
