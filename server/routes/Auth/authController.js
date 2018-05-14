const AuthController = {
  handleLogin: (req, res) => {
    res.send({ message: 'invoked handleLogin' });
  },

  handleInstagramOAuthRedirect: (req, res) => {
    res.send({ message: 'invoked handleInstagramOAuthRedirect' });
  },

  handlePinterestOAuth: (req, res) => {
    res.send({ message: 'invoked handlePinterestOAuth' });
  },

  handlePinterestOAuthCallback: (req, res) => {
    res.send({ message: 'invoked handlePinterestOAuthCallback' });
  },

  handleLogout: (req, res) => {
    res.send({ message: 'invoked handleLogout' });
  },
};

module.exports = AuthController;
