import "@testing-library/jest-dom/vitest";
import { test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";


test("renders the Home link", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
const link = screen.getByRole("link", { name: /Home/i });
  expect(link).toBeInTheDocument();
});



