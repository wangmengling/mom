/* eslint-disable no-console, no-use-before-define */
import Express from 'express'
import path from 'path';

import axios from 'axios';

// import udpSocket from './Socket/UdpSocket.js'
import udpSocketChat from './Socket/UdpSocketChat.js'
import tcpSocket from './Socket/TcpSocket.js'
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { RoutingContext, match } from 'react-router';
// import { Provider } from 'react-redux';

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevConfig from './webpack.config.js'

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
// erved by express.static() for production
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

// app.get("/login", function(req, res) {
//   res.sendFile(__dirname + '/static/index.html');
// });

app.get("/udp/sockets", function(req, res) {
  console.log(req.query.context)
  var message = new Buffer("send from client" + req.query.context);
  // udpSocket.send(message,0,message.length,41234,"localhost",function(err,bytes) {
  //     //  udpSocket.close();
  // });
  // udpSocket.bind(function () {
    // udpSocket.setBroadcast(true);
  // });

  // udpSocketChat.send(message,0,message.length,48159,"localhost",function(err,bytes) {
  //
  // });
  tcpSocket.write(massage);

  // res.json({ user: 'tobi' })
});


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
