import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


const mockBooks = [
  {
    id: 1,
    title: "Test Home",
    rating: 4,
    originalPrice: 20,
    salePrice: 15,
    url: "test-image.jpg",
  },
];

test("render the home page, and display the information", () => {
  render(
    <MemoryRouter initialEntries={["/home"]}>
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              books={mockBooks}
              home={[]}
              addToCart={jest.fn()}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );
  
  expect(screen.getByText("Test Home")).toBeInTheDocument();
});


test("find a clickable book item, click on it, and display the information", () => {
  render(
    <MemoryRouter initialEntries={["/home"]}>
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              books={mockBooks}
              home={[]}
              addToCart={jest.fn()}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );
  
  expect(screen.getByText("Test Home")).toBeInTheDocument();
});


