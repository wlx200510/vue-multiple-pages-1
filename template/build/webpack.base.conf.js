"use strict";

const utils = require('./utils')
const { join, resolve } = require("path");
const webpack = require("webpack");
const glob = require("glob");
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolvePath (dir) {
    return join(__dirname, '..', dir)
}

const entries = {};
const chunks = [];
glob.sync("./src/pages/**/app.js").forEach(path => {
  const chunk = path.split("./src/pages/")[1].split("/app.js")[0];
  entries[chunk] = path;
  chunks.push(chunk);
});

module.exports = {
  entry: entries,
  output: {
    path: resolve(__dirname, "../dist"),
    filename: utils.assetsPath("js/[name].js"),
    publicPath: process.env.NODE_ENV === 'production'
    ? config.build.assetsPublicPath
    : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      assets: resolvePath("src/assets/"),
      components: resolvePath("src/components/"),
      root: resolvePath("node_modules")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            css: ["css-hot-loader"].concat(
              ExtractTextPlugin.extract({
                use: "css-loader",
                fallback: "style-loader"
              })
            ),
            {{#less}}
            less: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
              use: ['css-loader', 'postcss-loader', 'less-loader'],
              fallback: 'style-loader'
            })),
            {{/less}}
            {{#sass}}
            scss: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
              use: ['css-loader', 'postcss-loader', 'sass-loader'],
              fallback: 'style-loader'
            })),
            {{/sass}}
            postcss: ["css-hot-loader"].concat(
              ExtractTextPlugin.extract({
                use: ["css-loader", "postcss-loader"],
                fallback: "style-loader"
              })
            )
          }
        }
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["css-hot-loader"].concat(
          ExtractTextPlugin.extract({
            use: ["css-loader", "postcss-loader"],
            fallback: "style-loader"
          })
        )
      },
      {{#less}}
      {
        test: /\.less$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader', 'less-loader'],
          fallback: 'style-loader'
        }))
      },
      {{/less}}
      {{#sass}}
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
          fallback: 'style-loader'
        }))
      },
      {{/sass}}
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              root: resolve(__dirname, "src"),
              attrs: ["img:src", "link:href"]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: utils.assetsPath("img/[name].[hash:7].[ext]")
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: utils.assetsPath("js/vendors.js"), 
        chunks: chunks,
        minChunks: chunks.length
    })
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
};

