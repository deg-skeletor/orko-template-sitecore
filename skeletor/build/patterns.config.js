module.exports = {
	name: "patterns",
	plugins: [
		{
			"name": "@deg-skeletor/plugin-patternlab",
			"config": {
				"patternLabConfig": require('../patterns-common').build
			}
		}
	]
};