import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Modal from './index';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    isSlidePanel: { control: 'boolean' },
    open: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

const ModalContent = ({ onClose }: { onClose: () => void }) => (
  <div style={{ minWidth: 300, minHeight: 100 }}>
    <h2 className="text-xl font-bold mb-4">Modal Title</h2>
    <p>This is a modal content example.</p>
    <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>
      Close
    </button>
  </div>
);

export const Default: Story = {
  args: {
    open: true,
    isSlidePanel: false,
    onClose: () => {},
    children: <ModalContent onClose={() => {}} />,
  },
};

export const SlidePanel: Story = {
  args: {
    open: true,
    isSlidePanel: true,
    onClose: () => {},
    children: <ModalContent onClose={() => {}} />,
  },
}; 