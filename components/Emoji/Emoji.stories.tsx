import type { Meta, StoryObj } from '@storybook/react';
import Emoji from './index';

const meta: Meta<typeof Emoji> = {
  title: 'Components/Emoji',
  component: Emoji,
};
export default meta;

type Story = StoryObj<typeof Emoji>;

export const Default: Story = {
  args: {
    onEmojiClick: () => {},
  },
};
