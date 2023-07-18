import type { Meta, StoryObj } from "@storybook/react";
import TextBannerTitle from "./TextBannerTitle";

const meta = {
  title: "Components/Atoms/TextBannerTitle",
  component: TextBannerTitle,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#333", padding: "1em" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextBannerTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Pizza perfected. Delivered to your door.",
  },
};
