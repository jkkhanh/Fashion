import React, { useContext, useEffect, useState } from 'react'
import { ShopConText } from '../context/ShopContext'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductItem from './ProductItem';


const FsCollection = () => {

    const {products} = useContext(ShopConText);
    const [fsProducts, setFsProducts] = useState([])

    useEffect(() => {
      setFsProducts (products.slice(0,10))
    },[products])

  return (
    <div className='my-10'>
      <div className='text-center py-8'>
        <h2 className='text-[40px] font-semibold text-blue-600' data-aos = 'zoom-in' data-aos-duration="1200">Bộ sưu tập sản phẩm</h2>
        <p className='m-auto text-base font-medium text-lime-600' data-aos = 'fade-up' data-aos-duration ='1200'>Dưới đây là các sản phẩm của cửa hàng chúng tôi, chúc các bạn có một ngày mua sắm vui vẻ</p>
      </div>
      {/***rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-12 justify-items-center' data-aos = 'fade-up' data-aos-duration = " 1700" data-aos-delay="300">
        {
          fsProducts.map((item,index) => (
            <ProductItem  key={index} id = {item._id} image = {item.image} name = {item.name} price = {item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default FsCollection