import type { Meta, StoryObj } from '@storybook/react';
import DeleteItems from './index';

const meta: Meta<typeof DeleteItems> = {
  title: 'Components/DeleteItems',
  component: DeleteItems,
};
export default meta;

type Story = StoryObj<typeof DeleteItems>;

export const Default: Story = {
  args: {
    counter: 1,
    onDelete: () => {},
    isLargeButton: false,
    content: 'Are you sure you want to delete?',
  },
};
