#!/usr/bin/env node
'use strict';

// importing Server class
const TcpServer = require('./TcpServer');

// Our configuration
const PORT = 6969;
const ADDRESS = "127.0.0.1"

var server = new TcpServer(PORT, ADDRESS);

// Starting our server
server.start(() => {
  console.log(`Server started at: ${ADDRESS}:${PORT}`);
});
