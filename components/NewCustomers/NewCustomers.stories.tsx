import type { Meta, StoryObj } from '@storybook/react';
import NewCustomers from './index';

const meta: Meta<typeof NewCustomers> = {
  title: 'Components/NewCustomers',
  component: NewCustomers,
};
export default meta;

type Story = StoryObj<typeof NewCustomers>;

export const Default: Story = {
  args: {
    percentage: 36.8,
  },
}; 