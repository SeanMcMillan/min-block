<?php
/**
 * Plugin Name: Example Blocks
 * Plugin URI: https://sprint2mvp.com/wordpress/renascare
 * Description: Adds custom Gutenberg blocks.
 * Author: Sean McMillan
 * Author URI: https://sprint2mvp.com/
 * Version: 0.1.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package Example
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'init',
	'example_block_init'
);

function example_block_init() {
	wp_register_style(
		'example-editor-css',
		plugins_url( 'dist/blocks.build.css', __FILE__  ),
		array( 'wp-edit-blocks' )
	);

	// Register block editor script for backend.
	wp_register_script(
		'example-js',
		plugins_url( '/dist/blocks.build.js', __FILE__  ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
	);

	register_block_type(
		'example/min-test',
		array(
			'editor_script' => 'example-js',
			'editor_style'  => 'example-editor-css',
		)
	);
	register_block_type( 'example/trouble' );
}
