const cacheBustingSettingsFilepath = '../src/Project/[PROJECT SHORT NAME]/code/App_Config/Include/Project/[PROJECT SHORT NAME].Settings.config';

function generateCacheBustingToken() {
    return Date.now().toString();
}

const pluginConfig = {
    name: '@deg-skeletor/plugin-tokenreplace',
    config: {
        files: cacheBustingSettingsFilepath,
        from: [
            /<setting name="[PROJECT SHORT NAME].CssCacheBuster" value=".*"\/>/g,
            /<setting name="[PROJECT SHORT NAME].JsCacheBuster" value=".*"\/>/g
        ],
        to: [
            `<setting name="[PROJECT SHORT NAME].CssCacheBuster" value="${generateCacheBustingToken()}"/>`,
            `<setting name="[PROJECT SHORT NAME].JsCacheBuster" value="${generateCacheBustingToken()}"/>`
        ]
    }
};

module.exports = {
    pluginConfig
};