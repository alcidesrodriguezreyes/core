import type { Meta, StoryObj } from '@storybook/react';
import FieldImage from './index';

const meta: Meta<typeof FieldImage> = {
  title: 'Components/FieldImage',
  component: FieldImage,
};
export default meta;

type Story = StoryObj<typeof FieldImage>;

export const Default: Story = {
  args: {
    label: 'Upload Image',
    onChange: () => {},
  },
};
