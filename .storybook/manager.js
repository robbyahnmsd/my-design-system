
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'dark',
  brandTitle: 'msd design system',
  sortStoriesByKind: true,
  brandUrl: 'https://github.com/govuk-react/govuk-react',
});

addons.setConfig({
  theme,
});
