import React, { useState } from "react";

function CartItem() {
  const [quantity, setQuantity] = useState(1);

  const unitPrice = 25;

  const totalCost = unitPrice * quantity;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid white",
        marginTop: "30px",
      }}
    >
      <h1>Shopping Cart</h1>

      <img
        src="https://images.unsplash.com/photo-1545241047-6083a3684587"
        alt="Snake Plant"
        width="200"
      />

      <h2>Snake Plant</h2>

      <p>Unit Price: ${unitPrice}</p>

      <p>Quantity: {quantity}</p>

      <p>Total Cost: ${totalCost}</p>

      <div>
        <button onClick={decreaseQuantity}>
          -
        </button>

        <button onClick={increaseQuantity}>
          +
        </button>
      </div>

      <br />

      <button>
        Delete Item
      </button>

      <h2>
        Cart Total: ${totalCost}
      </h2>

      <button>
        Continue Shopping
      </button>

      <button
        style={{
          marginLeft: "10px",
        }}
      >
        Checkout
      </button>
    </div>
  );
}

export default CartItem;