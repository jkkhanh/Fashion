import React from 'react'
import logo_admin from '../assets/logo_fashion.png'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between bg-blue-500'>
        <img src = {logo_admin} alt='' className='w-[max(10%,80px)] cursor-pointer'/>
        <button onClick={() => setToken('')} className='bg-white text-black border border-black font-semibold px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm duration-500 ease-in-out hover:bg-orange-400'>Đăng xuất</button>
    </div>
  )
}

export default Navbar