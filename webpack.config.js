const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
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
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  devServer: {
    historyApiFallback: true,
    // noInfo: true,
  },
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      inject: false,
      template: 'src/index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks(module) {
        if(module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
          return false;
        }
        return module.context && module.context.indexOf("node_modules") !== -1;
      },
    }),
  ],
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = false
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
