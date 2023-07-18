import { render } from "@testing-library/react";
import TextPizzaTitle from "./TextPizzaTitle";

test("renders TextPizzaTitle", () => {
  const { getByText } = render(<TextPizzaTitle title="Delicious Pizza" />);
  expect(getByText("Delicious Pizza")).toBeInTheDocument();
});
