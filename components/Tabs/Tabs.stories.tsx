import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Tabs from './index';
import type { TabsOption } from '@/types/tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
};
export default meta;

type Story = StoryObj<typeof Tabs>;

const items: TabsOption[] = [
  { id: 1, name: 'Tab 1' },
  { id: 2, name: 'Tab 2' },
  { id: 3, name: 'Tab 3' },
];

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<TabsOption>(items[0]);
    return <Tabs {...args} items={items} value={value} setValue={setValue} />;
  },
  args: {},
}; 