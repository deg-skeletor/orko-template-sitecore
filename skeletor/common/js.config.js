const path = require('path');

/* 
    Babel presets for legacy browsers (IE11, mostly). 
    Note that 'useBuiltIns' is used to include regenerator-runtime, which is imported within the entry JS file.
*/
const legacyBabelPresets = [
    [
        '@babel/preset-env',
        {
            modules: false,
            targets: '> 1%, ie 11',
            useBuiltIns: 'entry',
            corejs: 3
        }
    ]
];

/* 
    Babel presets for modern browsers (non-IE11, mostly). 
    Note that 'useBuiltIns' and 'exclude' options are used to prevent regenerator-runtime from being included.
*/
const modernBabelPresets = [
    [
        '@babel/preset-env',
        {
            modules: false,
            targets: 'Firefox >= 77, Edge >= 18, Chrome >= 82, iOS >= 12, ChromeAndroid >= 81',
            useBuiltIns: 'entry',
            corejs: 3,
            exclude: ['@babel/plugin-transform-regenerator']
        }
    ]
];

module.exports = {
    input: [
        'source/js/main.js'
    ],
    /* Output either a modern or legacy bundle */
    output: (destPath, isModern = true) => [        
        {
            dir: isModern ? destPath : path.join(destPath, 'nomodule'),
            format: isModern ? 'es' : 'system'
        }
    ],
    plugins: (destPath, isModern = true) => [
        /* Delete any files in destination folder before creating bundles */
        require('rollup-plugin-delete')({
            force: true,
            targets: isModern ? path.join(destPath, '*.js') : path.join(destPath, 'nomodule', '*.js')
        }),
        /* Replace environment variables and cachebusting placeholders with real values */
        require('@rollup/plugin-replace')({
            ENVIRONMENT: () => JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.NODE_ENV': () => JSON.stringify(process.env.NODE_ENV || 'development'),
            'CACHEBUSTER': () => Date.now().toString()
        }),
        /* Compile JS with babel with either modern or legacy presets */
        require('@rollup/plugin-babel')({
            include: [
                'source/js/**',
                'node_modules/@degjs/**'
            ],
            babelrc: false,
            presets: isModern ? modernBabelPresets : legacyBabelPresets
        }),
        /* Resolve node module imports */
        require('@rollup/plugin-node-resolve')({
            browser: true
        }),
        /* Convert CommonJS node modules to ES6 */
        require('@rollup/plugin-commonjs')({
            include: 'node_modules/**'
        })
    ]
};