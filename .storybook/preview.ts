import type { Preview } from '@storybook/react'

// global styles
import '../app/globals.css' 

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;