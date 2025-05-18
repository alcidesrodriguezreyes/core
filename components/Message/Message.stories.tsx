import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Message from './index';

const meta: Meta<typeof Message> = {
  title: 'Components/Message',
  component: Message,
};
export default meta;

type Story = StoryObj<typeof Message>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <Message
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    );
  },
  args: {},
}; 