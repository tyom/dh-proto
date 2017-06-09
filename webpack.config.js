const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
    publicPath: 'dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader?sourceMap!sass-loader?sourceMap!postcss-loader?sourceMap',
            postcss: 'vue-style-loader!css-loader?sourceMap!postcss-loader?sourceMap',
          }
        }
      },
      {
        test: /\.s?css$/,
        loader: 'vue-style-loader!css-loader?sourceMap!sass-loader?sourceMap!postcss-loader?sourceMap'
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: '#source-map'
}
