import type { Meta, StoryObj } from '@storybook/react';
import Percentage from '../components/Percentage';

const meta = {
  title: 'Components/Percentage',
  component: Percentage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    value: { control: 'number' },
    large: { control: 'boolean' },
  },
} satisfies Meta<typeof Percentage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Positive: Story = {
  args: {
    value: 12,
  },
};

export const Negative: Story = {
  args: {
    value: -8,
  },
};

export const Large: Story = {
  args: {
    value: 25,
    large: true,
  },
}; 