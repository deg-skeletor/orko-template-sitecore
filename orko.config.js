module.exports = {
    postInstall: {
        files: [
            {
                src: 'orko/.gitignore',
                dest: '/.gitignore'
            },
            {
                src: 'orko/package.json',
                dest: '/package.json'
            },
            {
                src: 'orko/README.md',
                dest: '/README.md'
            }
        ]
    }
};