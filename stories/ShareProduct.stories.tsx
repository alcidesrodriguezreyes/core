import type { Meta, StoryObj } from '@storybook/react';
import ShareProduct from '../components/ShareProduct';

const meta = {
  title: 'Components/ShareProduct',
  component: ShareProduct,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    details: { control: 'text' },
    image: { control: 'text' },
  },
} satisfies Meta<typeof ShareProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Modern UI Kit',
    details: 'A beautiful and modern UI kit for your next project.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=80&h=80',
  },
};

export const WithLongDetails: Story = {
  args: {
    title: 'Modern UI Kit',
    details: 'This is a very long description to test how the ShareProduct component handles overflow and truncation in the details section. It should gracefully truncate or wrap as needed.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=80&h=80',
  },
}; 
