import React, { useState } from "react";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1545241047-6083a3684587",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 20,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
  },
  {
    id: 4,
    name: "Cactus",
    price: 18,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
  },
  {
    id: 5,
    name: "Rose Plant",
    price: 35,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
  },
  {
    id: 6,
    name: "Orchid",
    price: 40,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551",
  },
];

function ProductList() {
  const [cartCount, setCartCount] =
    useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Flowering Plants",
  ];

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          backgroundColor: "green",
          padding: "15px",
          color: "white",
        }}
      >
        <h2>Paradise Nursery</h2>

        <h3>Cart Items: {cartCount}</h3>
      </nav>

      <h1>Our Plants</h1>

      {categories.map((category) => (
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
            {plants
              .filter(
                (plant) =>
                  plant.category ===
                  category
              )
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border:
                      "1px solid white",
                    padding: "15px",
                    width: "220px",
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="200"
                    height="200"
                  />

                  <h3>{plant.name}</h3>

                  <p>
                    Price: $
                    {plant.price}
                  </p>

                  <button
                    onClick={addToCart}
                  >
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;