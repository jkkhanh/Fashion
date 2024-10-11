import React from 'react'
import avt from '../assets/pexels-frendsmans-1926769.jpg'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <div>
      <p className='text-center text-2xl mt-3 font-semibold'>LIÊN HỆ VỚI CHÚNG TÔI</p>
      <div className='flex items-center justify-center py-20 gap-20'>
        <img src = {avt} alt='' className='w-full md:max-w-[400px] h-[500px]'/>
        <div className='flex flex-col gap-10 '>
          <b className='text-lg'>- Địa chỉ cửa hàng:</b>
          <div className='pl-4'>
            <p className='text-base font-medium'>19/8 Trần Văn Ơn, phường Nguyễn Văn Cừ</p>
            <p className='text-base font-medium'>thành phố Quy Nhơn, tỉnh Bình Định</p>
          </div>
          <div>
            <p className='text-lg font-semibold'><b>- Số điện thoại: </b> 1900 8098 </p>
            <p className='text-lg font-semibold'><b className='text-black'>- E-mail: </b> contact@cdktcnqn.com</p>
          </div>
          <div>
            <p className='font-semibold text-lg'><b className='text-blue-600'>- Facebook: </b>Phạm Thiên Chiến</p>
            <p className='font-semibold text-lg'><b className='text-sky-500'>- Zalo: </b> Kh</p>
            <p className='font-semibold text-lg'><b className='text-red-400'>- Instagram: </b>dev_fr_20</p>
          </div>
          <Link to = '/'><button className='bg-green-500 w-[60%] h-11 text-white font-semibold hover:bg-green-700'>SHOP</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Contact