import type { Meta, StoryObj } from '@storybook/react';
import Product from '../components/Product';

const meta = {
  title: 'Components/Product',
  component: Product,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'object',
      description: 'Product details',
    },
  },
} satisfies Meta<typeof Product>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    value: {
      id: 1,
      title: 'Modern UI Kit',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=80&h=80',
      price: 49.99,
      active: true,
    },
  },
};

export const Offline: Story = {
  args: {
    value: {
      id: 2,
      title: 'Classic UI Kit',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=80&h=80',
      price: 29.99,
      active: false,
    },
  },
}; 