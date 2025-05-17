import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from './index';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/products',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    visibleSidebar: true,
    hideSidebar: false,
  },
};

export const Hidden: Story = {
  args: {
    visibleSidebar: false,
    hideSidebar: false,
  },
};

export const WithCloseHandler: Story = {
  args: {
    visibleSidebar: true,
    hideSidebar: true,
    onCloseSidebar: () => alert('Sidebar closed!'),
  },
};
 