var webpack = require('webpack');
var path = require('path');


var publicPath = 'http://localhost:4000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
  // entry: [
  //   // 'webpack-hot-middleware/client',
  //   './app/index.js'
  // ],
  // output: {
  //   path : path.resolve('./static'),
  //   filename : './[name].bundle.js',
  //   publicPath: publicPath
  // },
  entry: [
    // 'webpack-hot-middleware/client?reload=true',
    hotMiddlewareScript,
    './app/index.js'
  ],
  output: {
        filename: 'bundle.js',
        // path: path.resolve(__dirname, '/public/'),
        path: __dirname + '/static/',
        publicPath:  publicPath
    },
  module: {
    loaders: [//定义一系列加载器
            {test: /\.html$/,loader: "html"},  /*html*/
            {test: /\.js$/, loader: "babel",exclude: /node_modules/},      /*es6 to es5*/
            {test: /\.jsx$/,loader: 'jsx-loader'},    /*jsx to js,es5 to es6*/
            {test: /\.css$/, loader: 'style-loader!css-loader'},                      /*css to css*/
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},  //limit=8192表示图片大小单位是k  小于这个值走内联大于这个值走外联             /*images 打包*/
            {test: /\.less$/, loader: "style!css!less"},
            {test: /\.scss$/, loader: "style!css!sass"},                 /*less to css*/
            {
              test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              loader: "url?limit=10000"
            },
            {
              test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
              loader: 'file'
            } 
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
  ],
  watch: true
}
