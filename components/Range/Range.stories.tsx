import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Range from '.';

const meta = {
  title: 'Components/Range',
  component: Range,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Range>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Price range",
    tooltip: "Maximum 100 characters. No HTML or emoji allowed",
    prefix: "$",
    values: [12, 118],
    setValues: () => {},
    min: 12,
    max: 118,
    step: 1,
  },
};
