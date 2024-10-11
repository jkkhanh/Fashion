import React, { useContext } from 'react'
import { ShopConText } from '../context/ShopContext'

const CartTotal = () => {

    const {formatPrice, delivery_fee, getCartAmount} = useContext(ShopConText)

  return (
    <div className='w-full'>
        <div className='text-2xl mb-6 font-semibold'>
            <p>HÓA ĐƠN</p>
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p className='font-semibold'>Tổng cộng: </p>
                <p className='text-blue-600 font-semibold'>{formatPrice(getCartAmount())}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p className='font-semibold'>Tiền ship:</p>
                <p className='font-semibold text-yellow-500'>{formatPrice(delivery_fee)}</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <b>Số tiền thanh toán:</b>
                <b>{formatPrice(getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee)}</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal