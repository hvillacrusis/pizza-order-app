import type { Meta, StoryObj } from "@storybook/react";
import ButtonCheckout from "./ButtonCheckout";

const meta = {
  title: "Components/Atoms/ButtonCheckout",
  component: ButtonCheckout,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ButtonCheckout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => {
      console.log("Button Clicked");
    },
  },
};
