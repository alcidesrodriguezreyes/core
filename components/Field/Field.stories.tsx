import type { Meta, StoryObj } from '@storybook/react';
import Field from './index';

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
};
export default meta;

type Story = StoryObj<typeof Field>;

export const Default: Story = {
  args: {
    label: 'Field',
    type: 'text',
  },
};
