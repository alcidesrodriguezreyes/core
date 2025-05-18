import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Search from "./index";

const meta: Meta<typeof Search> = {
    title: "Components/Search",
    component: Search,
    argTypes: {
        placeholder: { control: "text" },
        isGray: { control: "boolean" },
    },
};

export default meta;

type Story = StoryObj<typeof Search>;

const Template = (args: any) => {
    const [value, setValue] = useState("");
    return (
        <Search
            {...args}
            value={value}
            onChange={e => setValue(e.target.value)}
            onClear={() => setValue("")}
        />
    );
};

export const Default: Story = {
    render: Template,
    args: {
        placeholder: "Search...",
        isGray: false,
    },
};

export const GrayBackground: Story = {
    render: Template,
    args: {
        placeholder: "Search in gray...",
        isGray: true,
    },
};
