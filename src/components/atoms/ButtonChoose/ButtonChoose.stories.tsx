// src/stories/ButtonChoose.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import ButtonChoose from "./ButtonChoose";

const meta = {
  title: "Components/Atoms/ButtonChoose",
  component: ButtonChoose,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ButtonChoose>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => {
      console.log("Button Clicked");
    },
  },
};
