const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // dev dependency middleware that allows us to see server side request logs
const path = require('path');

const AuthRoutes = require('./routes/Auth/authRoutes');
const RestRoutes = require('./routes/Rest/restRoutes');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use('/auth', AuthRoutes);
app.use('/api', RestRoutes);

app.listen(PORT, () => (
  console.log('listening on port 3000!')
));
