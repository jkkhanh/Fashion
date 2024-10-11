import React from 'react'
import girl from '../assets/girl_news.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const NewsLetter = () => {
  return (
    <div className='bg-blue-500 w-full h-[300px] py-14 px-5 flex items-center my-9'>
        <div className='w-1/2 h-full pl-10 '>
            <h2 className='text-3xl pl-2 font-semibold' data-aos = 'zoom-in' data-aos-duration = '1200' data-aos-delay = '300'>Đăng kí để được nhận ưu đãi giảm giá</h2>
            <p className='pl-2 my-3 font-light text-white italic' data-aos = 'zoom-out' data-aos-duration = '1200' data-aos-delay = '300'>Nhanh tay nhập email ở bên dưới để đăng kí và nhận nhiều ưu đãi cũng như các phần quà hấp dẫn từ shop chúng tôi</p>
            <div className='relative' data-aos = 'zoom-out-down' data-aos-duration = '1200' data-aos-delay='300'>
                <input type='email' placeholder='Nhập E-mail ở đây...' className='px-3 mt-3 py-2 rounded-full w-3/4 h-12 outline-none'/>
                <button type='submit' className='absolute px-8 py-[10px] bg-black text-white rounded-full top-3 right-[165px] text-lg'>Đăng kí</button>
            </div>
        </div>
        <div className='flex items-center justify-center ml-auto '>
            <img src={girl} alt='' className='w-[350px] drop-shadow-[0_0_20px_rgba(255,255,255,1)]' />
        </div>
    </div>
  )
}

export default NewsLetter