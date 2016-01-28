var PORT = 8899;
var ALLOW_ORIGIN = true;

require('shelljs/global');
var http = require("http");

http.createServer(function(request, response) {
  if (ALLOW_ORIGIN) {
    response.setHeader("Access-Control-Allow-Origin", "*");
  }

  var query = request.url.substring(1);

  if (/^[\d\w\.-]+$/i.test(query)) {
    var content = exec('whois ' + query, {silent:true}).output;
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(content);
  } else {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('Bad domain request: (' + query + ')');
  }
  response.end();
}).listen(PORT);
