import { render } from "@testing-library/react";
import TextPizzaPrice from "./TextPizzaPrice";

test("renders TextPizzaPrice", () => {
  const { getByText } = render(<TextPizzaPrice price={19.99} />);
  expect(getByText("$ 19.99")).toBeInTheDocument();
});
