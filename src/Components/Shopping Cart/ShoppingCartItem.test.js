import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ShoppingCartItem from "./ShoppingCartItem";

describe("Shopping Cart Item", () => {
  const product = {
    id: "1",
    image: "/path/to/image.jpg",
    title: "Product title",
    price: 9.99,
    quantity: 2,
  };

  const addToCart = jest.fn();
  const removeFromCart = jest.fn();
  const handleQuantityUpdate = jest.fn();

  describe("Rendering", () => {
    test("Correctly renders item image", () => {
      render(
        <ShoppingCartItem
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          handleQuantityUpdate={handleQuantityUpdate}
        />
      );
      expect(screen.getByAltText(product.title)).toBeInTheDocument();
    });

    test("Correctly renders item title", () => {
      render(
        <ShoppingCartItem
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          handleQuantityUpdate={handleQuantityUpdate}
        />
      );
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });

    test("Correctly renders item price", () => {
      render(
        <ShoppingCartItem
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          handleQuantityUpdate={handleQuantityUpdate}
        />
      );
      expect(screen.getByText("$9.99")).toBeInTheDocument();
    });

    test("Correctly renders add/remove buttons", () => {
      render(
        <ShoppingCartItem
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          handleQuantityUpdate={handleQuantityUpdate}
        />
      );
      expect(screen.getByLabelText("Remove Item")).toBeInTheDocument();
      expect(screen.getByLabelText("Add Item")).toBeInTheDocument();
    });

    test("Correctly renders quantity", () => {
      render(
        <ShoppingCartItem
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          handleQuantityUpdate={handleQuantityUpdate}
        />
      );
      expect(screen.getByTestId("quantity-input")).toHaveValue(
        product.quantity
      );
    });
  });

  describe("Functionality", () => {
    test("Remove item button works correctly", () => {
      render(
        <ShoppingCartItem
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          handleQuantityUpdate={handleQuantityUpdate}
        />
      );

      const removeButton = screen.getByLabelText("Remove Item");
      userEvent.click(removeButton);
      expect(removeFromCart).toHaveBeenCalledWith(product);
    });

    test("Add item button works correctly", () => {
      render(
        <ShoppingCartItem
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          handleQuantityUpdate={handleQuantityUpdate}
        />
      );

      const addButton = screen.getByLabelText("Add Item");
      userEvent.click(addButton);
      expect(addToCart).toHaveBeenCalledWith(product);
    });

    test("Quantity Input works correctly", () => {
      render(
        <ShoppingCartItem
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          handleQuantityUpdate={handleQuantityUpdate}
        />
      );

      const quantityInput = screen.getByTestId("quantity-input");
      userEvent.clear(quantityInput);
      userEvent.type(quantityInput, "3");
      expect(handleQuantityUpdate).toHaveBeenCalledWith(product.id, 3);
    });
  });
});
