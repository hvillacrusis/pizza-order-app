import { render, fireEvent } from "@testing-library/react";
import { Basket } from "./Basket";

describe("Basket", () => {
  const mockPizza = {
    id: "1",
    name: "Test Pizza",
    price: 10,
    imageUrl: "/test.jpg",
    uniqueId: "test-unique",
  };
  const mockProps = {
    itemsInBasket: [{ ...mockPizza, count: 1, total: 1 }],
    totalAmount: 10,
    removeItemFromBasket: jest.fn(),
    addItemFromBasket: jest.fn(),
  };

  it("renders correctly", () => {
    const { getByText } = render(<Basket {...mockProps} />);
    expect(getByText("Test Pizza")).toBeInTheDocument();
  });

  it("handles increase and decrease", () => {
    const { getByText } = render(<Basket {...mockProps} />);
    const increaseButton = getByText("+");
    const decreaseButton = getByText("-");

    fireEvent.click(increaseButton);
    fireEvent.click(decreaseButton);

    expect(mockProps.addItemFromBasket).toHaveBeenCalled();
    expect(mockProps.removeItemFromBasket).toHaveBeenCalled();
  });
});
