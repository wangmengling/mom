/* eslint-disable no-console, no-use-before-define */
import Express from 'express'
import path from 'path';

import axios from 'axios';

// import pro from "./Socket/pro.js"

// var ProtoBuf = require("protobufjs");

// import udpSocket from './Socket/UdpSocket.js'
// import udpSocketClientPro from './Socket/UdpSocketClientPro.js'

import udpSocketChat from './Socket/UdpSocketChat.js'
// import tcpSocketClient from './Socket/TcpSocketClient.js'
// import tcpSocket from './Socket/TcpSocket.js'
import tcpSocket from './TcpSocket/index.js'
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { RoutingContext, match } from 'react-router';
// import { Provider } from 'react-redux';

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevConfig from './webpack.config.js'
import Routes from './routes.js'
import Apis from './app/Actions/Apis.js'

const app = new Express()
const port = 4000


//webpack--------
var compiler = webpack(webpackDevConfig);
// attach to the compiler & the server
app.use(webpackDevMiddleware(compiler, {
    // public path should be the same with webpack config
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    }
}));
app.use(webpackHotMiddleware(compiler));

Routes(app)

app.use(Express.static(path.join(__dirname, 'static')));
app.get("/*", function(req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
