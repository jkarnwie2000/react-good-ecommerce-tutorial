import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { test, expect, vi } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";


const mockBooks = [
  {
    id: 1,
    title: "Test Books",
    rating: 4,
    originalPrice: 20,
    salePrice: 15,
    url: "test-image.jpg",
  },
];

test("renders the selected book information", () => {
  render(
    <MemoryRouter initialEntries={["/books"]}>
      <Routes>
        <Route
          path="/books"
          element={
            <Books
              books={mockBooks}
              cart={[]}
              addToCart={vi.fn()}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("Test Books")).toBeInTheDocument();
});


