var express = require('express');
var app = express(), fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
  response.end(fs.readFileSync('./index.html').toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
