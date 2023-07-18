import { render, fireEvent } from "@testing-library/react";
import BasketItem from "./BasketItem";

describe("BasketItem", () => {
  const mockPizza = {
    id: "1",
    name: "Test Pizza",
    price: 10,
    imageUrl: "/test.jpg",
  };
  const mockProps = {
    pizza: mockPizza,
    itemCount: 1,
    itemTotal: 10,
    onIncrease: jest.fn(),
    onDecrease: jest.fn(),
  };

  it("renders correctly", () => {
    const { getByText } = render(<BasketItem {...mockProps} />);
    expect(getByText("Test Pizza")).toBeInTheDocument();
  });

  it("handles increase and decrease", () => {
    const { getByText } = render(<BasketItem {...mockProps} />);
    const increaseButton = getByText("+");
    const decreaseButton = getByText("-");

    fireEvent.click(increaseButton);
    fireEvent.click(decreaseButton);

    expect(mockProps.onIncrease).toHaveBeenCalled();
    expect(mockProps.onDecrease).toHaveBeenCalled();
  });
});
