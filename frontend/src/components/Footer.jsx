import React from 'react'
import logo_ft from '../assets/logo_fashion.png'
import momo from '../assets/momo.jpg'
import zalopay from '../assets/zalopay.jpg'
import onepay from '../assets/onepay.jpg'
import vnpay from '../assets/vnpay.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'




const Footer = () => {
  return (

        <div className='flex flex-col mx-auto max-w-full'>
            <div className='flex flex-col sm:grid grid-cols-[3.5fr_3.5fr_2fr] gap-14 my-10 text-sm'>
                <div>
                    <img  src = {logo_ft} alt='' className='mb-3 w-40'/>     
                    <p className='text-white text-2xl font-semibold'>Fashion Shop</p>
                    <p className='text-white font-medium text-base'>Thanh toán qua các dịch vụ: </p>
                    <ul className='flex items-center  gap-2 mt-2 pl-2 cursor-pointer'>
                        <li className='outline-none'>
                            <img src = {momo} alt='' className='w-11 border-2 rounded-lg hover:scale-110'/>
                        </li>
                        <li>
                            <img src = {zalopay} alt='' className='w-11  border-2 rounded-lg hover:scale-110'/>
                        </li>
                        <li>
                            <img src = {onepay} alt='' className='w-11  border-2 rounded-lg hover:scale-110'/>
                        </li>
                        <li>
                            <img src = {vnpay} alt='' className='w-11  border-2 rounded-lg hover:scale-110'/>
                        </li>
                    </ul> 
                </div>

                <div className='cursor-pointer'>
                    <p className='text-2xl text-white font-medium mb-3'>CÔNG TY</p>
                    <ul className='flex flex-col pl-2 text-base font-medium gap-2 text-gray-600'>
                        <Link to= '/'><li>Trang chủ</li></Link>
                        <Link to = '/about'><li>Về chúng tôi</li></Link>
                        <Link to= '/contact'><li>Liên hệ</li></Link>
                        <Link><li>Chính sách</li></Link>
                    </ul>
                </div>

                <div className='pr-3 cursor-pointer'>
                    <p className='text-2xl text-white font-medium mb-3'>HỖ TRỢ</p>
                    <ul className='flex flex-col  text-base font-medium pl-2 gap-2 text-gray-600'>
                        <li>E-mail: <b className='text-white'>contact@cdktcnqn.com</b></li>
                        <li>Phone: <b className='text-white'>035.729.6877</b></li>
                    </ul>
                </div>
            </div>
            <hr/> 
            <div >
                <p className='text-center py-5 text-xl'>Copyright 2024 Devtoanbug</p>
            </div>
        </div>
  )
}

export default Footer