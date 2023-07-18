import { render } from "@testing-library/react";
import ImagePizza from "./ImagePizza";

test("renders ImagePizza", () => {
  const { getByAltText } = render(
    <ImagePizza src="pizza.jpg" alt="Delicious Pizza" />
  );
  expect(getByAltText("Delicious Pizza")).toHaveAttribute("src", "pizza.jpg");
});
