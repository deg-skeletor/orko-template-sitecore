const webpackConfig = require('./webpack-config');

module.exports = {
    stories: ['../source/patterns/**/*.stories.js'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        '@whitespace/storybook-addon-html'
    ],
    webpackFinal: webpackConfig
};