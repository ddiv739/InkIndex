const mongoose = require('mongoose');

const User = mongoose.model(
  'User',
  mongoose.Schema({
    username: String,
    loginType: String, // enum: instagram, pinterest, local strategy
    credential: String, // either instagramId, pinterestId or local strategy hashed password.
  }),
);

module.exports.User = User;
