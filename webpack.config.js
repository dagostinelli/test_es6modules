"use strict";
var webpack = require('webpack');

var destination = "./build";

module.exports = {
	entry: {
		'index.js': './src/index.js'
	},
	output: {
		path: destination,
		filename: '[name]'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$|\.js$/,
				loader: 'babel',
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		modulesDirectories: [".", "./src", "node_modules", "bower_components"]
	},
	devtool: 'source-map'
};