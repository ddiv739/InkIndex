const passport = require('passport');
const InstagramStrategy = require('passport-instagram');

const config = require('./config.js');

passport.use(new InstagramStrategy({
  clientID: config.instagramClientID,
  clientSecret: config.instagramClientSecret,
  callbackURL: 'http://127.0.0.1:3000/auth/instagram/callback',
}), () => {
  // passport callback function
});
