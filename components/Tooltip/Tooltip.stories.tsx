import { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./index";

const meta: Meta<typeof Tooltip> = {
    title: "Components/Tooltip",
    component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {
        content: "Tooltip",
    }
};

export const Large: Story = {
    args: {
        content: "Tooltip",
        large: true,
    },
};
