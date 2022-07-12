import React from 'react';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

import { appTheme } from '../src/common/themes/appTheme'
import { ThemeProvider } from "emotion-theming";


/**
 * https://github.com/storybookjs/storybook/issues/17611
 * Latest version v6.4.19 still doesn't list nested stories
 * in the export order. Waiting for fix in order to add the
 * story sort options. 
 * 
 * https://storybook.js.org/docs/react/essentials/controls#custom-control-type-matchers
 */

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      date: /Date$/,
    },
  }
}

/**
 * Storybook does not support style component apis from mui,
 * in storybook we had to add @emotion/react and import theme provider
 * from emotion-theming
 */

export const decorators = [
  (Story) => (
    <ThemeProvider theme={appTheme}>
      <Story />
    </ThemeProvider>
  ),
];
