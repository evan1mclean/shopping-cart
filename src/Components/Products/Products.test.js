import React from "react";
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import "@testing-library/jest-dom";
import Products from "./Products";

describe("Products Page", () => {
  const data = [
    {
      id: 1,
      image: 'image1.jpg',
      title: 'Product 1',
      price: 19.99,
    },
    {
      id: 2,
      image: 'image2.jpg',
      title: 'Product 2',
      price: 24.99,
    },
  ];
  
  test("Renders a loading message and spinner while data is loading", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve();
    })
    render(<Products />);
    const loading = await screen.findByText("Loading");
    const spinner = await screen.findByTestId("spinner");
    expect(loading).toBeInTheDocument();
    expect(spinner).toBeInTheDocument();
    //test that the elements disappear after data is loaded
    await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
    expect(spinner).not.toBeInTheDocument();
  });

  test("Renders an error message if there is an error fetching data", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() => Promise.reject(new Error()));
    render(<Products />);
    const errorMessage = await screen.findByText("Uh oh! Something went wrong...")
    const refreshButton = await screen.findByTestId("refresh");
    expect(errorMessage).toBeInTheDocument();
    expect(refreshButton).toBeInTheDocument();
  })

  test("Renders products if data is successfully fetched", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(data)
      })
    })
    render(<Products />)
    const product1 = await screen.findByText("Product 1");
    const product2 = await screen.findByText("Product 2");
    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
  })
});
