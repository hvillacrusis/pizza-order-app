// src/stories/ButtonBasket.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import ButtonBasket from "./ButtonBasket";

const meta = {
  title: "Components/Atoms/ButtonBasket",
  component: ButtonBasket,
  tags: ["autodocs"],
  argTypes: {
    count: { control: "number" },
  },
} satisfies Meta<typeof ButtonBasket>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 2,
    onClick: () => {
      console.log("Button Clicked!");
    },
  },
};
