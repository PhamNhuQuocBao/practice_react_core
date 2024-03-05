import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { CardProduct } from "./index";

const data = {
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
};

test("renders CardProduct component with correct data", () => {
  render(<CardProduct data={data} />);
  const titleElement = screen.getByText(
    "Fleet - Travel shopping UI design kit"
  );
  const priceElement = screen.getByText("$64");
  expect(titleElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
});

test("clicking on CardProduct triggers the correct action", () => {
  const mockOnClick = jest.fn();
  render(<CardProduct data={data} onForward={mockOnClick} />);
  const card = screen.getByTestId("card-product");
  fireEvent.click(card);
  expect(mockOnClick).toHaveBeenCalled();
});

test("renders correct text for rating and total comments", () => {
  render(<CardProduct data={data} />);
  const ratingElement = screen.getByText("4.5");
  const totalCommentsElement = screen.getByText("87 comments");
  expect(ratingElement).toBeInTheDocument();
  expect(totalCommentsElement).toBeInTheDocument();
});
