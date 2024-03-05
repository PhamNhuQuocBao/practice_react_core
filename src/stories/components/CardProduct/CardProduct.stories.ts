// import { Default } from "./Input.stories";
import { CardProduct } from "@/components/CardProduct";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/CardProduct",
  component: CardProduct,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    data: {
      control: { type: "object" },
    },
    onForward: {
      control: { type: "function" },
    },
    onDelete: {
      control: { type: "function" },
    },
    onEdit: {
      control: { type: "function" },
    },
  },
} satisfies Meta<typeof CardProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultInput: Story = {
  args: {
    data: {
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      idUser: 1,
      id: 1,
      title: "Fleet - Travel shopping UI design kit",
      price: 64,
      rating: 4.5,
      totalComments: 87,
      overview: "Hello",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      hearts: 0,
    },
  },
};

// export const Error: Story = {
//   args: {
//     fill: InputFill.ERROR,
//   },
// };

// export const Outlined: Story = {
//   args: {
//     fill: InputFill.OUTLINED,
//   },
// };
