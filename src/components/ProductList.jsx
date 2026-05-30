import React, { useState } from "react";

const plantData = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1545241047-6083a3684587",
    category: "Indoor Plants",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    category: "Indoor Plants",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
    category: "Succulents",
  },
  {
    id: 4,
    name: "Cactus",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
    category: "Succulents",
  },
  {
    id: 5,
    name: "Rose Plant",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
    category: "Flowering Plants",
  },
  {
    id: 6,
    name: "Orchid",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551",
    category: "Flowering Plants",
  },
];

function ProductList() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "green",
        }}
      >
        <h2>Paradise Nursery</h2>

        <div>
          🛒 Cart Items: {cartCount}
        </div>
      </nav>

      <h1>Plant Shop</h1>

      {["Indoor Plants", "Succulents", "Flowering Plants"].map(
        (category) => (
          <div key={category}>
            <h2>{category}</h2>

            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                marginBottom: "30px",
              }}
            >
              {plantData
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div
                    key={plant.id}
                    style={{
                      border: "1px solid white",
                      padding: "15px",
                      width: "220px",
                    }}
                  >
                    <img
                      src={plant.image}
                      alt={plant.name}
                      width="180"
                      height="180"
                    />

                    <h3>{plant.name}</h3>

                    <p>Price: ${plant.price}</p>

                    <button
                      onClick={handleAddToCart}
                    >
                      Add To Cart
                    </button>
                  </div>
                ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default ProductList;