const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	watch: true,
	entry: ['./src/index.tsx'],
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(js)$/,
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
	plugins: [
		new webpack.DefinePlugin({
			__DEV__: true,
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'docs'),
		liveReload: true,
		port: 9000,
		historyApiFallback: true,
		writeToDisk: true,
	},
};