module.exports = {
	name: 'js',
	plugins: [
		{
			name: '@deg-skeletor/plugin-rollup',
			config: {
				input: require('../js-common.js').input, 
				output: require('../js-common.js').output('patternlab/js'),  
				plugins: require('../js-common.js').plugins,
				experimentalCodeSplitting: true
			}
		},
		{
            "name": "@deg-skeletor/plugin-copy",
            "config": {
                directories: [{
                    src: 'node_modules/systemjs/dist/s.min.js',
                    dest: 'patternlab/js/vendor'
                }]
            }
        }
	]
};