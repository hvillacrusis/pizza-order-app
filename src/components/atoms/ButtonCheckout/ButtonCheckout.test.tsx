import { render, fireEvent } from "@testing-library/react";
import ButtonCheckout from "./ButtonCheckout";

test("renders ButtonCheckout and respond to click event", () => {
  const handleClick = jest.fn();
  const { getByRole } = render(<ButtonCheckout onClick={handleClick} />);

  const button = getByRole("button");
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalled();
});
