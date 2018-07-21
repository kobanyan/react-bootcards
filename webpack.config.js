const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'example/src'),
  entry: {
    example: './example.js'
  },
  output: {
    path: path.resolve(__dirname, 'example/dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'example/src'),
    port: 8000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['env'] }
          }
        ]
      },
      {
        test: /\.(less|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'react-bootcards': path.resolve(__dirname, 'src/index')
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js',
      minChunk: 2
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: false,
      template: path.resolve(__dirname, 'example/src/index.html')
    }),
    new ExtractTextPlugin('example.css')
  ]
};
