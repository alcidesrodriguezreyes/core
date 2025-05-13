import type { Meta, StoryObj } from '@storybook/react';
import FieldFiles from './index';

const meta: Meta<typeof FieldFiles> = {
  title: 'Components/FieldFiles',
  component: FieldFiles,
};
export default meta;

type Story = StoryObj<typeof FieldFiles>;

export const Default: Story = {
  args: {
    label: 'Upload File',
    onChange: () => {},
  },
};
