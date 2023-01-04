import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ShoppingCart from "./ShoppingCart";

describe("Shopping Cart", () => {
  const showModal = true;
  const handleModalClick = jest.fn();
  const addToCart = jest.fn();
  const handleQuantityUpdate = jest.fn();
  const removeFromCart = jest.fn();
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
  describe("Rendering", () => {
    test("Renders the modal background element", () => {
      render(
        <ShoppingCart
          showModal={showModal}
          handleModalClick={handleModalClick}
          addToCart={addToCart}
          handleQuantityUpdate={handleQuantityUpdate}
          removeFromCart={removeFromCart}
          shoppingCart={[]}
        />
      );
      const background = screen.getByTestId("modal-background");
      expect(background).toBeInTheDocument();
    });

    test("Renders the header and close button", () => {
      render(
        <ShoppingCart
          showModal={showModal}
          handleModalClick={handleModalClick}
          addToCart={addToCart}
          handleQuantityUpdate={handleQuantityUpdate}
          removeFromCart={removeFromCart}
          shoppingCart={[]}
        />
      );
      expect(screen.getByText("Your Shopping Cart")).toBeInTheDocument();
      expect(screen.getByLabelText("Close Shopping Cart")).toBeInTheDocument();
    });

    test("If cart is empty, renders the 'empty cart' message and the close button", () => {
      render(
        <ShoppingCart
          showModal={showModal}
          handleModalClick={handleModalClick}
          addToCart={addToCart}
          handleQuantityUpdate={handleQuantityUpdate}
          removeFromCart={removeFromCart}
          shoppingCart={[]}
        />
      );
      expect(screen.getByTestId("empty-message")).toBeInTheDocument();
      expect(screen.getByTestId("close-button")).toBeInTheDocument();
    });

    test("Renders the shopping cart items", () => {
      render(
        <ShoppingCart
          showModal={showModal}
          handleModalClick={handleModalClick}
          addToCart={addToCart}
          handleQuantityUpdate={handleQuantityUpdate}
          removeFromCart={removeFromCart}
          shoppingCart={shoppingCart}
        />
      );
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });

    test("Renders the total price of the items in the shopping cart", () => {
      render(
        <ShoppingCart
          showModal={showModal}
          handleModalClick={handleModalClick}
          addToCart={addToCart}
          handleQuantityUpdate={handleQuantityUpdate}
          removeFromCart={removeFromCart}
          shoppingCart={shoppingCart}
        />
      );
      expect(screen.getByTestId("cart-total")).toHaveTextContent(
        "Total: $49.97"
      );
    });

    test("Renders the checkout button", () => {
      render(
        <ShoppingCart
          showModal={showModal}
          handleModalClick={handleModalClick}
          addToCart={addToCart}
          handleQuantityUpdate={handleQuantityUpdate}
          removeFromCart={removeFromCart}
          shoppingCart={shoppingCart}
        />
      );
      expect(screen.getByTestId("checkout-button")).toBeInTheDocument();
    });

    test("If cart is empty, does not render the checkout button", () => {
      render(
        <ShoppingCart
          showModal={showModal}
          handleModalClick={handleModalClick}
          addToCart={addToCart}
          handleQuantityUpdate={handleQuantityUpdate}
          removeFromCart={removeFromCart}
          shoppingCart={[]}
        />
      );
      expect(screen.queryByTestId("checkout-button")).toBeNull();
    });
  });

  describe("Functionality", () => {
    test("Clicking on the background element closes the modal", () => {
      render(
        <ShoppingCart
          showModal={showModal}
          handleModalClick={handleModalClick}
          addToCart={addToCart}
          handleQuantityUpdate={handleQuantityUpdate}
          removeFromCart={removeFromCart}
          shoppingCart={[]}
        />
      );
      const background = screen.getByTestId("modal-background");
      userEvent.click(background);
      expect(handleModalClick).toHaveBeenCalled();
    });

    test("Clicking on the close button closes the modal", () => {
      render(
        <ShoppingCart
          showModal={showModal}
          handleModalClick={handleModalClick}
          addToCart={addToCart}
          handleQuantityUpdate={handleQuantityUpdate}
          removeFromCart={removeFromCart}
          shoppingCart={[]}
        />
      );
      const closeButton = screen.getByLabelText("Close Shopping Cart");
      userEvent.click(closeButton);
      expect(handleModalClick).toHaveBeenCalled();
    });

    test("If cart is empty, the bottom close button closes the modal", () => {
      render(
        <ShoppingCart
          showModal={showModal}
          handleModalClick={handleModalClick}
          addToCart={addToCart}
          handleQuantityUpdate={handleQuantityUpdate}
          removeFromCart={removeFromCart}
          shoppingCart={[]}
        />
      );
      const closeButton = screen.getByTestId("close-button");
      userEvent.click(closeButton);
      expect(handleModalClick).toHaveBeenCalled();
    });

    test("Clicking on the checkout button calls the 'checkout' function", () => {
      window.alert = jest.fn();
      render(
        <ShoppingCart
          showModal={showModal}
          handleModalClick={handleModalClick}
          addToCart={addToCart}
          handleQuantityUpdate={handleQuantityUpdate}
          removeFromCart={removeFromCart}
          shoppingCart={shoppingCart}
        />
      );
      const checkoutButton = screen.getByTestId("checkout-button");
      userEvent.click(checkoutButton);
      expect(window.alert).toHaveBeenCalled();
    });
  });
});
