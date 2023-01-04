import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
  const handleModalClick = jest.fn();

  test("Header renders the store name", () => {
    render(<Header handleModalClick={handleModalClick} shoppingCart={[]} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByText("The Storefront")).toBeInTheDocument();
  });

  test("Header renders the navigation bar", () => {
    render(<Header handleModalClick={handleModalClick} shoppingCart={[]} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
  });

  test("Header renders the shopping cart button", () => {
    render(<Header handleModalClick={handleModalClick} shoppingCart={[]} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByTestId("shopping-cart-button")).toBeInTheDocument();
  });

  test("Correctly shows number of items in the shopping cart", () => {
    const shoppingCart = [
      {
        id: 1,
        image: "/path/to/image1.jpg",
        title: "Product 1",
        price: 9.99,
        quantity: 1,
      },
      {
        id: 2,
        image: "/path/to/image2.jpg",
        title: "Product 2",
        price: 19.99,
        quantity: 2,
      },
    ];

    render(
      <Header
        handleModalClick={handleModalClick}
        shoppingCart={shoppingCart}
      />,
      {
        wrapper: BrowserRouter,
      }
    );
    const quantity = screen.getByTestId("shopping-cart-quantity");
    expect(quantity).toBeInTheDocument();
    expect(quantity.textContent).toEqual("3");
  });

  test("Shows '99+' if more than 100 items are in the shopping cart", () => {
    const shoppingCart = [{ id: 1, quantity: 100 }];
    render(
      <Header
        handleModalClick={handleModalClick}
        shoppingCart={shoppingCart}
      />,
      {
        wrapper: BrowserRouter,
      }
    );
    const quantity = screen.getByTestId("shopping-cart-quantity");
    expect(quantity.textContent).toEqual("99+");
  });

  test("handleModalClick is called when shopping cart button is clicked", () => {
    render(<Header handleModalClick={handleModalClick} shoppingCart={[]} />, {
      wrapper: BrowserRouter,
    });
    const shoppingCartButton = screen.getByTestId("shopping-cart-button");
    userEvent.click(shoppingCartButton);
    expect(handleModalClick).toHaveBeenCalled();
  });
});
