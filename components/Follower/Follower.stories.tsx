import type { Meta, StoryObj } from '@storybook/react';
import Follower from './index';

const meta: Meta<typeof Follower> = {
  title: 'Components/Follower',
  component: Follower,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Follower>;

const mockUser = {
  id: 1,
  name: 'Jane Doe',
  position: 'Product Designer',
  avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  items: 12,
  rating: 4.8,
  isFollowed: false,
};

export const Default: Story = {
  args: {
    value: { ...mockUser },
  },
};

export const Followed: Story = {
  args: {
    value: { ...mockUser, isFollowed: true, name: 'John Smith', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  },
}; 