import React from "react";

function ShoppingItems({name, price, handleClick}) {
  return (
  <div className="item" onClick={handleClick}>
    {name}- ${price}
  </div>
  )
}

export default ShoppingItems