// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
//var PORT = 3000;
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// Routes
// =============================================================

app.get("/", function(request, response) {

  response.sendFile(path.join(__dirname, "home.html"));
});


app.get("/survey", function(request, response) {
 
  response.sendFile(path.join(__dirname, "survey.html"));
});



// Starts the server to begin listening

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});