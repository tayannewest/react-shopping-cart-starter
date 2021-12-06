// import useState
import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import ShoppingItems from './components/ShoppingItems';
import productsArr from './products';

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

const allThings = productsArr.map((element, index) => {
  return (
    <ShoppingItems
    name={element.name}
    price={element.price}
    key={index}
    handleClick={() => addToCart(element)}
    />
  )
})


const myThings = cart.map((element, index) => {
  return (
    <ShoppingItems
    name={element.name}
    price={element.price}
    key={index}
    handleClick={() => removeFromCart(index)}
    />
  )
})


// create an addToCart function that takes in a prodcut as a param using the ...spread operator add the prodcut to the cart array

function addToCart(product) {
  console.log(product)
  setCart([...cart, product])
}

// create a removeFromCart function that takes in an index as a param and using array.filter remove create a new array where the item is removed

function removeFromCart(index) {
  let newCart = cart.filter((item, idx) => {
    return index !== idx
  })
  setCart(newCart)
}


return (
  <div className="App">
    <h1>Big Time Shopping</h1>
    <Form />
    <div className="products">
      <AllTheThings 
      things = {allThings}
      />
      <MyShoppingCart 
      myThings={myThings} />
    </div>
  </div>
);
}
