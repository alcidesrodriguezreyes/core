import type { Meta, StoryObj } from '@storybook/react';
import LikeButton from './index';

const meta: Meta<typeof LikeButton> = {
  title: 'Components/LikeButton',
  component: LikeButton,
};
export default meta;

type Story = StoryObj<typeof LikeButton>;

export const Default: Story = {
  args: {},
}; 