// Requiring dependencies
var http = require("http");
var fs = require("fs");
var url = require("url");
const express = require('express');
const app = express();

// Set our port to 8080

var PORT = 8080;



var server = http.createServer(function(req, res) {

  // Saving the request method as a variable.
  var requestData = "";

  // When the server receives data, it will add it to requestData.
  req.on("data", function(data) {
    requestData += data;
    console.log("You just posted some data to the server!");
    console.log("Your data was " + requestData);
  });

  // When the request has ended...
  req.on("end", function() {
    res.write("<html><head><title>Hello Noder!</title></head><body>");
    res.write("<h1>Thank You!</h1>");
    res.write("</body></html>");
    res.end();
  });


//------------------------------------------------------



  // Saving the request method as a variable.
  var method = req.method.toLowerCase();
  var requestData = "";
  var output = "";

  // When the server receives data..
  req.on("data", function(data) {

    // Add it to requestData.
    requestData += data;
  });

  // When the request has ended...
  req.on("end", function() {

    // We display the request method, as well as the data received!
    output = "You just " + method + "\n";
    output += requestData.toString();
    console.log(output);
    res.end();
  });
  

});



//---------------------------------------------------

var server = http.createServer(handleRequest);

function renderResponse (filename, res){
  fs.readFile(__dirname + "/"+filename+".html", function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });

//------------------------------------------------
  // Saving the request method as a variable.
  var method = req.method.toLowerCase();
  var requestData = "";
  var output = "";

  // When the server receives data..
  req.on("data", function(data) {

    // Add it to requestData.
    requestData += data;
  });

  // When the request has ended...
  req.on("end", function() {

    // We display the request method, as well as the data received!
    output = "You just " + method + "\n";
    output += requestData.toString();
    console.log(output);
    res.end();
  });


};


//--------------------------------------
/*
app.get('/:pageName?', function (req, res) {
  //Ternary operators
  //res.sendfile((req.params.pageName ?req.params.pageName : 'index')  + '.html');
 let pageName = req.params.pageName ? req.params.pageName : 'home';
  let pageName = '';
  if (undefined === req.params.pageName) {
    pageName = 'home';
  } else {
    pageName = req.params.pageName;
  }
  res.sendfile( pageName  + '.html');
});
//--------------------------------------
*/

function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var urlParts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.
  switch (urlParts.pathname) {

    // Depending on the URL we display a different HTML file.
    case "/":
      renderResponse('home', res);
      break;

    case "/servey":
      renderResponse('servey', res);
      break;


    default:
     //renderResponse('index', res);
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end('<h1>404 not found.</h1>');
      console.log('404', err);
      break;
  }
}

// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
