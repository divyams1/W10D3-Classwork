const path = require('path')
module.exports = {
  context: __dirname,
  entry: "./widgets.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react']
          }
        },
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*" ]
  },
  devtool: 'source-map',
};