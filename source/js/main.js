import moduleLoader from '@degjs/module-loader';

import 'regenerator-runtime/runtime'; /* Needed for IE11 */

function init() {
    initModuleLoader();
}

function initModuleLoader() {
    let basePath = ENVIRONMENT === 'development' ? '/js/' : '/Scripts/[PROJECT SHORT NAME].Web/';
    let suffix = '.js?CACHEBUSTER';
    
    if (!supportsDynamicImports()) {
        basePath += 'nomodule/';
    }

    moduleLoader({
        basePath,
        filenameSuffix: suffix,
        filenameNoModuleSuffix: suffix,
        enableObservation: false
    });
}

const supportsDynamicImports = () => {
    try {
        new Function('import("")');
        return true;
    } catch (err) {
        return false;
    }
};

init();