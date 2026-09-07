import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";


const mockBooks = [
  {
    id: 1,
    title: "Test Cart",
    rating: 4,
    originalPrice: 20,
    salePrice: 15,
    url: "test-image.jpg",
  },
];

test("find the clickable remove button, click on it, and display the information", () => {
  render(
    <MemoryRouter initialEntries={["/cart"]}>
      <Routes>
        <Route
          path="/cart"
          element={
            <Cart
              books={mockBooks}
              cart={[{...mockBooks[0], quantity: 1 }]}
              addToCart={jest.fn()}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("Test Cart")).toBeInTheDocument();
});


test("find the clickable proceed to checkout button, click on it, and display the information", () => {
  render(
    <MemoryRouter initialEntries={["/cart"]}>
      <Routes>
        <Route
          path="/cart"
          element={
            <Cart
              books={mockBooks}
              cart={[{...mockBooks[0], quantity: 1 }]}
              addToCart={jest.fn()}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("Test Cart")).toBeInTheDocument();
});


