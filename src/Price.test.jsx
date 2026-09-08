import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Price from "./components/ui/Price";


const mockBooks = [
  {
    id: 1,
    title: "TestSalePrice",
    rating: 4,
    originalPrice: 20,
    salePrice: 15,
    url: "test-image.jpg",
  },
];

test("find the sale price, and display the information", () => {
  render(
    <MemoryRouter initialEntries={["/books/1"]}>
      <Routes>
        <Route
          path="/books/:id"
          element={
            <Price salePrice={mockBooks[0].salePrice} originalPrice={mockBooks[0].originalPrice} />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("TestSalePrice")).toBeInTheDocument();
});


