const AuthController = {
  handleLogin: (req, res) => {
    res.send({ message: 'invoked handleLogin' });
  },

  checkLogin: (req, res) => {
    res.send(req.user);
  },

  handleInstagramOAuthRedirect: (req, res) => {
    res.redirect(301, '/');
  },

  handlePinterestOAuth: (req, res) => {
    res.send({ message: 'invoked handlePinterestOAuth' });
  },

  handlePinterestOAuthCallback: (req, res) => {
    res.send({ message: 'invoked handlePinterestOAuthCallback' });
  },

  handleLogout: (req, res) => {
    req.logout();
    res.redirect('/');
  },
};

module.exports = AuthController;
