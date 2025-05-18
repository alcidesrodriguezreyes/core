import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Range from '../components/Range';

const meta = {
  title: 'Components/Range',
  component: Range,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    tooltip: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    prefix: { control: 'text' },
  },
} satisfies Meta<typeof Range>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => {
  const [values, setValues] = useState([args.min ?? 0, args.max ?? 100]);
  return (
    <Range
      {...args}
      values={values}
      setValues={setValues}
    />
  );
};

export const Default: Story = {
  render: Template,
  args: {
    label: 'Price Range',
    tooltip: 'Select a price range',
    min: 0,
    max: 100,
    step: 1,
    prefix: '$',
  },
};

export const CustomRange: Story = {
  render: Template,
  args: {
    label: 'Custom Range',
    tooltip: 'Custom min, max, and step',
    min: 10,
    max: 500,
    step: 10,
    prefix: '€',
  },
};

export const NoLabelOrTooltip: Story = {
  render: Template,
  args: {
    min: 0,
    max: 50,
    step: 5,
  },
}; 