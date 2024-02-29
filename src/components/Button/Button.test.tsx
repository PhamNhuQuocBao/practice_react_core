// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import { Button } from "./index";
// import test from "node:test";
// import { ButtonType } from "@/enums";

// test("renders Button", () => {
//   render(<Button text="Button" buttonType={ButtonType.SUCCESS} />);
//   const button = screen.getByText("Button");
//   expect(button).toBeInTheDocument();
// });

// button.test.js
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./index";

test("renders button with correct text", () => {
  const { getByText } = render(<Button text="Click me" />);
  const button = getByText("Click me");
  expect(button).toBeInTheDocument();
});

test("calls onClick function when button is clicked", () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <Button text="Click me" onClick={onClickMock} />
  );
  const button = getByText("Click me");
  fireEvent.click(button);
  expect(onClickMock).toBeCalled();
});
