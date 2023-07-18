// src/stories/TextPizzaTitle.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import TextPizzaTitle from "./TextPizzaTitle";

const meta = {
  title: "Components/Atoms/TextPizzaTitle",
  component: TextPizzaTitle,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
  },
} satisfies Meta<typeof TextPizzaTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Delicious Pizza",
  },
};
