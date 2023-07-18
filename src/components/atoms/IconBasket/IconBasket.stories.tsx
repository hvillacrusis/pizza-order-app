// src/stories/IconBasket.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import IconBasket from "./IconBasket";

const meta = {
  title: "Components/Atoms/IconBasket",
  component: IconBasket,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof IconBasket>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
