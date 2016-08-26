'use strict';

const http = require("http");
const exec = require("child_process").exec;

module.exports = function(conf) {
  function sendResponse(response, content) {
    if (conf.allowOrigin) {
      response.setHeader("Access-Control-Allow-Origin", "*");
    }
    // Response code is always 200 because otherwise there may be problems with AJAX
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(content);
    response.end();
  }

  var server = http.createServer();

  server.on('request', (request, response) => {
    var query = request.url.substring(1);
    if (/^[\d\w\.-]+$/i.test(query)) {
      exec(`whois ${query}`, (error, stdout, stderr) => {
        if (error) {
          let msg = `Whois error: ${stderr}`;
          sendResponse(response, msg);
          conf.log.error(msg);
        } else {
          sendResponse(response, stdout);
          conf.log.info(`${query} - ok`);
        }
      });
    } else {
      let msg = `Bad domain request: (${query})`;
      sendResponse(response, msg);
      conf.log.error(msg);
    }
  }).on('error', (error) => {
    conf.log.error(error.message);
    server.close();
  }).on('listening', () => {
    conf.log.info(`Listening on http://${conf.hostname}:${conf.port}`);
  });

  server.run = () => {
    server.listen(conf.port, conf.host);
  };

  return server;
};
