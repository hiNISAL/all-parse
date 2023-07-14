const path = require('path');

module.exports = {
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'all-parse.js',
    library: 'allParse',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
