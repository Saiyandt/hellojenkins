// load the http module
var http = require('http');

// config our HTTP server
var server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello World!!!\n");
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listens at http://127.0.0.1:8000/");
