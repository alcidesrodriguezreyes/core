import type { Meta, StoryObj } from '@storybook/react';
import CardChartPie from './index';

const meta: Meta<typeof CardChartPie> = {
  title: 'Components/CardChartPie',
  component: CardChartPie,
};
export default meta;

type Story = StoryObj<typeof CardChartPie>;

export const Default: Story = {
  args: {
    title: 'Pie Chart',
    data: [
      { name: 'A', value: 40 },
      { name: 'B', value: 30 },
      { name: 'C', value: 30 },
    ],
  },
};
