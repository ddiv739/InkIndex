const passport = require('passport');
const InstagramStrategy = require('passport-instagram');
const { User } = require('../db/Auth/models/user');

const config = require('./config.js');

passport.serializeUser((user, done) => done(null, user.id)); // id from auth server
passport.deserializeUser((id, done) => {
  User.findById(id) // id from auth server
    .then(user => done(null, user));
});

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
    }).then((returningUser) => {
      if (returningUser) {
        // returning user
        done(null, returningUser);
      } else {
        // new user
        const user = new User({
          username: profileInfo.username,
          loginType: profileInfo.provider,
          credential: profileInfo.id, // id aquired from instagram
        });
        user.save().then((createdUser) => {
          // TODO: add newly created user to the REST DB
          done(null, createdUser);
        });
      }
    });
  })),
};

module.exports = passportSetup;
