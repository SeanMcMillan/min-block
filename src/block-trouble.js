
// Import WP features.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType( 'example/trouble', {
	title: __( 'Trouble Test' ),
	description: __( 'A minimun test for dynamic bullshit.' ),
	category: 'text',
	attributes: { text: { type: 'string' } },
	edit,
	save,
} );

function edit( props ) {
	const { attributes, setAttributes, isSelected } = props;

	return (
		<div className="trouble">
			<div>Fixed Content </div>
			{ isSelected && (
				<div className="appear">Appearing/disappearing content</div>
			) }
		</div>
	);
}

function save( props ) {
	const { attributes } = props;

	return <div className="trouble">{ attributes.text }</div>;
}
