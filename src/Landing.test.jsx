import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";

test("renders the landing section", () => {
  render(
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );

  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toBeInTheDocument();
});

test("renders the Browse books button", () => {
  render(
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );

  const button = screen.getByRole("button", {
    name: /browse books/i,
  });

  expect(button).toBeInTheDocument();
});