const AuthController = require('./authController');
const passport = require('passport');
const router = require('express').Router();

// invoke passport middleware
const passportSetup = require('../../config/passportSetup');

passportSetup.instagramOAuth();

/* /auth/login */
router.post('/login', (req, res) => {
  AuthController.handleLogin(req, res);
});

/* /auth/instagram */
router.get('/instagram', passport.authenticate('instagram', { scope: ['basic', 'public_content'] }));

router.get('/instagram/redirect', passport.authenticate('instagram'), (req, res) => {
  AuthController.handleInstagramOAuthRedirect(req, res);
});

/* /auth/pinterest */
router.get('/pinterest', (req, res) => {
  AuthController.handlePinterestOAuth(req, res);
});

/* /auth/logout */
router.get('/logout', (req, res) => {
  AuthController.handleLogout(req, res);
});

module.exports = router;
