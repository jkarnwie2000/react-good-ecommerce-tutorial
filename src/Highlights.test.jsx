import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Highlights from "./components/Highlights";

test("renders the highlights section", () => {
  render(
    <BrowserRouter>
      <Highlights />
    </BrowserRouter>
  );

  const heading = screen.getByRole("why choose library", { level: 1 });
  expect(heading).toBeInTheDocument();
});