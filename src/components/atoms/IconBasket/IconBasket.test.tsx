// src/__tests__/IconBasket.test.tsx
import { render } from "@testing-library/react";
import IconBasket from "./IconBasket";

test("renders IconBasket", () => {
  const { container } = render(<IconBasket />);
  expect(container.firstChild).toBeInTheDocument();
});
