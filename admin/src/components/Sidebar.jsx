import React from 'react'
import { NavLink } from 'react-router-dom'
import add_icon from '../assets/icon/add-product-icon.png'
import list_icon from '../assets/icon/list-icon.png'
import order_icon from '../assets/icon/order-icon.png'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 border-blue-800 bg-blue-500'>
        <div className='flex flex-col gap-8 pt-6 pl-[13%] text-[16px]'>
            <NavLink to = "/add" className='flex items-center gap-3 border border-cyan-400 border-r-0 px-3 py-2 bg-white'>
                <img src ={add_icon} alt='' className='w-12 h-12'/>
                <p className='hidden md:block font-semibold'>Thêm sản phẩm</p>
            </NavLink>

            <NavLink to = "/list" className='flex items-center gap-3 border border-cyan-400 border-r-0 px-3 py-2 bg-white'>
                <img src ={list_icon} alt='' className='w-12 h-12'/>
                <p className='hidden md:block font-semibold'>Danh sách sản phẩm</p>
            </NavLink>

            <NavLink to = "/orders" className='flex items-center gap-3 border border-cyan-400 border-r-0 px-3 py-2 bg-white'>
                <img src ={order_icon} alt='' className='w-12 h-12'/>
                <p className='hidden md:block font-semibold'>Đơn đặt hàng</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar