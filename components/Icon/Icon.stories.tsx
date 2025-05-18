import type { Meta, StoryObj } from '@storybook/react';
import Icon from './index';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'sun',
  },
}; 