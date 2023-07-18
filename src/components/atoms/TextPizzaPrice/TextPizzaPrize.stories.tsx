// src/stories/TextPizzaPrice.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import TextPizzaPrice from "./TextPizzaPrice";

const meta = {
  title: "Components/Atoms/TextPizzaPrice",
  component: TextPizzaPrice,
  tags: ["autodocs"],
  argTypes: {
    price: { control: "number" },
  },
} satisfies Meta<typeof TextPizzaPrice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    price: 19.99,
  },
};
