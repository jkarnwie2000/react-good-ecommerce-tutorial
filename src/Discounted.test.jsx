import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Discounted from "./components/Discounted";

const mockBooks = [
  {
    id: 1,
    title: "Test Books",
    rating: 5,
    originalPrice: 20,
    salePrice: 15,
    url: "test-image.jpg",
  },
];

test("find clickable item, click it, and display the selected book information", () => {
  render(
    <MemoryRouter initialEntries={["/books/1"]}>
      <Routes>
        <Route
          path="/books/:id"
          element={
            <Discounted
              books={mockBooks}
              // cart={[{ ...mockBooks[0], quantity: 1 }]}
              // addToCart={jest.fn()}
            />
          }
        />
      </Routes>
    </MemoryRouter>,
  );

  expect(screen.getByText("Test Books")).toBeInTheDocument();
});