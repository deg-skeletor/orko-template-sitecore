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
		}
	]
};