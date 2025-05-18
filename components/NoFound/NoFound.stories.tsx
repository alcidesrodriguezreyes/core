import NoFound from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NoFound> = {
  title: "Components/NoFound",
  component: NoFound,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof NoFound>;

export const Default: Story = {
  args: {
    title: "No Results Found",
  },
};

export const CustomTitle: Story = {
  args: {
    title: "Nothing matched your search!",
  },
}; 