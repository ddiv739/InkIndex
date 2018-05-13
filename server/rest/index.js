const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // dev dependency middleware that allows us to see server side request logs
const app = express();

const PORT = 3000;

app.use(express.static(__dirname + '/../../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
