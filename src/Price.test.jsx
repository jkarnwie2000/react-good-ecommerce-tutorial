import "@testing-library/jest-dom/vitest";
import { test, expect } from "vitest";

import { render, screen, fireEvent } from "@testing-library/react";
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
      <Price
        salePrice={mockBooks[0].salePrice}
        originalPrice={mockBooks[0].originalPrice}
       />
    </MemoryRouter>
  );

  expect(screen.getByText("$15.00")).toBeInTheDocument();
});


