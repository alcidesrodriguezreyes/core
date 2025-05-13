import type { Meta, StoryObj } from '@storybook/react';
import Compatibility from './index';

const meta: Meta<typeof Compatibility> = {
  title: 'Components/Compatibility',
  component: Compatibility,
};
export default meta;

type Story = StoryObj<typeof Compatibility>;

export const Default: Story = {
  args: {},
};
