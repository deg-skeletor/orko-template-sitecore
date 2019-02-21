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
}

init();