const passport = require('passport');
const InstagramStrategy = require('passport-instagram');

const config = require('./config.js');

passport.use(new InstagramStrategy({
  clientID: config.instagramClientID,
  clientSecret: config.instagramClientSecret,
  callbackURL: 'http://localhost:3000/auth/instagram/redirect',
}, () => {
  // passport callback function
}));
