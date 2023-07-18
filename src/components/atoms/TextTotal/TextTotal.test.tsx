import { render } from "@testing-library/react";
import TextTotal from "./TextTotal";

test("renders TextTotal", () => {
  const { getByText } = render(<TextTotal total={29.99} />);
  expect(getByText(/Total: \$\s*29\.99/i)).toBeInTheDocument();
});
