import "@testing-library/jest-dom/vitest";
import { test, expect } from "vitest";

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Highlights from "./components/Highlights";

test("renders the highlights section", () => {
  render(
    <BrowserRouter>
      <Highlights />
    </BrowserRouter>
  );

  const heading = screen.getByRole("heading", {
    name: /Why chose Library/i,
    level: 2,
  });

  expect(heading).toBeInTheDocument();
});


