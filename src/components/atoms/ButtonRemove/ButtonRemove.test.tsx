import { render, fireEvent } from "@testing-library/react";
import ButtonRemove from "./ButtonRemove";

test("renders ButtonRemove and respond to click event", () => {
  const handleClick = jest.fn();
  const { getByRole } = render(<ButtonRemove onClick={handleClick} />);

  const button = getByRole("button");
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalled();
});
