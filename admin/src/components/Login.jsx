import React, { useState } from 'react'
import bgr_admin from '../assets/bgr.jpg'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post(backendUrl + '/api/user/admin' , {email,password})
            if (response.data.success) {
                setToken(response.data.token)
            }
            else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center w-full' style={{backgroundImage: `url(${bgr_admin})`, backgroundPosition: 'center'}}>
        <div className='bg-gray-500 backdrop-blur-md bg-opacity-20 shadow-md rounded-lg px-8 py-6 w-[500px] h-[400px] max-w-[500px] border border-black'>
            <h1 className='text-4xl font-semibold mb-5 text-center text-shadow-cyan text-white'>Admin Fashion</h1>
            <form className='mt-10' onSubmit={onSubmitHandler}>
                <div className='mb-3 min-w-72'>
                    <p className='text-lg font-medium mb-2'>Email:</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className=' w-full px-3 py-2 outline-none border border-black' type='email' placeholder='Nhập tài khoản email...' required/>
                </div>
                <div className='mb-3 min-w-72'>
                    <p className='text-lg font-medium mb-2'>Mật khẩu:</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className=' w-full px-3 py-2 outline-none border border-black' type='password' placeholder='Nhập mật khẩu...' required/>
                </div>
                <div className='flex items-center justify-center'>
                    <button type='submit' className='mt-5 bg-blue-500 w-[50%] px-2 py-3 rounded-full text-white text-base font-semibold hover:bg-blue-600'>Đăng nhập</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login