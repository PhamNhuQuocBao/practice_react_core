import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "./index";

test("renders input component with placeholder", () => {
  render(<Input placeholder="Test Input" />);
  const inputElement = screen.getByPlaceholderText("Test Input");
  expect(inputElement).toBeInTheDocument();
});

test("renders input component with default value", () => {
  render(<Input defaultValue="Default Value" />);
  const inputElement = screen.getByDisplayValue("Default Value");
  expect(inputElement).toBeInTheDocument();
});

test("calls onChange callback when input value changes", () => {
  const handleChange = jest.fn();
  render(<Input onChange={handleChange} />);
  const inputElement = screen.getByRole("textbox");
  fireEvent.change(inputElement, { target: { value: "New Value" } });
  expect(handleChange).toHaveBeenCalled();
});
