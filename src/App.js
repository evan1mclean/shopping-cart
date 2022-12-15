import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Products from "./Components/Products/Products";
import ShoppingCart from "./Components/Shopping Cart/ShoppingCart";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);

  const handleModalClick = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }

  const addToCart = (product) => {
    console.log(product)
  }

  return (
    <div className="App h-screen flex flex-col bg-gradient-to-tr from-sky-200 overflow-scroll">
      <BrowserRouter>
        <Header handleModalClick={handleModalClick}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart}/>} />
        </Routes>
      </BrowserRouter>
      <ShoppingCart showModal={showModal} handleModalClick={handleModalClick} shoppingCart={shoppingCart}/>
    </div>
  );
}

export default App;
