const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.sendFile(path.join(__dirname, 'start', 'index.html'));
});

app.listen(9000, function(){
  console.log("RUNNING ON 9000s");
});
