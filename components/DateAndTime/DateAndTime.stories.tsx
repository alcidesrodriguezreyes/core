import type { Meta, StoryObj } from '@storybook/react';
import DateAndTime from './index';

const meta: Meta<typeof DateAndTime> = {
  title: 'Components/DateAndTime',
  component: DateAndTime,
};
export default meta;

type Story = StoryObj<typeof DateAndTime>;

export const Default: Story = {
  args: {
    label: 'Date and Time',
    startDate: new Date(),
    setStartDate: () => {},
    startTime: new Date(),
    setStartTime: () => {},
  },
};
