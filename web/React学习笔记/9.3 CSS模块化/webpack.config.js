var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/src',
    entry: './js/index.js',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            // CSS模块化配置方法, 拷贝即用
            // 如使用 Ant Design 框架则需要把css-loader后面的都删掉
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
            }
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    }
};