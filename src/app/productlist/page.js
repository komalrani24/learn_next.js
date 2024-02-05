"use client";

import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        console.log(data, "");
        setProduct(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);
  console.log(product, "gfg");
  return (
    <div>
      <h1>Product List</h1>
      {product.map((item, index) => (
        <div key={index}>
          <h3>
            Product name: {item.title}, Price: {item.price}
          </h3>
          {/* Add an <img> tag here if you have an image URL in your data */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;

export function generatedMetaData() {
  return { title: "product list", description: "product list data" };
}
