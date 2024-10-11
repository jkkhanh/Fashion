import React, { useContext, useEffect, useState } from 'react'
import { ShopConText } from '../context/ShopContext'
import axios from 'axios'

const Orders = () => {

  const formatVietnameseDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear(); // Lấy năm
    return `${day} tháng ${month} năm ${year}`; 
  };

  const {backendUrl, token, formatPrice} = useContext(ShopConText)

  const [orderData, setOrderData] = useState([])
  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, {headers:{token}})
      // console.log(response.data);
      
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
      }
      
    } catch (error) {
      
    }
  }


  useEffect(() => {
    loadOrderData()
  },[token])

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <p className='font-semibold text-blue-600 mb-6'>ĐƠN HÀNG CỦA TÔI</p>
      </div>
      <div>
        {
          orderData.map((item,index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
              <div className='flex items-start gap-6 text-sm w-[60%]'>
                <div className=' my-auto'>
                  <img src ={item.image[0]} alt='' className='w-16 h-[100px] sm:w-20' />
                </div>
                <div>
                  <p className='sm:text-base font-medium flex-wrap line-clamp w-[90%]'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base'>
                    <p className='font-semibold'>Giá tiền: {formatPrice(item.price)}</p>
                    <p className='font-semibold'>/ Số lượng: {item.quantity}</p>
                  </div>
                  <p>Size: {item.size}</p>
                  <p className='mt-1 font-semibold'>Ngày mua: <span className='text-black font-normal pl-1'>{formatVietnameseDate(item.date)}</span></p>
                  <p className='mt-1 font-semibold'>Hình thức: <span className='text-green-700 font-semibold pl-1'>{item.paymentMethod}</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2 pl-5'>
                  <p className='min-w-2.5 h-2.5 rounded-full bg-blue-600'></p>
                  <p className='text-base font-semibold mb-[2px]'> {item.status}</p>
                </div>
                <button onClick={loadOrderData} className='border px-4 py-3 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600'>THEO DÕI ĐƠN HÀNG</button>
              </div>
            </div>
          )) 
        }
      </div>
    </div>
  )
}

export default Orders