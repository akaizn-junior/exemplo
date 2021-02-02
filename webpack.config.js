/* eslint-disable camelcase */

const webpack = require('webpack');

// local
const path = require('path');

// plugins
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// load env
require('dotenv').config();

// dev?
const dev = process.env.NODE_ENV !== 'production';

// settings
const dist = dev ? 'dev' : 'docs';
const settings = {
  clientDir: 'src',
  staticDir: 'static',
  vendorsDir: 'vendors',
  entry: {
    main: 'src/app.js'
  },
  output: {
    filename: dev ? '[name].[contenthash:7].js' : '[name].js',
    cssFilename: dev ? '[name].[contenthash:7].css' : '[name].css',
    client: dist,
    html: 'src/index.html'
  }
};

module.exports = {
  mode: dev ? 'none' : 'production',
  entry: path.join(__dirname, settings.entry.main),
  stats: 'errors-warnings',
  output: {
    filename: settings.output.filename,
    path: path.join(__dirname, settings.output.client)
  },
  optimization: {
    minimize: !dev,
    minimizer: [
      new CssMinimizerPlugin({}),
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          mangle: {
            keep_classnames: true
          },
          module: false,
          ie8: false,
          safari10: false,
          compress: {
            drop_console: true,
            drop_debugger: true,
            ecma: 5,
            keep_classnames: true
          }
        }
      })
    ],
    usedExports: false,
    runtimeChunk: 'multiple'
  },
  plugins: [
    new webpack.DefinePlugin({
      env: JSON.stringify(process.env.NODE_ENV)
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        'main.*.*',
        'vendors/vendor.*.js',
        'runtime~*.*.js'
      ],
      cleanAfterEveryBuildPatterns: []
    }),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, settings.output.html),
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
        collapseWhitespace: true,
        html5: true,
        minifyJS: true,
        minifyCSS: true
      }
    }),
    new webpack.ids.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: settings.output.cssFilename
    }),
    new CopyPlugin({
      patterns: [{
        from: settings.staticDir,
        to: './'
      }, {
        from: path.join(__dirname, settings.clientDir, 'assets'),
        to: './assets'
      }]
    })
  ],
  resolve: {
    alias: {
      app: path.resolve(__dirname, settings.clientDir, '/app/'),
      assets: path.resolve(__dirname, settings.clientDir, '/assets/')
    },
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [{
      test: /[.js|.jsx]$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader?cacheDirectory=true'
      }
    }, {
      test: /\.css$/,
      use: [
        { loader: dev ? 'style-loader' : MiniCssExtractPlugin.loader },
        { loader: 'css-loader' }
      ]
    }]
  }
};
