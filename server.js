const express = require('express');
const app = express();

// This file is only here to make this project work at heroku.

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8000, console.log('Listening on PORT: 8000'));
