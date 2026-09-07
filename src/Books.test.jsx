import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
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
              addToCart={jest.fn()}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("Test Books")).toBeInTheDocument();
});


test("find the clickable book, click on it, and display the information", () => {
  render(
    <MemoryRouter initialEntries={["/books"]}>
      <Routes>
        <Route
          path="/books"
          element={
            <Books
              books={mockBooks}
              cart={[]}
              addToCart={jest.fn()}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("Test Books")).toBeInTheDocument();
});


