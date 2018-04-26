# Hello with Jenkins and Docker

This post will guide for building a Docker image, and then setting up Jenkins to build and publish 
the image automatically whenever you commit change to your code repository.

## Requirements
To run through this guide, you will need the following:

- To build and run the Docker image locally: Mac OS X or Linux, and Docker installed
- To set up Jenkins to build the image automatically: Access to a Jenkins 2.x installation

## Our application
For this guide, we'll be using a very basic example: a Hello World server written with Node. Place this in a main.js:

// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello getintodevops.com\n");
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listening at http://127.0.0.1:8000/");

We'll also need a package.json, which tells Node some basic things about our application:

{
  "name": "getintodevops-hellonode",
  "version": "1.0.0",
  "description": "A Hello World HTTP server",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node main.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/getintodevops/hellonode/"
  },
  "keywords": [
    "node",
    "docker",
    "dockerfile"
  ],
  "author": "miiro@getintodevops.com",
  "license": "ISC"
}


