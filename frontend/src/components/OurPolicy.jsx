import React from 'react'
import ship from '../assets/Icon Image/shipping.png'
import quantity from '../assets/Icon Image/quanlity.png'
import support from '../assets/Icon Image/support_icon.png'
import 'aos/dist/aos.css';
import ProductItem from './ProductItem';



const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-24 text-xs sm:text-sm md:text-base' data-aos = 'zoom-in' data-aos-duration="1200">
        <div>
            <img src = {ship} className='w-14 m-auto mb-4 ' alt=''/>
            <p className='text-black font-semibold text-xl '>Chính sách giao hàng</p>
            <p className='text-gray-500'>Giao hàng tận nơi, chuyển hàng nhẹ nhàng, an tâm khi đặt</p>
        </div>

        <div>
            <img src = {quantity} className='w-14 m-auto mb-4 ' alt=''/>
            <p className='text-black font-semibold text-xl '>Chính sách đổi trả</p>
            <p className='text-gray-500'>Đổi trả hàng trong vòng 14 ngày nếu sản phẩm bị lỗi hoặc hoàn lại tiền</p>
        </div>

        <div>
            <img src = {support} className='w-14 m-auto mb-4 ' alt=''/>
            <p className='text-black font-semibold text-xl '>Hỗ trợ 24/7</p>
            <p className='text-gray-500'>Hỗ trợ mọi thắc mắc liên quan đến sản phẩm</p>
        </div>
    </div>
  )
}

export default OurPolicy