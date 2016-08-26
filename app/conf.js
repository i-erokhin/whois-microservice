"use strict";

const winston = require('winston');

module.exports = {
  port: 8899,
  hostname: '0.0.0.0',
  allowOrigin: true,
  log: new winston.Logger({
    transports: [
      new winston.transports.Console({
        timestamp: true,
        colorize: true,
        level: 'info'
      })
    ]
  })
};
