import type { Meta, StoryObj } from '@storybook/react';
import RefundRequests from './index';

const meta: Meta<typeof RefundRequests> = {
  title: 'Components/RefundRequests',
  component: RefundRequests,
};
export default meta;

type Story = StoryObj<typeof RefundRequests>;

export const Default: Story = {
  args: {},
}; 