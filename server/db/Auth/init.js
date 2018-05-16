const mongoose = require('mongoose');
const config = require('../../config/config');

const authDbUri = config.mongodb.uri_dev;
mongoose.connect(authDbUri);

const authDb = mongoose.connection;

authDb.once('open', () => {
  console.log(`Mongoose connected successfully to ${authDbUri}`);
});

authDb.on('error', () => {
  console.log(`mongoose connection error with ${authDbUri}`);
});
module.exports.authDb = authDb;
