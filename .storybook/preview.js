import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsPage } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';

addParameters({
  docs: DocsPage,
  options: {
    docs: {
      inlineStories: true,
    },
  },
});
addDecorator(withKnobs);

const loaderFn = () => {
  const allExports = [];
  const req = require.context('../src/components', true, /\.stories\.(tsx|mdx)$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};

configure(loaderFn, module);
