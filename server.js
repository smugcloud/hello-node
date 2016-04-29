var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  host = require('os').hostname();
  text = "Hello from container:" + host + "\nRunning version: " + process.env.APP_VERS;
  response.end(text);
}
var www = http.createServer(handleRequest);
www.listen(9000);
