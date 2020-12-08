import initStoryshots, {
  multiSnapshotWithOptions
} from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';

initStoryshots({
  storyKindRegex: /^((?!.*?DontTest).)*$/,
  framework: 'react',
  renderer: render,
  test: multiSnapshotWithOptions({})
});
