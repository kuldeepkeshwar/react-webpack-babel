
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

/*
// local css modules
loaders.push({
	test: /[\/\\]src[\/\\].*\.css/,
	exclude: /(node_modules|bower_components|public\/)/,
	loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
});*/

// global scss modules
loaders.push({
	test: /\.scss$/,//test: /[\/\\]src[\/\\].*\.scss/,
	exclude: /(node_modules|bower_components|public\/)/,
	//loaders: ["style", "css", "sass"]
	loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
});
/*
// global css files
loaders.push({
	test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
	loader: ExtractTextPlugin.extract('style', 'css')
});
*/

module.exports = {
	entry: [
		'./src/index.jsx'
	],
	output: {
		publicPath: '/',
		path: path.join(__dirname, 'public'),
		filename: '[chunkhash].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	plugins: [
		new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new ExtractTextPlugin('[contenthash].css', {
			allChunks: true
		}),
		new CopyWebpackPlugin([
			{ from: 'static', to: 'static' },
		]),
		new HtmlWebpackPlugin({
			template: './src/template.html',
			title: 'Webpack App'
		}),
		new webpack.optimize.DedupePlugin()
	]
};
