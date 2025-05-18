import { Meta, StoryObj } from "@storybook/react";
import Select from "./index";

const meta: Meta<typeof Select> = {
    title: "Components/Select",
    component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        value: {
            id: 1,
            name: "Option 1",
        },
        options: [
            {
                id: 1,
                name: "Option 1",
            },
            {
                id: 2,
                name: "Option 2",
            },
        ],
    },
};
