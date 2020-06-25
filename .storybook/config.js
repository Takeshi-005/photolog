import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsPage, Props } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../src/components/', true, /.(story|stories).tsx$/);

addParameters({
  docs: DocsPage,
  options: {
    docs: {
      inlineStories: true,
      // getPropDefs,
    },
  },
});
addDecorator(withKnobs);

  // req.keys().forEach(req);

configure(req, module);
