const AuthController = require('./authController');
const router = require('express').Router();

/* /auth/login */
router.post('/login', (req, res) => {
  AuthController.handleLogin(req, res);
});

/* /auth/instagram */
router.post('/instagram', (req, res) => {
  AuthController.handleInstagramOAuth(req, res);
});

/* /auth/pinterest */
router.post('/pinterest', (req, res) => {
  AuthController.handlePinterestOAuth(req, res);
});

/* /auth/logout */
router.get('/logout', (req, res) => {
  AuthController.handleLogout(req, res);
});

module.exports = router;
