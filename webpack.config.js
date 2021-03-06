var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
   devtool: 'eval',
   entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index'
   ],
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin(),
   ],
   module: {
      loaders: [
         {
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
         },{
            test: /\.scss$/,
            loaders: ['style', 'css', 'postcss', 'sass']
         }
      ]
   },
   postcss: [autoprefixer],
   sassLoader: {
      outputStyle: 'compressed'
   }
};

// For Final Build
// loader: ExtractTextPlugin.extract(['style', 'css', 'postcss', 'sass'])
// For plugins
// new ExtractTextPlugin("styles.css")
