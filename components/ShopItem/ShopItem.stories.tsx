import type { Meta, StoryObj } from '@storybook/react';
import ShopItem from './index';
import { shopItems } from '@/mocks/shopItems';

const meta: Meta<typeof ShopItem> = {
  title: 'Components/ShopItem',
  component: ShopItem,
};
export default meta;

type Story = StoryObj<typeof ShopItem>;

export const Default: Story = {
  args: {
    value: shopItems[0],
  },
};

export const Fonts: Story = {
  args: {
    value: shopItems[1],
  },
};

export const Illustration: Story = {
  args: {
    value: shopItems[3],
  },
}; 