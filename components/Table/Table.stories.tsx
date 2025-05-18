import type { Meta, StoryObj } from '@storybook/react';
import Table from './index';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    cellsThead: (
      <>
        <th>Name</th>
        <th>Value</th>
      </>
    ),
    children: (
      <>
        <tr>
          <td>Item 1</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Item 2</td>
          <td>200</td>
        </tr>
      </>
    ),
  },
}; 