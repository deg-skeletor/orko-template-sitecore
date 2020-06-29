module.exports = {
	tasks: [
		{
			name: 'export',
			environment: 'production',
			subTasks: [
				require('./skeletor/export/css.config.js'),
				require('./skeletor/export/js.config.js'),
				require('./skeletor/export/static.config.js')
			]
		}
	]
}