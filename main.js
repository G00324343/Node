//var http = require("http");
//http.createServer(function (request, response) {
	
	//send the http header
	//HTTP Status: 200 : OK
	//COntent Type: text/plain
	//response.writeHead(200, {'Content-Type': 'text/plain'});
	
	//send the response body as "Hello world"
	//response.end('Hello World\n');
//}).listen(8081);
var http = require("http");
http.createServer(function (request, response) {
	
	//send the HTTP header
	//HTTP status: 200 : OK
	//content type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	
	
	//send the response body as "Hello world"
	response.end('Hello World\n');
}).listen(8081);
	