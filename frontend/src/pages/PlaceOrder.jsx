import React, { useContext, useState } from 'react'
import CartTotal from '../components/CartTotal'
import momo from '../assets/MoMo Logo.png'
import stripe from '../assets/stripe.png'
import { ShopConText } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod')
  const {navigate, backendUrl, token, cartItem, setCartItem, getCartAmount, delivery_fee, products} = useContext(ShopConText)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    houseNumber: '',
    street: '',
    ward: '',
    city: '',
    province: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value

    setFormData(data => ({...data, [name]: value}))
  }


  const onSubmitHandler =  async (event) => {
    event.preventDefault()
    try {
      let orderItems = []
      for(const items in cartItem){
        for(const item in cartItem[items]){
          if (cartItem[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItem[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch(method) {
        //api calls for cod
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, {headers:{token}})
          // console.log(response.data);
          
          if (response.data.success) {
            setCartItem({})
            navigate('/orders')
          }
          else {
            toast.error(response.data.message)
          }
          break;

          case "momo":
            try {
                const responseMomo = await axios.post(backendUrl + '/api/order/momo', orderData, { headers: { token } });
                if (responseMomo.data.success) {
                    const { payUrl } = responseMomo.data; 
                    window.location.href = payUrl;
                } else {
                    toast.error(responseMomo.data.message); 
                }
            } catch (error) {
                toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
            }
            break;
        

        default:
            break;
      }
      
    } catch (error) {
      console.log();
      toast.error(error.message)
    }
  }


  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 border-t min-h-[80vh]'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3 w-[80%] text-center'>
          <h1 className='text-blue-600 font-semibold'>THÔNG TIN GIAO HÀNG</h1>
        </div>
        <div className='flex flex-col gap-4'>
          <input onChange={onChangeHandler} name ='fullName' value={formData.fullName} type='text' placeholder='Họ và tên...' className='border border-black rounded py-1 px-3.5 w-[80%] ' required />
          <input onChange={onChangeHandler} name ='email' value={formData.email} type='email' placeholder='E-mail...' className='border border-black rounded py-1 px-3.5 w-[80%] ' required/>
         <div className='flex gap-3 w-[80%]'>
            <input onChange={onChangeHandler} name ='houseNumber' value={formData.houseNumber} type='text' placeholder='Số nhà hoặc thôn, xã...' className='border border-black rounded py-1 px-3.5 w-full ' required/>
            <input onChange={onChangeHandler} name ='street' value={formData.street} type='text' placeholder='Tên đường, thị xã ...' className='border border-black rounded py-1 px-3.5 w-full ' required/>
         </div>
         <input onChange={onChangeHandler} name ='ward' value={formData.ward} type='text' placeholder='Phường... ' className='border border-black rounded py-1 px-3.5 w-[80%] '/>
         <input onChange={onChangeHandler} name ='city' value={formData.city} type='text' placeholder='Thành phố... ' className='border border-black rounded py-1 px-3.5 w-[80%] ' />
         <input onChange={onChangeHandler} name ='province' value={formData.province} type='text' placeholder='Tỉnh...' className='border border-black rounded py-1 px-3.5 w-[80%] ' required/>
         <input onChange={onChangeHandler} name ='phone' value={formData.phone} type='number' placeholder='Số điện thoại nhận hàng...' className='border border-black rounded py-1 px-3.5 w-[80%] ' required/>
        </div>
      </div>

      <div className='mt-8 mr-12'>
        <div className='mt-8  min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <p className='font-semibold'>MỜI BẠN CHỌN PHƯƠNG THỨC THANH TOÁN</p>
          <div className='flex gap-3 flex-col lg:flex-row mt-3'>
            <div onClick={() => setMethod('momo')} className='flex items-center gap-3 border p-2 px- cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'momo' ? 'bg-blue-600' : ''}`}></p>
              <img src={momo} alt='' className='w-14 h-5'/>
            </div>

            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-blue-600' : ''}`}></p>
              <img src={stripe} alt='' className='w-14 h-5'/>
            </div>

            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-blue-600' : ''}`}></p>
              <p className='text-báe font-semibold'> Thanh toán trực tiếp</p>
            </div>

          </div>
          <div className='w-full text-center mt-8'>
            <button type='submit'  className='bg-blue-600 w-full h-10 text-white font-semibold transition-all duration-400 hover:bg-blue-700'>ĐẶT HÀNG</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder