import moduleLoader from '@degjs/module-loader';

let basePath = ENVIRONMENT === 'development' ? '/js/' : '/Scripts/';
if (!supportsDynamicImports()) {
    basePath += 'nomodule/';
}

const init = () => {
    moduleLoader({
        basePath,
        filenameSuffix: '.js',
        enableObservation: false
    });
};

function supportsDynamicImports() {
    try {
        new Function('import("")');
        return true;
    } catch (err) {
        return false;
    }
}

init();
