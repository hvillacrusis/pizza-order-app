// src/stories/ImagePizza.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import ImagePizza from "./ImagePizza";

const meta = {
  title: "Components/Atoms/ImagePizza",
  component: ImagePizza,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
  },
} satisfies Meta<typeof ImagePizza>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://images.pexels.com/photos/6940996/pexels-photo-6940996.jpeg",
    alt: "Pizza",
  },
};
