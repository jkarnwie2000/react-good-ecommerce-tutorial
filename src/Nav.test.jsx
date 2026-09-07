import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";

test("display the navigation buttons", () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>,
  );

  const buttons = screen.getAllByRole("button");

  expect(buttons).toHaveLength(2);
});
