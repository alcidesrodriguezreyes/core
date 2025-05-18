import type { Meta, StoryObj } from '@storybook/react';
import ProductView from './index';

const meta: Meta<typeof ProductView> = {
  title: 'Components/ProductView',
  component: ProductView,
};
export default meta;

type Story = StoryObj<typeof ProductView>;

export const Default: Story = {
  args: {},
}; 