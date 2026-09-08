import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Rating from "./components/ui/rating";


const mockBooks = [
  {
    id: 1,
    title: "TestRating",
    rating: 4,
    originalPrice: 20,
    salePrice: 15,
    url: "test-image.jpg",
  },
];

test("find the book rating, and display the information", () => {
  render(
    <MemoryRouter initialEntries={["/books/1"]}>
      <Rating
        rating={mockBooks[0].rating}
       />
    </MemoryRouter>
  );

  expect(screen.getByText("rating: 4")).toBeInTheDocument();
});
