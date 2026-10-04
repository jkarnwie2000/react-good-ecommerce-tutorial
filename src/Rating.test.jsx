import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import Rating from "./components/ui/rating";

library.add(faStar, faStarHalfAlt);

const mockBooks = [
  {
    id: 1,
    title: "TestRating",
    rating: 4.5,
    originalPrice: 20,
    salePrice: 15,
    url: "test-image.jpg",
  },
];

test("find the book rating, and display the half-star information", () => {
  render(
    <MemoryRouter initialEntries={["/books/1"]}>
      <Rating rating={mockBooks[0].rating} />
    </MemoryRouter>,
  );

  expect(screen.getAllByRole("img", { name: /star/i })).toHaveLength(5);
  expect(screen.getByRole("img", { name: /half star/i })).toBeInTheDocument();
});