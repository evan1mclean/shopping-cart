import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ProductCard from "./ProductCard";

describe("Product Card", () => {
  const id = "1";
  const image = "/path/to/image.jpg";
  const title = "Product title";
  const price = 9.99;
  const addToCart = jest.fn();
  
  describe("Rendering", () => {

    test("Correctly renders product card image", () => {
      render(
        <ProductCard
          id={id}
          image={image}
          title={title}
          price={price}
          addToCart={addToCart}
        />
      );
      expect(screen.getByAltText(title)).toBeInTheDocument();
    });
  
    test("Correctly renders the product title", () => {
      render(
        <ProductCard
          id={id}
          image={image}
          title={title}
          price={price}
          addToCart={addToCart}
        />
      );
      expect(screen.getByText(title)).toBeInTheDocument();
    })
  
    test("Correctly renders the price", () => {
      render(
        <ProductCard
          id={id}
          image={image}
          title={title}
          price={price}
          addToCart={addToCart}
        />
      );
      expect(screen.getByText("$9.99")).toBeInTheDocument();
    })
  
    test("Correctly renders add to cart button", () => {
      render(
        <ProductCard
          id={id}
          image={image}
          title={title}
          price={price}
          addToCart={addToCart}
        />
      );
      expect(screen.getByRole("button").textContent).toMatch("Add To Cart");
    })
  })

  describe("Functionality", () => {

    test("Calls addToCart when button is clicked", () => {
      render(
        <ProductCard
          id={id}
          image={image}
          title={title}
          price={price}
          addToCart={addToCart}
        />
      );
      const button = screen.getByRole("button", {name: "Add To Cart"});
      userEvent.click(button);
      expect(addToCart).toHaveBeenCalled();
    })
  })
});
