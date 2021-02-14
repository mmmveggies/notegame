const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: ['./src/index.tsx'],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		path: `${__dirname}/docs`,
		publicPath: '/notegame/',
		filename: 'app.min.js',
	},
	optimization: {
		minimizer: [new TerserPlugin()],
	},
	plugins: [
		new webpack.DefinePlugin({
			__DEV__: true,
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	],
};