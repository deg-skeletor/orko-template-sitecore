import reactToHtml from '@degjs/storybook-decorator-react-to-html';
import scriptRunner from '@degjs/storybook-decorator-script-runner';
import { withHTML } from '@whitespace/storybook-addon-html/html';
import '../source/css/global.css';
import '../source/css/styleguide.css';

const dynamicModules = {
};

const globalModules = {
};

export const parameters = {
  /* Sort stories alphabetically */
  options: {
      storySort: (a, b) =>
          a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  a11y: {}
};

export const decorators = [
  reactToHtml,
  withHTML({
      prettier: {
          tabWidth: 4,
          useTabs: false,
          htmlWhitespaceSensitivity: 'ignore',
      }
  }),
  scriptRunner({
    globalModules, 
    dynamicModules
  })
];