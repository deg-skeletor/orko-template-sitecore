const path = require('path');

module.exports = {
	files: destPath => [
		{
			src: path.resolve('source/css/global.css'),
			dest: path.resolve(destPath, 'global.css')
		}
	]
};