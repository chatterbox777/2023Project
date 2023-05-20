import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'Applink',
};
export const Red = Template.bind({});

Red.args = {
  children: 'Applink',
  theme: AppLinkTheme.RED,
};

export const Secondary = Template.bind({});

Secondary.args = {
  theme: AppLinkTheme.SECONDARY,
  children: 'Applink',
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'Applink',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const RedDark = Template.bind({});

RedDark.args = {
  children: 'Applink',
  theme: AppLinkTheme.RED,
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});

SecondaryDark.args = {
  theme: AppLinkTheme.SECONDARY,
  children: 'Applink',
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
