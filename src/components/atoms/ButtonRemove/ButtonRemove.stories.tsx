// src/stories/ButtonRemove.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import ButtonRemove from "./ButtonRemove";

const meta = {
  title: "Components/Atoms/ButtonRemove",
  component: ButtonRemove,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ButtonRemove>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => {
      console.log("Button Clicked!");
    },
  },
};
