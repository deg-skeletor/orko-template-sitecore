const {input, output, plugins} = require('../common/js.config.js');
const outputDir = '../src/Project/[PROJECT SHORT NAME]/code/Scripts/[PROJECT SHORT NAME].Web';
const {pluginConfig:cacheBustingPluginConfig} = require('./cachebusting.config.js');

module.exports = {
	name: 'js',
	plugins: [
		/* Modern bundles */
		{
			name: '@deg-skeletor/plugin-rollup',
			config: {
				input,
				output: output(outputDir),
				plugins: [
					...plugins(outputDir),
					require('rollup-plugin-terser').terser()
				]
			}
		},
		/* Legacy bundles */
		{
            name: '@deg-skeletor/plugin-rollup',
            config: {
                input: input, 
                output: output(outputDir, false),  
				plugins: [
					...plugins(outputDir, false),
					require('rollup-plugin-terser').terser()
				]
            }
		},
		/* Copy SystemJS file */
		{
			name: '@deg-skeletor/plugin-copy',
			config: {
				directories: [{
					src: 'node_modules/systemjs/dist/s.min.js',
					dest: `${outputDir}/vendor`
				}]
			}
		},
		cacheBustingPluginConfig
	]
};