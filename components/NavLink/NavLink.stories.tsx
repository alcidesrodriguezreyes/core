import type { Meta, StoryObj } from '@storybook/react';
import NavLink from './index';

const meta: Meta<typeof NavLink> = {
  title: 'Components/NavLink',
  component: NavLink,
};
export default meta;

type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    value: {
      href: '/dashboard',
      title: 'Dashboard',
      icon: 'home',
      counter: 3,
    },
  },
}; 