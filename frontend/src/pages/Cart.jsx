import React, { useContext, useEffect, useState } from 'react'
import { ShopConText } from '../context/ShopContext'
import remove from '../assets/Icon Image/remove-icon.png'
import { Link } from 'react-router-dom'
import CartTotal from '../components/CartTotal'

const Cart = () => {

  const {products, formatPrice, cartItem, updateQuantity, navigate} = useContext(ShopConText)

  const [cartData, setCartData] = useState([])

  useEffect(() => {

    if (products.length > 0) {
      const tempData = [];
      for(const items in cartItem){
        for(const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItem[items][item]
            })
          }
        }
      }
      setCartData(tempData)
    }


  },[cartItem,products])

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3 '>
        <p className='font-semibold text-blue-600'>GIỎ HÀNG CỦA BẠN </p>
      </div>
      <div className='grid grid-cols-[4fr_0.6fr_0.5fr] sm:grid-cols-[4fr_1.9fr_0.6fr] font-semibold text-lg mb-4'>
        <p>Sản phẩm</p>
        <p>Số lượng</p>
        <p>Xóa sản phẩm</p>
      </div>
      <div>
        {
          cartData.map((item,index) => {
            const productData = products.find((product) => product._id === item._id)
            return (
              
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img src={productData.image[0]} alt='' className='w-14 sm:w-16'/>
                  <div>
                    <Link to={`/product/${item._id}`} className='text-xs sm:text-base font-medium text-black hover:text-blue-600'>{productData.name}</Link>
                    <div className='flex items-center gap-5 mt-2'>
                      <p className='font-bold'>Giá tiền: <b className='font-medium pl-1 text-yellow-700'>{formatPrice(productData.price)}</b></p>
                    </div>
                    <p className='font-bold'>Kích cỡ: <b className='font-medium pl-2 text-red-600'>{item.size}</b></p>
                  </div>
                </div>
                <input onChange={(e) => e.target.value === '' || e.target.value ==='0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))} type='number' min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-1 py-2 '/>
                <img onClick={() => updateQuantity(item._id,item.size,0)} src={remove} alt='' className='cursor-pointer w-10' />
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-start my-20'>
        <div className='w-full sm:w-[500px]'>
          <CartTotal />
          <div className='w-full text-center mt-10'>
            <button onClick={() => navigate('/place-order')} className='bg-blue-500 w-full h-12 text-white text-lg font-semibold hover:bg-blue-700'>TIẾP TỤC THANH TOÁN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart