import React, { useState } from "react";

// Test data - Do not modify
const items = [
  { id: 1, name: "T-shirt", price: 20, onSale: true },
  { id: 2, name: "Jeans", price: 50, onSale: false },
  { id: 3, name: "Socks", price: 5, onSale: true },
  { id: 4, name: "Hat", price: 15, onSale: false },
  { id: 5, name: "Shoes", price: 65, onSale: true },
];

//functions

//item
function Item(props) {
  //set default value
  const { name = "N/A", price = 0, onSale = false } = props;
  //item xml
  return (
    <div className="col-lg-4">
      <div className="card m-1" style={{ width: "18rem," }}>
        <div className="card-body">
          <h5 className="card-title">
            {onSale ? (
              <div class="bg-success rounded text-center">On sale</div>
            ) : (
              <div class="text-center">Not on sale</div>
            )}
          </h5>
          <h6 className="card-subtitle mb-2"> {name}</h6>
          <p className="card-text">${price}</p>
        </div>
      </div>
    </div>
  );
}

//list
function ItemList(props) {
  const { list } = props;
  return (
    <div className="row">
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

//app
function App() {
  //keeps track if showing sale items
  const [showSaleItems, setShowSaleItems] = useState(false);
  //if true, show sale items, if false, show items
  const filteredItems = showSaleItems
    ? items.filter((item) => item.onSale)
    : items;

  //toggle button
  const toggleSaleItems = () => {
    setShowSaleItems((prevState) => !prevState);
  };

  /*
  prevState is a callback function parameter, represents current value of showSaleItems state.

  • function toggleSaleItems toggles value of showSaleItems between true and false.
	• arrow function prevState => !prevState ensures that new state is always opposite of current state, enabling toggling behavior.
  
  •	!prevState used to toggle state:
  •	If prevState is true, !prevState evaluates to false.
  •	If prevState is false, !prevState evaluates to true.
  */

  return (
    <div className="container">
      <div className="card m-5">
        <div className="m-1">
          <button
            onClick={toggleSaleItems}
            className="btn btn-outline-dark mb-3"
          >
            {showSaleItems ? "Show All Items" : "Show Sale Items Only"}
          </button>
        </div>
        <div className="row">
          {filteredItems.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
