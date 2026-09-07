import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MemoryRouter, Routes, Route } from "react-router-dom";
import BookInfo from "./pages/BookInfo";

const mockBooks = [
  {
    id: 1,
    title: "Test Book",
    rating: 4,
    originalPrice: 20,
    salePrice: 15,
    url: "test-image.jpg",
  },
];

test("renders the selected book information", () => {
  render(
    <MemoryRouter initialEntries={["/books/1"]}>
      <Routes>
        <Route
          path="/books/:id"
          element={
            <BookInfo
              books={mockBooks}
              cart={[]}
              addToCart={jest.fn()}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("Test Book")).toBeInTheDocument();
});


test("adds the selected book to the cart", () => {
  const mockAddToCart = jest.fn();

  render(
    <MemoryRouter initialEntries={["/books/1"]}>
      <Routes>
        <Route
          path="/books/:id"
          element={
            <BookInfo
              books={mockBooks}
              cart={[]}
              addToCart={mockAddToCart}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  fireEvent.click(screen.getByText("Add to cart"));

  expect(mockAddToCart).toHaveBeenCalledWith(mockBooks[0]);
});