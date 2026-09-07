import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";

test("click the navigation button, and display the information", () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );

  const button = screen.getByRole("button", {
    name: /browse navbar/i,
  });

  expect(button).toBeInTheDocument();
});