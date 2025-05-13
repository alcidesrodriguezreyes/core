import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './index';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    items: [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
    ],
    value: { id: 1, name: 'Option 1' },
    setValue: () => {},
  },
};
