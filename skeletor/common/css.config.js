const path = require('path');

/* cssnano preset for the RTE stylesheet to prevent empty rules from being discarded and selectors with common rules to be merged */
const rteCssNanoPreset = {
	preset: ['default', {
		discardEmpty: false,
		mergeRules: false
	}]
};

module.exports = {
	files: destPath => [
		{
			src: path.resolve('source/css/global.css'),
			dest: path.resolve(destPath, 'global.css')
		},
		{
			src: path.resolve('source/css/login.css'),
			dest: path.resolve(destPath, 'login.css')
		}
	],
	plugins: ({isRte} = {}) => [
		require('postcss-easy-import'),
		require('postcss-mixins'),
    	require('postcss-custom-properties'),
    	require('postcss-custom-selectors'),
    	require('postcss-custom-media'),
   		require('postcss-color-mod-function'),
    	require('postcss-nesting'),
    	require('autoprefixer'),
		require('cssnano')(isRte ? rteCssNanoPreset : {})
	]
};