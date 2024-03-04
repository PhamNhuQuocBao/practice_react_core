// import { Default } from "./Input.stories";
import { Input } from "@/components/Input";
import { InputFill } from "@/enums";
import type { Meta, StoryObj } from "@storybook/react";
// import MailIcon from "@/assets/icons/mail.svg";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    fill: {
      options: ["default", "error", "success", "outlined"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultInput: Story = {
  args: {
    fill: InputFill.DEFAULT,
  },
};

export const Error: Story = {
  args: {
    fill: InputFill.ERROR,
  },
};

export const Outlined: Story = {
  args: {
    fill: InputFill.OUTLINED,
  },
};
