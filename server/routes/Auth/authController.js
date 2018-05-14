const AuthController = {
  handleLogin: (req, res) => {
    res.send({ message: 'invoked handleLogin' });
  },

  handleInstagramOAuth: (req, res) => {
    res.send({ message: 'invoked handleInstagramOAuth' });
  },

  handleInstagramOAuthCallback: (req, res) => {
    res.send({ message: 'invoked handleInstagramOAuthCallback' });
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
