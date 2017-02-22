/* eslint-disable no-console, no-use-before-define */
import Express from 'express'
import path from 'path';

import axios from 'axios';

// import pro from "./Socket/pro.js"

var ProtoBuf = require("protobufjs");
// import udpSocket from './Socket/UdpSocket.js'
// import udpSocketClientPro from './Socket/UdpSocketClientPro.js'

// import udpSocketChat from './Socket/UdpSocketChat.js'
// import tcpSocketClient from './Socket/TcpSocketClient.js'
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


var upload = require('./fileuploads');
//文件上传服务
app.post('/upload', upload.single('file'), function (req, res, next) {
  // console.log(req.file);
  // console.log(req);
    if (req.file) {
        res.send('文件上传成功')
        console.log(req.file);
        console.log(req.body);
    }else {
      res.send('失败')
    }
});

app.get("/protobuf", function(req, res){
  ProtoBuf.load("./Socket/awesome.proto", function(err, root) {
      if (err) throw err;

      // Obtain a message type
      var AwesomeMessage = root.lookup("awesomepackage.AwesomeMessage");

      // Create a new message
      var message = AwesomeMessage.create({ awesomeField: "AwesomeString" });

      // Encode a message to an Uint8Array (browser) or Buffer (node)
      var buffer = AwesomeMessage.encode(message).finish();
      // ... do something with buffer
      console.log(buffer)
      // Or, encode a plain object
      var buffer = AwesomeMessage.encode({ awesomeField: "AwesomeString" }).finish();
      // ... do something with buffer

      // Decode an Uint8Array (browser) or Buffer (node) to a message
      var message = AwesomeMessage.decode(buffer);

      console.log(message)
      // res.json(message)
      res.send(message)

      // ... do something with message

      // If your application uses length-delimited buffers, there is also encodeDelimited and decodeDelimited.
  });
  // res.json({ user: 'tobi' })
})

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
  // tcpSocket.write(massage);
  // console.log(tcpSocket)
  tcpSocketClient.write(message)
  res.json({ user: 'tobi' })
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
