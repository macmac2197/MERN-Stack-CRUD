require('./database');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// route controller
const postMessageRoutes = require('./controller/postMessageController');

const app = express();

app.use(bodyParser.json());

// For access control allow origin
app.use(cors({ origin: 'http://localhost:4003'}));

// Start the MongoDB Server
app.listen(4002, () => console.log('Server started at : 4000'));

app.use('/postMessages', postMessageRoutes);