import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsPage } from '@storybook/addon-docs/blocks';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withKnobs } from '@storybook/addon-knobs';

addParameters({
  docs: DocsPage,
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    docs: {
      inlineStories: true,
    },
  },
});


addDecorator(withKnobs);
