'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config')
const glob = require('glob')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const extractCSS = new ExtractTextPlugin({
    filename: utils.assetsPath('css/[name].css'),
    allChunks: true
})

const devWebpackConfig = merge(baseWebpackConfig, {
    devtool: config.dev.devtool,

    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true,
        compress: true,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay
        ? { warnings: false, errors: true }
        : false,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable,
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: config.dev.poll,
        },
        openPage: config.dev.openPage
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        extractCSS
    ]
})

glob.sync('./src/pages/**/*.html').forEach(path => {
    const chunk = path.split('./src/pages/')[1].split('/app.html')[0]
    const filename = chunk + '.html'
    const htmlConf = {
        filename: filename,
        template: path,
        inject: 'body',
        favicon: './src/assets/img/logo.png',
        hash: false,
        chunks: ['vendors', chunk]
    }
    devWebpackConfig.plugins.push(new HtmlWebpackPlugin(htmlConf))
})

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
        // publish the new Port, necessary for e2e tests
        process.env.PORT = port
        // add port to devServer config
        devWebpackConfig.devServer.port = port
  
        // Add FriendlyErrorsPlugin
        devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
            },
            onErrors: config.dev.notifyOnErrors
            ? utils.createNotifierCallback()
            : undefined
        }))
        resolve(devWebpackConfig)
      }
    })
})