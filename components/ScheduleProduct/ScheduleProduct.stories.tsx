import type { Meta, StoryObj } from '@storybook/react';
import ScheduleProduct from './index';

const meta: Meta<typeof ScheduleProduct> = {
  title: 'Components/ScheduleProduct',
  component: ScheduleProduct,
};
export default meta;

type Story = StoryObj<typeof ScheduleProduct>;

export const Default: Story = {
  args: {
    title: 'Sample Product',
    details: 'This is a sample product for scheduling.',
    image: 'https://via.placeholder.com/64',
    price: 99.99,
  },
}; 