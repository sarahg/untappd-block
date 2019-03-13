/**
 * BLOCK: untappd-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

var el = wp.element.createElement;
var Components = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'untappd-block/block-untappd-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'untappd-block' ), // Block title.
	icon: 'smiley', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'embed', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	supportHTML: false,

	attributes: {
		url: {
			type: 'string',

		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
			var url = props.attributes.url || '',
				focus = props.focus;
			// retval is our return value for the callback.
			var retval = [];
			// When the block is focus or there's no URL value,
			// show the text input control so the user can enter a URL.
			if ( !! focus || ! url.length ) {
				// Instantiate a TextControl element
				var controlOptions = {
					// Existing 'url' value for the block.
					value: url,
					// When the text input value is changed, we need to
					// update the 'url' attribute to propagate the change.
					onChange: function( newVal ) {
						props.setAttributes({
							url: newVal
						});
					},
					placeholder: __( 'Enter the beer ID from Untappd' ),
				};
				retval.push(
					// el() is a function to instantiate a new element.
					el( Components.TextControl, controlOptions )
				);
			}

			// @todo pull client ID/secret from somewhere secure
			var apiUrl = 'https://api.untappd.com/v4/beer/info/' + url.trim(/\/$/) + '?client_id=CLIENTID&client_secret=CLIENTSECRET';

			// Only add preview UI when there's a URL entered.
			if ( url.length ) {
				// @todo retrieve API data and pull out whatever we're going to display

				// setTimeout is used to delay the Untappd API request
				// until after the block is initially rendered. From the response,
				// we update the rendered div.
				/*setTimeout(function(){
					// @todo pull ID/secret from somewhere secure
					jQuery.getJSON(apiUrl,
						function(data){
							var div = jQuery('#'+id);
							div.html('');
							div.append(data.div);
						}
					);
				}, 10 );*/
				retval.push( el( 'p', null, apiUrl ) );
			}

			return retval;
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
			var url = props.attributes.url || '';
			// If there's no URL, don't save any inline HTML.
			if ( ! url.length ) {
				return null;
			}
			// Include a fallback link for non-JS contexts
			// and for when the plugin is not activated.
			return el( 'a', { href: url }, __( 'View beer on Untappd' ) );
	},
} );
