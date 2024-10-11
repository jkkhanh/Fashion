import React, { useContext, useEffect, useState } from 'react'
import { ShopConText } from '../context/ShopContext'
import ProductItem from './ProductItem'
import AOS from 'aos';
import 'aos/dist/aos.css';


const RelatedProducts = ({category,subCategory}) => {

    const {products} = useContext(ShopConText)
    const [related,setRelated] = useState([])

    useEffect(() => {

        if(products.length > 0) {
            let productRela = products.slice();
            productRela = productRela.filter((item) => category === item.category)
            productRela = productRela.filter((item) => subCategory === item.subCategory)

            setRelated(productRela.slice(0,5))
        }
    },[products])

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <p className='text-blue-600 font-semibold'>SẢN PHẨM LIÊN QUAN </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center'>
            {
                related.map((item,index) => (
                    <ProductItem key={index} id = {item._id} image = {item.image} name = {item.name} price = {item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProducts