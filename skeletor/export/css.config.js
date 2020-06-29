const {files, plugins} = require('../common/css.config.js');
const outputDir = '../src/Project/{{shortName}}/code/Content/{{shortName}}.Web/css';
const path = require('path');
const {pluginConfig:cacheBustingPluginConfig} = require('./cachebusting.config.js');

module.exports = {
    name: 'css',
    plugins: [
        {
            name: '@deg-skeletor/plugin-postcss',
            config: {
                files: files(outputDir),
                plugins: plugins()
            }
        },
        {
            name: '@deg-skeletor/plugin-postcss',
            config: {
                files: [
                    {
                        src: path.resolve('source/css/rte.css'),
                        dest: path.resolve(outputDir, 'rte.css')
                    }
                ],
                plugins: plugins({isRte: true})
            }
        },
        cacheBustingPluginConfig
    ]
};