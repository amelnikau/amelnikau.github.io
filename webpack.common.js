const path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MD5HashPlugin = require('md5-hash-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js',
        vendor: [
            'babel-polyfill',
            'whatwg-fetch',
            'bootstrap'
        ]
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: "[chunkhash].[id].chunk.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.json$/,
                use: [ 'json-loader', 'remove-number-attributes-loader' ]
            },
        ]
    },
    plugins: [
        new MD5HashPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            minChunks: 1
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'src/index_template.html',
            chunksSortMode: 'dependency'
        })
    ]
};