import React, { useState } from "react";
import ItemList from "./components/list";
import Item from "./components/item";

// Test data - Do not modify
const items = [
  { id: 1, name: "T-shirt", price: 20, onSale: true },
  { id: 2, name: "Jeans", price: 50, onSale: false },
  { id: 3, name: "Socks", price: 5, onSale: true },
  { id: 4, name: "Hat", price: 15, onSale: false },
  { id: 5, name: "Shoes", price: 65, onSale: true },
];

function App() {
  // Your code here
  return (
    <div className="container">
      <ItemList list={items} />
    </div>
  );
}

export default App;
