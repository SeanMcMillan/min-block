import './editor.scss';

// Import WP features.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

registerBlockType( 'example/min-test', {
	title: __( 'Min Test' ),
	description: __( 'A minimun test for InnerBlocks.' ),
	category: 'text',
	attributes: {},
	edit,
	save,
} );

const innerBlockName = 'example/trouble';
function edit( props ) {
	const { attributes, setAttributes, className, isSelected } = props;

	return (
		<div className="min-test">
			<InnerBlocks
				template={ template() }
				allowedBlocks={ [ innerBlockName ] }
			/>
		</div>
	);
}

function save( props ) {
	const { attributes } = props;

	return (
		<div className="min-test">
			<InnerBlocks.Content />
		</div>
	);
}

function template() {
	return [ [ innerBlockName ] ];
}
