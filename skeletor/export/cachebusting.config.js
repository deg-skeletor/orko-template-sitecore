const cacheBustingSettingsFilepath = '../src/Project/{{shortName}}/code/App_Config/Include/Project/{{shortName}}.Settings.config';

function generateCacheBustingToken() {
    return Date.now().toString();
}

const pluginConfig = {
    name: '@deg-skeletor/plugin-tokenreplace',
    config: {
        files: cacheBustingSettingsFilepath,
        from: [
            /<setting name="{{shortName}}.CssCacheBuster" value=".*"\/>/g,
            /<setting name="{{shortName}}.JsCacheBuster" value=".*"\/>/g
        ],
        to: [
            `<setting name="{{shortName}}.CssCacheBuster" value="${generateCacheBustingToken()}"/>`,
            `<setting name="{{shortName}}.JsCacheBuster" value="${generateCacheBustingToken()}"/>`
        ]
    }
};

module.exports = {
    pluginConfig
};