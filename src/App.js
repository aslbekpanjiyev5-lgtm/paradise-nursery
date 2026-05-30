import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  return (
    <div className="App">
      <h1>Paradise Nursery</h1>

      <button>Get Started</button>

      <AboutUs />
      <ProductList />
      <CartItem />
    </div>
  );
}

export default App;
