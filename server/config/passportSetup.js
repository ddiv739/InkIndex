const passport = require('passport');
const InstagramStrategy = require('passport-instagram');
const { User } = require('../db/Auth/models/user');

const config = require('./config.js');

const passportSetup = {
  instagramOAuth: () => passport.use(new InstagramStrategy({
    clientID: config.instagramOAuth.instagramClientID,
    clientSecret: config.instagramOAuth.instagramClientSecret,
    callbackURL: 'http://localhost:3000/auth/instagram/redirect',
  }, (accessToken, refreshToken, profileInfo, done) => {
    // passport callback function
    User.findOne({
      username: profileInfo.username,
      loginType: profileInfo.provider,
      credential: profileInfo.id,
    }).then((res) => {
      if (res) {
        // returning user
        console.log('returning user', res.username);
      } else {
        // new user
        const user = new User({
          username: profileInfo.username,
          loginType: profileInfo.provider,
          credential: profileInfo.id,
        });
        user.save().then((createdUser) => {
          // TODO: add newly created user to the REST DB
          console.log('newly created user: ', createdUser);
        });
      }
    });
  })),
};

module.exports = passportSetup;
