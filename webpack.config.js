var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var config = {
	entry: {
		'common/common': path.resolve(__dirname, 'app/views/common/common.js'),
		'home/home': path.resolve(__dirname, 'app/views/home/home.js'),
		'vip/vip': path.resolve(__dirname, 'app/views/vip/vip.js'),
		vendors: ['react'] // 其他库
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js' // 注意我们使用了变量
	},
	module: {
		loaders: [{
				test: /\.(js|jsx)$/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			//css
			{
				test: /\.css$/, // Only .css files
				loader: 'style!css' // Run both loaders
			},
			//sass
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			//需要转换的路径变成 BASE64 字符串
			{
				test: /\.(png|jpg)$/,
				loader: 'url?limit=25000'
			}
		]
	},
	plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};

module.exports = config;