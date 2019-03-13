/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: untappd-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar el = wp.element.createElement;\nvar Components = wp.components;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\nregisterBlockType('untappd-block/block-untappd-block', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('untappd-block'), // Block title.\n\ticon: 'smiley', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'embed', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tsupportHTML: false,\n\n\tattributes: {\n\t\turl: {\n\t\t\ttype: 'string'\n\n\t\t}\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tedit: function edit(props) {\n\t\tvar url = props.attributes.url || '',\n\t\t    focus = props.focus;\n\t\t// retval is our return value for the callback.\n\t\tvar retval = [];\n\t\t// When the block is focus or there's no URL value,\n\t\t// show the text input control so the user can enter a URL.\n\t\tif (!!focus || !url.length) {\n\t\t\t// Instantiate a TextControl element\n\t\t\tvar controlOptions = {\n\t\t\t\t// Existing 'url' value for the block.\n\t\t\t\tvalue: url,\n\t\t\t\t// When the text input value is changed, we need to\n\t\t\t\t// update the 'url' attribute to propagate the change.\n\t\t\t\tonChange: function onChange(newVal) {\n\t\t\t\t\tprops.setAttributes({\n\t\t\t\t\t\turl: newVal\n\t\t\t\t\t});\n\t\t\t\t},\n\t\t\t\tplaceholder: __('Enter the beer ID from Untappd')\n\t\t\t};\n\t\t\tretval.push(\n\t\t\t// el() is a function to instantiate a new element.\n\t\t\tel(Components.TextControl, controlOptions));\n\t\t}\n\n\t\t// @todo pull client ID/secret from somewhere secure\n\t\tvar apiUrl = 'https://api.untappd.com/v4/beer/info/' + url.trim(/\\/$/) + '?client_id=CLIENTID&client_secret=CLIENTSECRET';\n\n\t\t// Only add preview UI when there's a URL entered.\n\t\tif (url.length) {\n\t\t\t// @todo retrieve API data and pull out whatever we're going to display\n\n\t\t\t// setTimeout is used to delay the Untappd API request\n\t\t\t// until after the block is initially rendered. From the response,\n\t\t\t// we update the rendered div.\n\t\t\t/*setTimeout(function(){\n   \t// @todo pull ID/secret from somewhere secure\n   \tjQuery.getJSON(apiUrl,\n   \t\tfunction(data){\n   \t\t\tvar div = jQuery('#'+id);\n   \t\t\tdiv.html('');\n   \t\t\tdiv.append(data.div);\n   \t\t}\n   \t);\n   }, 10 );*/\n\t\t\tretval.push(el('p', null, apiUrl));\n\t\t}\n\n\t\treturn retval;\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tsave: function save(props) {\n\t\tvar url = props.attributes.url || '';\n\t\t// If there's no URL, don't save any inline HTML.\n\t\tif (!url.length) {\n\t\t\treturn null;\n\t\t}\n\t\t// Include a fallback link for non-JS contexts\n\t\t// and for when the plugin is not activated.\n\t\treturn el('a', { href: url }, __('View beer on Untappd'));\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHVudGFwcGQtYmxvY2tcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgZWwgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQ7XG52YXIgQ29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5yZWdpc3RlckJsb2NrVHlwZSgndW50YXBwZC1ibG9jay9ibG9jay11bnRhcHBkLWJsb2NrJywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKCd1bnRhcHBkLWJsb2NrJyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiAnc21pbGV5JywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogJ2VtYmVkJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdHN1cHBvcnRIVE1MOiBmYWxzZSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dXJsOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuICAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cbiAgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG4gICpcbiAgKiBUaGUgXCJlZGl0XCIgcHJvcGVydHkgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqL1xuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0dmFyIHVybCA9IHByb3BzLmF0dHJpYnV0ZXMudXJsIHx8ICcnLFxuXHRcdCAgICBmb2N1cyA9IHByb3BzLmZvY3VzO1xuXHRcdC8vIHJldHZhbCBpcyBvdXIgcmV0dXJuIHZhbHVlIGZvciB0aGUgY2FsbGJhY2suXG5cdFx0dmFyIHJldHZhbCA9IFtdO1xuXHRcdC8vIFdoZW4gdGhlIGJsb2NrIGlzIGZvY3VzIG9yIHRoZXJlJ3Mgbm8gVVJMIHZhbHVlLFxuXHRcdC8vIHNob3cgdGhlIHRleHQgaW5wdXQgY29udHJvbCBzbyB0aGUgdXNlciBjYW4gZW50ZXIgYSBVUkwuXG5cdFx0aWYgKCEhZm9jdXMgfHwgIXVybC5sZW5ndGgpIHtcblx0XHRcdC8vIEluc3RhbnRpYXRlIGEgVGV4dENvbnRyb2wgZWxlbWVudFxuXHRcdFx0dmFyIGNvbnRyb2xPcHRpb25zID0ge1xuXHRcdFx0XHQvLyBFeGlzdGluZyAndXJsJyB2YWx1ZSBmb3IgdGhlIGJsb2NrLlxuXHRcdFx0XHR2YWx1ZTogdXJsLFxuXHRcdFx0XHQvLyBXaGVuIHRoZSB0ZXh0IGlucHV0IHZhbHVlIGlzIGNoYW5nZWQsIHdlIG5lZWQgdG9cblx0XHRcdFx0Ly8gdXBkYXRlIHRoZSAndXJsJyBhdHRyaWJ1dGUgdG8gcHJvcGFnYXRlIHRoZSBjaGFuZ2UuXG5cdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdWYWwpIHtcblx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdHVybDogbmV3VmFsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiBfXygnRW50ZXIgdGhlIGJlZXIgSUQgZnJvbSBVbnRhcHBkJylcblx0XHRcdH07XG5cdFx0XHRyZXR2YWwucHVzaChcblx0XHRcdC8vIGVsKCkgaXMgYSBmdW5jdGlvbiB0byBpbnN0YW50aWF0ZSBhIG5ldyBlbGVtZW50LlxuXHRcdFx0ZWwoQ29tcG9uZW50cy5UZXh0Q29udHJvbCwgY29udHJvbE9wdGlvbnMpKTtcblx0XHR9XG5cblx0XHQvLyBAdG9kbyBwdWxsIGNsaWVudCBJRC9zZWNyZXQgZnJvbSBzb21ld2hlcmUgc2VjdXJlXG5cdFx0dmFyIGFwaVVybCA9ICdodHRwczovL2FwaS51bnRhcHBkLmNvbS92NC9iZWVyL2luZm8vJyArIHVybC50cmltKC9cXC8kLykgKyAnP2NsaWVudF9pZD1DTElFTlRJRCZjbGllbnRfc2VjcmV0PUNMSUVOVFNFQ1JFVCc7XG5cblx0XHQvLyBPbmx5IGFkZCBwcmV2aWV3IFVJIHdoZW4gdGhlcmUncyBhIFVSTCBlbnRlcmVkLlxuXHRcdGlmICh1cmwubGVuZ3RoKSB7XG5cdFx0XHQvLyBAdG9kbyByZXRyaWV2ZSBBUEkgZGF0YSBhbmQgcHVsbCBvdXQgd2hhdGV2ZXIgd2UncmUgZ29pbmcgdG8gZGlzcGxheVxuXG5cdFx0XHQvLyBzZXRUaW1lb3V0IGlzIHVzZWQgdG8gZGVsYXkgdGhlIFVudGFwcGQgQVBJIHJlcXVlc3Rcblx0XHRcdC8vIHVudGlsIGFmdGVyIHRoZSBibG9jayBpcyBpbml0aWFsbHkgcmVuZGVyZWQuIEZyb20gdGhlIHJlc3BvbnNlLFxuXHRcdFx0Ly8gd2UgdXBkYXRlIHRoZSByZW5kZXJlZCBkaXYuXG5cdFx0XHQvKnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgIFx0Ly8gQHRvZG8gcHVsbCBJRC9zZWNyZXQgZnJvbSBzb21ld2hlcmUgc2VjdXJlXG4gICBcdGpRdWVyeS5nZXRKU09OKGFwaVVybCxcbiAgIFx0XHRmdW5jdGlvbihkYXRhKXtcbiAgIFx0XHRcdHZhciBkaXYgPSBqUXVlcnkoJyMnK2lkKTtcbiAgIFx0XHRcdGRpdi5odG1sKCcnKTtcbiAgIFx0XHRcdGRpdi5hcHBlbmQoZGF0YS5kaXYpO1xuICAgXHRcdH1cbiAgIFx0KTtcbiAgIH0sIDEwICk7Ki9cblx0XHRcdHJldHZhbC5wdXNoKGVsKCdwJywgbnVsbCwgYXBpVXJsKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldHZhbDtcblx0fSxcblxuXHQvKipcbiAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgKlxuICAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0dmFyIHVybCA9IHByb3BzLmF0dHJpYnV0ZXMudXJsIHx8ICcnO1xuXHRcdC8vIElmIHRoZXJlJ3Mgbm8gVVJMLCBkb24ndCBzYXZlIGFueSBpbmxpbmUgSFRNTC5cblx0XHRpZiAoIXVybC5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHQvLyBJbmNsdWRlIGEgZmFsbGJhY2sgbGluayBmb3Igbm9uLUpTIGNvbnRleHRzXG5cdFx0Ly8gYW5kIGZvciB3aGVuIHRoZSBwbHVnaW4gaXMgbm90IGFjdGl2YXRlZC5cblx0XHRyZXR1cm4gZWwoJ2EnLCB7IGhyZWY6IHVybCB9LCBfXygnVmlldyBiZWVyIG9uIFVudGFwcGQnKSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);