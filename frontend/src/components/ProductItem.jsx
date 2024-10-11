import React, { useContext } from 'react'
import { ShopConText } from '../context/ShopContext'
import { Link } from 'react-router-dom'


const ProductItem = ({id, image,name,price}) => {
    const {formatPrice} = useContext(ShopConText)

  return (
    <Link  to = {`/product/${id}`} className='text-blue-600 cursor-pointer h-[385px] w-[225px]'>
        <div className='overflow-hidden h-[300px] w-[225px] rounded-lg'>
            <img className='hover:scale-110 transition-all ease-in-out rounded-lg h-[300px] w-[225px]'  src={image[0]} alt=''/>   
        </div>
        <div className='px-2 mt-2'>
            <p className='text-purple-500 font-medium line-clamp' title={name}>{name}</p>
            <p className='mt-1 font-semibold text-red-600'>{formatPrice(price)}</p>
        </div>
    </Link>
  )
}

export default ProductItem