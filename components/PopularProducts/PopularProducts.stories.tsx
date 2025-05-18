import type { Meta, StoryObj } from '@storybook/react';
import PopularProducts from './index';

const meta: Meta<typeof PopularProducts> = {
  title: 'Components/PopularProducts',
  component: PopularProducts,
};
export default meta;

type Story = StoryObj<typeof PopularProducts>;

export const Default: Story = {
  args: {
    title: 'Popular Products',
    items: [
      {
        id: 1,
        title: 'Modern UI Kit',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=80&h=80',
        price: 49.99,
        active: true,
      },
      {
        id: 2,
        title: 'Classic UI Kit',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=80&h=80',
        price: 29.99,
        active: false,
      },
    ],
  },
}; 