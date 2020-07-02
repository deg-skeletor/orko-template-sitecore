const {files} = require('../common/css.config.js');
const postcssConfig = require('../../postcss.config');
const outputDir = '../src/Project/[PROJECT SHORT NAME]/code/Content/[PROJECT SHORT NAME].Web/css';
const path = require('path');
const {pluginConfig:cacheBustingPluginConfig} = require('./cachebusting.config.js');

module.exports = {
    name: 'css',
    plugins: [
        {
            name: '@deg-skeletor/plugin-postcss',
            config: {
                files: files(outputDir),
                plugins: postcssConfig().plugins
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
                plugins: postcssConfig({isRte: true}).plugins
            }
        },
        cacheBustingPluginConfig
    ]
};