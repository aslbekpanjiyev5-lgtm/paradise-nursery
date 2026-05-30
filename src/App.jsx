import React, { useState } from "react";
import "./App.css";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  const [showProducts, setShowProducts] =
    useState(false);

  const handleGetStartedClick = () => {
    setShowProducts(true);
  };

  return (
    <div className="App">
      <h1>Paradise Nursery</h1>

      {!showProducts ? (
        <div>
          <button
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>

          <AboutUs />
        </div>
      ) : (
        <div>
          <ProductList />

          <CartItem />
        </div>
      )}
    </div>
  );
}

export default App;