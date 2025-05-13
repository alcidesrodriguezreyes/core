import type { Meta, StoryObj } from '@storybook/react';
import CountryItem from './index';

const meta: Meta<typeof CountryItem> = {
  title: 'Components/CountryItem',
  component: CountryItem,
};
export default meta;

type Story = StoryObj<typeof CountryItem>;

export const Default: Story = {
  args: {
    value: {
      id: 1,
      name: 'Country',
      flag: '/images/flag.png',
      price: 100,
      percentage: 50,
    },
  },
};
