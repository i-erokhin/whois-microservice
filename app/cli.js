#!/usr/bin/env node
"use strict";

const program = require('commander');
const packageInfo = require('../package');

var conf = require('./conf');

program
  .version(packageInfo.version)
  .description(packageInfo.description)
  .option('--hostname <hostname>', `hostname, ${conf.hostname} by default`, conf.hostname)
  .option('--port <port>', `port, ${conf.port} by default`, conf.port)
  .parse(process.argv);

conf.port = program.port;
conf.hostname = program.hostname;

require('./server')(conf).run();
