import type { Meta, StoryObj } from '@storybook/react';
import Image from './index';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
};
export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: '/images/logos/notion.svg',
    alt: 'Sample image',
    width: 150,
    height: 150,
  },
};