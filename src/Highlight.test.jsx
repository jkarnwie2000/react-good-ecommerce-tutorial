import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Highlight from "./components/ui/Highlight";

test("renders the highlight section", () => {
  render(
    <BrowserRouter>
      <Highlight />
    </BrowserRouter>
  );

  const heading = screen.getByRole("heading", {
    name: /Why chose Library/i,
    level: 2,
  });

  expect(heading).toBeInTheDocument();
});
