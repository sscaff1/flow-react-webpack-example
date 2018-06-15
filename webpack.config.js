const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, 'src', 'index'),
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-flow', '@babel/preset-env', '@babel/preset-react']
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
};
