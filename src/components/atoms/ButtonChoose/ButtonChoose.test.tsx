import { render, fireEvent } from "@testing-library/react";
import ButtonChoose from "./ButtonChoose";

test("renders ButtonChoose and respond to click event", () => {
  const handleClick = jest.fn();
  const { getByRole } = render(<ButtonChoose onClick={handleClick} />);

  const button = getByRole("button");
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalled();
});
