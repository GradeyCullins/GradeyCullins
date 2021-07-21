const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: './public/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Gradey Cullins',
      template: './public/index.html'
    }),
    new CopyPlugin([
      { from: './public/static', to: 'static' }
    ]),
    new webpack.DefinePlugin({
      'process.env.ENV': JSON.stringify(process.env.ENV)
    })
  ]
}
