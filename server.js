const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

// This file is only here to make this project work at heroku.

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, console.log('Listening on PORT: ' + PORT));
