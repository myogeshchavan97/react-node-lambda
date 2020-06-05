// Section 1
const serverless = require('serverless-http');
const express = require('express');
const axios = require('axios');
const path = require('path');
const router = express.Router();

// Section 2
const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));

// Section 3
router.get('/', (req, res) => {
  res.send('<h1>Home page</h1>');
});

router.get('/users', (req, res) => {
  axios.get('https://randomuser.me/api/?page=1&results=10').then((response) => {
    res.send(response.data);
  });
});

app.use('/.netlify/functions/index', router);

module.exports = app;
module.exports.handler = serverless(app);
