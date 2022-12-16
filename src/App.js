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
  };

  const handleQuantityUpdate = (id, quantity) => {
    const updatedCart = shoppingCart.map((item) => {
      if (item.id === id) {
        item.quantity = quantity;
      }
      return item;
    });
    setShoppingCart([...updatedCart]);
  };

  const removeFromCart = (product) => {
    const isInCart = shoppingCart.find((item) => item.id === product.id);
    if (isInCart.quantity > 1) {
      const updatedCart = shoppingCart.map((item) => {
        if (item.id === product.id) {
          item.quantity = item.quantity - 1;
        }
        return item;
      });
      setShoppingCart([...updatedCart]);
    } else {
      const updatedCart = shoppingCart.filter((item) => item.id !== product.id);
      setShoppingCart(updatedCart);
    }
  };

  const addToCart = (product) => {
    const isInCart = shoppingCart.find((item) => item.id === product.id);
    if (isInCart) {
      const updatedCart = shoppingCart.map((item) => {
        if (item.id === product.id) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
      setShoppingCart([...updatedCart]);
    } else {
      setShoppingCart([...shoppingCart, product]);
    }
  };

  return (
    <div className="App h-screen flex flex-col bg-gradient-to-tr from-sky-200 overflow-scroll">
      <BrowserRouter>
        <Header handleModalClick={handleModalClick} shoppingCart={shoppingCart}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />
        </Routes>
      </BrowserRouter>
      <ShoppingCart
        showModal={showModal}
        handleModalClick={handleModalClick}
        shoppingCart={shoppingCart}
        addToCart={addToCart}
        handleQuantityUpdate={handleQuantityUpdate}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
