const path = require('path');

module.exports = {
	directories: function({imagesDestPath, fontsDestPath}, excludeSamples = false) {
		return [
            {
                src: excludeSamples ? 'source/images/{,!(sample)/**/}*' : 'source/images',
                dest: path.resolve(imagesDestPath)
            },
            {
                src: 'source/fonts',
                dest: path.resolve(fontsDestPath)
            }
        ];
	}
}