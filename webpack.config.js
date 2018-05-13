/**
 * The purpose of this webpack is to transpile all es6 client side files into es5 and bundle all JS files into one distribution js file called
 * bundle.js.
 * If you need more information regarding webpack, I suggest going to webpack.js.org
 * 
 * Author: Antonio Castro
 */

var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        // test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  }
};
