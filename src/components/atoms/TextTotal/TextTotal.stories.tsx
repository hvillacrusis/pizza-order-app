import type { Meta, StoryObj } from "@storybook/react";
import TextTotal from "./TextTotal";

const meta = {
  title: "Components/Atoms/TextTotal",
  component: TextTotal,
  tags: ["autodocs"],
  argTypes: {
    total: { control: "number" },
  },
} satisfies Meta<typeof TextTotal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    total: 25.98,
  },
};
