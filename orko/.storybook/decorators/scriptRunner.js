import {addons, makeDecorator} from '@storybook/addons';
import { STORY_RENDERED } from '@storybook/core-events';

export default function({globalModules, dynamicModules}) {
    return makeDecorator({
        name: 'scriptRunner',
        parameterName: 'script',
        skipIfNoParametersOrOptions: false,
        wrapper: (storyFn, context) => {
            const channel = addons.getChannel();  

            channel.once(STORY_RENDERED, () => {
                runGlobalModules(globalModules);    
                runDynamicModules(dynamicModules);
                
            });
            return storyFn(context);
        }
    });
}

function runDynamicModules(dynamicModules) {
    if(dynamicModules) {
        const containerEls = [...document.querySelectorAll('[data-module]')];
        containerEls.forEach(containerElement => {
            const module = containerElement.dataset.module;
            if(dynamicModules[module]) {
                dynamicModules[module]({containerElement});
            } else {
                console.warn(`WARNING: module ${module} does not exist.`);
            }
        });  
    }
}

function runGlobalModules(globalModules) {
    if(globalModules) {
        Object.keys(globalModules).forEach(module => globalModules[module]());
    }
}