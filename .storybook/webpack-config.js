const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = async (config) => {
    configJs(config);
    configCSS(config);

    return config;
};

/* Adds necessary babel configuration */
function configJs(config) {
    const jsRule = config.module.rules.find(rule => '.js'.match(rule.test));

    if(jsRule) {
        addBabelReactPreset(jsRule);
        includeBabelDirectories(jsRule);        
    }
}

/* Adds the React preset to the babel configuration */
function addBabelReactPreset(jsRule) {
    const options = jsRule.use[0].options;

    if(!options.hasOwnProperty('presets')) {
        options.presets = [];
    }

    options.presets.push('@babel/preset-react');
}

/* Includes directories to be compiled by Babel */
function includeBabelDirectories(jsRule) {    
    jsRule.exclude = [];
    jsRule.include = [
        path.resolve(__dirname), /* Storybook directory */
        path.resolve(__dirname, '../source'), /* Source code directory */
        path.resolve(__dirname, '../node_modules/@degjs') /* DEGJS node modules directory */
    ];
}

/* Adds MiniCssExtractPlugin loader to create stylesheets */
function configCSS(config) {
    const cssRule = config.module.rules.find(rule => '.css'.match(rule.test));
    
    if(cssRule) {
        cssRule.use = [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: process.env.NODE_ENV === 'development',
                },
            },
            'css-loader',
            'postcss-loader'
        ];

        config.plugins.push(new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        }));
    }
}