/* eslint-disable no-console, no-use-before-define */
import Express from 'express'
import path from 'path';

import axios from 'axios';

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

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

app.get("/users", function(req, res) {
  // res.sendFile(__dirname + '/static/index.html');
  axios.get('http://localhost:3000/users')
  .then(function (response) {
    console.log(response.data);
    res.json(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
});

app.use(Express.static(path.join(__dirname, 'static')));

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
