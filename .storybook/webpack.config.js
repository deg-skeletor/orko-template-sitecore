const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = async ({config}) => {
    configJs(config);
    configCSS(config);

    return config;
};

function configJs(config) {
    const jsRule = config.module.rules.find(rule => '.js'.match(rule.test));

    if(jsRule) {
        addBabelReactPreset(jsRule);
        includeNodeModulesForBabel(jsRule);        
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

/* Includes necessary package directories in node_modules that need to be compiled by Babel for es5 compatibility */
function includeNodeModulesForBabel(jsRule) {
    const excludeNodeModules = /node_modules\/(?!(@degjs)\/).*/;

    if(jsRule.exclude.length) {
        jsRule.exclude[0] = excludeNodeModules;
    } else {
        jsRule.exclude.push(excludeNodeModules);
    }
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