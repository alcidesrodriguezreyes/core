import type { Meta, StoryObj } from '@storybook/react';
import Editor from './index';

const meta: Meta<typeof Editor> = {
  title: 'Components/Editor',
  component: Editor,
};
export default meta;

type Story = StoryObj<typeof Editor>;

export const Default: Story = {
  args: {
    content: 'Hello, world!',
    onChange: () => {},
    label: 'Editor',
  },
};
