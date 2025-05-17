import type { Meta, StoryObj } from '@storybook/react';
import GridProduct from './index';
import Icon from '../Icon';

import { draftsProducts } from "@/mocks/products";
const product = draftsProducts[0];


const meta: Meta<typeof GridProduct> = {
  title: 'Components/GridProduct',
  component: GridProduct,
};
export default meta;

type Story = StoryObj<typeof GridProduct>;

export const Default: Story = {
  args: {
    title: product.title,
    image: product.image,
    price: product.price,
    selectedRows: false,
    onRowSelect: () => {},
    children: <div className="text-caption text-t-secondary/80">Default child content</div>,
    actions: null,
  },
};

export const WithActionsAndChildren: Story = {
  args: {
    title: product.title,
    image: product.image,
    price: product.price,
    selectedRows: true,
    onRowSelect: () => {},
    children: (
      <div className="flex items-center gap-2 text-caption text-t-secondary/80">
        <Icon className="fill-t-secondary" name="clock" />
        Last updated: Today
      </div>
    ),
    actions: (
      <>
        <button className="action">
          <Icon name="edit" />
          Edit
        </button>
        <button className="action">
          <Icon name="trash" />
          Delete
        </button>
      </>
    ),
  },
}; 