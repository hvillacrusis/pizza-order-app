// src/__tests__/ButtonBasket.test.tsx
import { render, fireEvent } from "@testing-library/react";
import ButtonBasket from "./ButtonBasket";

test("renders ButtonBasket and respond to click event", () => {
  const handleClick = jest.fn();
  const { getByRole } = render(
    <ButtonBasket count={2} onClick={handleClick} />
  );

  const button = getByRole("button");
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalled();
  expect(button).toHaveTextContent("Basket (2)");
});
