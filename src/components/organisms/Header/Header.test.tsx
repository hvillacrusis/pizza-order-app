import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  const mockProps = {
    basketItems: [],
    handleRemoveItem: jest.fn(),
    handleAddItem: jest.fn(),
    totalAmount: 0,
    isBasketOpen: false,
    handleBasketButtonClick: jest.fn(),
  };

  it("renders correctly", () => {
    const { getByText } = render(<Header {...mockProps} />);
    expect(getByText("Pizza Perfect")).toBeInTheDocument();
  });

  it("handles basket button click", () => {
    const { getByRole } = render(<Header {...mockProps} />);
    const button = getByRole("button");

    fireEvent.click(button);

    expect(mockProps.handleBasketButtonClick).toHaveBeenCalled();
  });
});
