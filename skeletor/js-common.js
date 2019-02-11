module.exports = {
    input: [
        'source/js/main.js'
    ],
    output: function (destPath) {
        return [
            {
                dir: destPath,
                format: 'es'
            },
            {
                dir: destPath + '/nomodule',
                format: 'system'
            }
        ]
    },
    plugins: [
        require('rollup-plugin-replace')({
            ENVIRONMENT: () => JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.NODE_ENV': () => JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        require('rollup-plugin-babel')({
            include: ['source/js/**', 'node_modules/@degjs/**'],
            babelrc: false,
            plugins: [
                "@babel/plugin-syntax-dynamic-import"
            ],
            presets: [
                ["@babel/preset-env", {
                    "modules": false,
                    "targets": {
                        "browsers": [">1%", "ie 11"]
                    }
                }]
            ]
        }),
        require('rollup-plugin-node-resolve')({
            browser: true
        }),
        require('rollup-plugin-commonjs')({
            include: 'node_modules/**'
        })
    ]
};
