import type { Preview } from "@storybook/react";
// import { withThemeByClassName } from '@storybook/addon-themes'

// import 'tailewindcss/tailwind.css'
// import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
