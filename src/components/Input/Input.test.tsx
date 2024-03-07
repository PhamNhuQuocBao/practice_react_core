import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "./index";

describe("Input", () => {
  test("renders correctly", () => {
    render(<Input type="text" />);
    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();
  });

  test("renders input component with placeholder", () => {
    render(<Input placeholder="Test Input" />);
    const inputElement = screen.getByPlaceholderText("Test Input");
    expect(inputElement).toBeInTheDocument();
  });

  test("renders input component with default value", () => {
    render(<Input value="Test input" onChange={() => {}} />);
    const inputElement = screen.getByDisplayValue("Test input");
    expect(inputElement).toBeInTheDocument();
  });

  test("calls onChange callback when input value changes", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "New Value" } });
    expect(handleChange).toHaveBeenCalled();

    const inputValue = screen.getByDisplayValue("New Value");
    expect(inputValue).toBeInTheDocument();
  });

  test("renders Input component with correct props", () => {
    render(<Input iconLeft="icon left" iconRight="icon right" />);

    const iconLeft = screen.getByText("icon left");
    const iconRight = screen.getByText("icon right");

    expect(iconLeft).toBeInTheDocument();
    expect(iconRight).toBeInTheDocument();
  });
});
