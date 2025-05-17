import type { Meta, StoryObj } from '@storybook/react';
import CountryItem from './index';
import { countriesEarnings } from "@/mocks/countries";
const country = countriesEarnings[0];
const country2 = countriesEarnings[1];

const meta: Meta<typeof CountryItem> = {
  title: 'Components/CountryItem',
  component: CountryItem,
};
export default meta;

type Story = StoryObj<typeof CountryItem>;

export const Default: Story = {
  args: {
    value: country,
  },
};

export const SecondCountry: Story = {
  args: {
    value: country2,
  },
};
