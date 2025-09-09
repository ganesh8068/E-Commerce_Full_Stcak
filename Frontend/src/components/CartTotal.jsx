import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Tittle from './Tittle';

const CartTotal = () => {

  const { getCartAmount, currency, delivery_fee } = useContext(ShopContext);

  return (
    <div>
      <div className='w-full'>
        <div className="text-2xl">
          <Tittle text1={"CART"} text2={"TOTALS"}/>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{currency} {getCartAmount()}.00</p>
        </div>
        
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>{currency} {delivery_fee}.00</p>
        </div>

        <hr  />
        <div className="flex justify-between font-medium text-base">
          <b>Total</b>
          <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
