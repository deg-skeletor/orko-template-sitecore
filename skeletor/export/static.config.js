const {directories} = require('../common/static.config.js');
const outputDir = '../src/Project/[PROJECT SHORT NAME]/code/Content/[PROJECT SHORT NAME].Web';

module.exports = {
    name: 'static',
    plugins: [
        {
            name: '@deg-skeletor/plugin-copy',
            config: {
                directories: directories({
					imagesDestPath: `${outputDir}/images/`,
					fontsDestPath: `${outputDir}/fonts/`
				}, true)
            }
        }
    ]
};