import type { Meta, StoryObj } from '@storybook/react';
import Filters from './index';

const meta: Meta<typeof Filters> = {
  title: 'Components/Filters',
  component: Filters,
};
export default meta;

type Story = StoryObj<typeof Filters>;

export const Default: Story = {
  args: {},
};
