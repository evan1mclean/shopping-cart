import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

describe("Home", () => {
  test("Renders home page", () => {
    render(<Home />, {wrapper: BrowserRouter})
    expect(screen).toMatchSnapshot();
  })

  test("Renders home page header", () => {
    render(<Home />, {wrapper: BrowserRouter})
    expect(screen.getByTestId("home-header")).toBeInTheDocument();
  })

  test("Renders store description", () => {
    render(<Home />, {wrapper: BrowserRouter})
    expect(screen.getByTestId("store-description")).toBeInTheDocument();
  })

  test("Renders shop now button", () => {
    render(<Home />, {wrapper: BrowserRouter})
    expect(screen.getByTestId("shop-now-button")).toBeInTheDocument();
  })
})