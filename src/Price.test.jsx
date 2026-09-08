import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Price from "./components/ui/Price";


const mockBooks = [
  {
    id: 1,
    title: "Test Price",
    rating: 4,
    originalPrice: 20,
    salePrice: 15,
    url: "test-image.jpg",
  },
];

test("find the clickable book, click on it, and display the information", () => {
  render(
    <MemoryRouter initialEntries={["/books/1"]}>
      <Routes>
        <Route
          path="/books/:id"
          element={
            <Price
              book={mockBooks[0]}
              cart={[]}
              addToCart={jest.fn()}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("Test Price")).toBeInTheDocument();
});


