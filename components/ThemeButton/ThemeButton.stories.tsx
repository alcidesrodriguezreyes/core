import type { Meta, StoryObj } from '@storybook/react';
import ThemeButton from './index';

const meta: Meta<typeof ThemeButton> = {
  title: 'Components/ThemeButton',
  component: ThemeButton,
};
export default meta;

type Story = StoryObj<typeof ThemeButton>;

export const Default: Story = {
  args: {},
};

export const WithCustomClass: Story = {
  args: {
    className: 'border-2 border-red-500',
  },
}; 