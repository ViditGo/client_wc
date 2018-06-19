'use strict'

// var config = {
// host: "https://stackpath.bootstrapcdn.com/bootstrap/3.3.7",
// cdn: {
//   js: "https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
//   css: "https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
//     }
// }

//const ExtractPlugin = require('extract-text-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const HtmlCdnPlugin = require('html-webpack-cdn-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: `${__dirname}/src/main.js`,
  output: {
    filename: 'bundle-[hash].js',
    path: `${__dirname}/build`,
    publicPath: '/',
  },
  performance: {
    hints: false
  },
  plugins: [
    new HTMLPlugin({
      title: 'World Cup App'
    }),
    // new ExtractPlugin('bundle-[hash].css'),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
    // new HtmlCdnPlugin(config)
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // {
      //   test: /\.scss$/,
      //   loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      // },
      {
        test: /\.(c|sa|sc)ss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // },
       {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg)$/,
          use: 'file-loader'
      }
    ],
  },
}