import './App.css';
import Card from './Components/Card/card'
import Cart from './Components/Cart/cart'
import Button from './Components/Button/Button'
import React, { useState,useEffect } from 'react';

const {getData} = require('./db/db.js')

const tele = window.Telegram.WebApp
const foods = getData()
function App() {
 
 

  const [cartItems, setCartItems] = useState([])
  useEffect(()=>{
    tele.ready()
  })
  
const onAdd = (food)=>{
  const exist = cartItems.find((x) => x.id === food.id)
  if(exist){
    setCartItems(
      cartItems.map((x) =>
        x.id === food.id ? {...exist, qty: exist.qty + 1} : x
      )
    )
  }else{
    setCartItems([...cartItems, {...food, qty: 1}])
  }
}
const onRemove = (food)=>{
  const exist = cartItems.find((x) => x.id === food.id)
  if(exist.qty === 1){
    setCartItems(cartItems.filter((x) => x.id !== food.id))
  }else{
    setCartItems(
      cartItems.map((x) =>
        x.id === food.id ? {...exist, qty: exist.qty - 1} : x
      )
    )
  }
}
const onCheckout = ()=>{
  tele.MainButton.text = 'Pay'
  tele.MainButton.show()
}
 






  return (
    
    <>
    <h1 className='heading'>Order</h1>
    <Cart cartItems={cartItems} onCheckout={onCheckout} />
   <div className="cards__container">{foods.map(food=>{

    return <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} /> 
   
   })} </div>
   
   </>
  );
}

export default App;
