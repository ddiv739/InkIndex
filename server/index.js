const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // dev dependency middleware that allows us to see server side request logs
const path = require('path');
const cookieSession = require('cookie-session');
const passport = require('passport');

const config = require('./config/config');
const AuthRoutes = require('./routes/Auth/authRoutes');
const RestRoutes = require('./routes/Rest/restRoutes');
const authDb = require('./db/Auth/init');

const PORT = 3000;
const app = express();

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000, // One day expire
  keys: [config.session.cookieKey],
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use('/auth', AuthRoutes);
app.use('/api', RestRoutes);

app.listen(PORT, () => (
  console.log('listening on port 3000!')
));
