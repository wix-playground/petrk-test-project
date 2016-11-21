const webpack = require('webpack');

const common = {
  entry: {
    app: './src/app.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'tpa-gfpp-data.js',
    publicPath: '',
    library: 'tpaGfppData',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {},
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = common;
