import React from 'react'
import './cart.css'
import Button from '../Button/Button'
function cart({cartItems, onCheckout}) {

    const totalPrice = cartItems.reduce((acc, food) => acc + food.price * food.qty, 0)
  return (
    <div className='cart__container'>
       
        <br /> <span className=''>Total Price :${totalPrice.toFixed(2)}</span>
      <Button title={`${cartItems.length==0 ? 'Order!' : 'Pay'}`}
      type={'checkout'}
      disable={cartItems.length === 0 ? true: false}
      onClick={onCheckout}/>
    </div>
  )
}

export default cart
