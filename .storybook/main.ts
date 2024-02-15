import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx", 
    // "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/?(*.)stories.[jt]s?(x)",
    '../src/components/**/?(*.)stories.[jt]s?(x)',
    '../src/components/**/src/?(*.)stories.[jt]s?(x)',
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],
};
export default config;
