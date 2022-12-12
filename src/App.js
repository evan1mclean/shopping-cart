import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Products from "./Components/Products/Products";
import ShoppingCart from "./Components/Shopping Cart/ShoppingCart";

function App() {
  return (
    <div className="App h-screen flex flex-col bg-gradient-to-tr from-sky-200 overflow-scroll">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
      <ShoppingCart />
    </div>
  );
}

export default App;
