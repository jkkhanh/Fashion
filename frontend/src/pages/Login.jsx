import React, { useState, useContext, useEffect } from 'react'
import tt1 from '../assets/tt1.png'
import { ShopConText } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify';


const Login = () => {

  const [currentState, setCurrentstate] = useState('Đăng nhập')
  const {token, setToken, navigate, backendUrl} = useContext(ShopConText)

  const [name,setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      if (currentState === 'Đăng kí') {
        const response = await axios.post(backendUrl + '/api/user/register', {name,email,password})
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }
        else {
          toast.error(response.data.message)
        }
      }
      else {
        const response = await axios.post(backendUrl + '/api/user/login', {email, password})
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success("Đăng nhập thành công")
        }
        else {
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  },[token])

  return (
    <div className='w-full h-[110vh] flex justify-center items-center pb-10 bg-blue-400 border-t relative'>
      <img src={tt1} alt='' className='absolute left-0'/>
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center justify-center w-[90%] sm:max-w-[450px] h-[400px] m-auto gap-4 text-black  bg-gray-500 p-5 rounded-lg backdrop-blur-md bg-opacity-30'>
        <div className='inline-flex items-center gap-2 mb-2'>
          <p className='text-3xl font-semibold'>{currentState}</p>
        </div>
        {
          currentState === 'Đăng nhập' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type='text' className='w-full px-3 py-2 border border-black outline-none' placeholder='Họ và tên...'required/>
        }  
        <input onChange={(e) => setEmail(e.target.value)} value={email}  type='email' className='w-full px-3 py-2 border border-black outline-none' placeholder='E-mail...' required/>
        <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' className='w-full px-3 py-2 border border-black outline-none' placeholder='Nhập mật khẩu...' required/>
        <div className='w-full flex justify-between mt-[-8px]'>
          <p className='text-sm font-semibold hover:text-blue-600 cursor-pointer'>Quên mật khẩu?</p>
          {
            currentState === 'Đăng nhập' ? <p onClick={() => setCurrentstate('Đăng kí')} className='cursor-pointer text-sm font-semibold text-blue-600'>Tạo tài khoản mới</p> : <p onClick={() => setCurrentstate('Đăng nhập')} className='cursor-pointer text-sm font-semibold text-blue-600'><span className='text-black'>Bạn đã có tài khoản? </span>Đăng nhập</p>
          }
        </div>
        <button className='bg-blue-500 w-[70%] h-11 text-white font-semibold mt-4 hover:bg-blue-600'>{currentState === 'Đăng nhập' ? 'Đăng nhập' : 'Đăng kí' }</button>
      </form>
    </div>
  )
}

export default Login