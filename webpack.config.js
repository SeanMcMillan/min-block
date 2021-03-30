const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		'./blocks.build': './src/blocks.js', // 'name' : 'path/file.ext'.
	},
	output: {
		// Add /* filename */ comments to generated require()s in the output.
		pathinfo: true,
		// The dist folder.
		path: path.resolve( process.cwd(), 'dist' ),
		filename: '[name].js', // [name] = './dist/blocks.build' as defined above.
	},
};
