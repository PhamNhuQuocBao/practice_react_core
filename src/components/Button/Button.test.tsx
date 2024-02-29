import "@testing-library/jest-dom";
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
