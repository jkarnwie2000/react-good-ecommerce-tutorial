import "@testing-library/jest-dom";
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

test("renders the Books link", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
const link = screen.getByRole("link", { name: /Books/i });
  expect(link).toBeInTheDocument();
});

test("renders the Cart link", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
const link = screen.getByRole("link", { name: /Cart/i });
  expect(link).toBeInTheDocument();
});

