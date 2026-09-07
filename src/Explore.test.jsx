import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Explore from "./components/Explore";


test("renders the Explore button", () => {
  render(
    <BrowserRouter>
      <Explore />
    </BrowserRouter>
  );
const button = screen.getByRole("button", { name: /Explore/i });
  expect(button).toBeInTheDocument();
});