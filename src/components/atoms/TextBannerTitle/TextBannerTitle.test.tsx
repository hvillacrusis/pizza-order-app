import { render } from "@testing-library/react";
import TextBannerTitle from "./TextBannerTitle";

test("renders TextBannerTitle", () => {
  const { getByText } = render(
    <TextBannerTitle title="Pizza perfected. Delivered to your door." />
  );
  expect(
    getByText("Pizza perfected. Delivered to your door.")
  ).toBeInTheDocument();
});
