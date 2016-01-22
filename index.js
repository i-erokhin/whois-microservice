#!/usr/bin/env node

require('shelljs/global');
var http = require("http");

http.createServer(function(request, response) {
  var content = exec('whois ' + request.url.substring(1), {silent:true}).output;
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(content);
  response.end();
}).listen(8888);
