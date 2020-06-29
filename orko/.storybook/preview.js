import { addDecorator, addParameters } from '@storybook/html';
import renderToStaticMarkup from './decorators/renderToStaticMarkup.js';
import scriptRunner from './decorators/scriptRunner.js';
import { withHTML } from '@whitespace/storybook-addon-html/html';
import { withA11y } from '@storybook/addon-a11y';
import '../source/css/global.css';
import '../source/css/styleguide.css';

const dynamicModules = {
};

const globalModules = {
};

/* Sort stories alphabetically */
addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  }
});

/* Add decorators */
addDecorator(renderToStaticMarkup);
addDecorator(withHTML({
  prettier: {
    tabWidth: 4,
    useTabs: false,
    htmlWhitespaceSensitivity: 'ignore',
  },
}));
addDecorator(withA11y);
addDecorator(scriptRunner({
  globalModules, dynamicModules
}));