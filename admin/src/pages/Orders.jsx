import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl } from './../App';
import { toast } from 'react-toastify';
import order_icon from '../assets/icon/prace-icon.png'



const Orders = ({token}) => {

  const formatVietnameseDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear(); // Lấy năm
    return `${day} tháng ${month} năm ${year}`; 
  };

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
      };

  const [orders, setOrders] = useState([])
  const fetchAllOrders = async () => {
    if (!token) {
      return null
    }

    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, {headers:{token}})
      if (response.data.success) {
        setOrders(response.data.orders)
      }
      else {
        toast.error(response.data.message)
      }
      
    } catch (error) {
      toast.error(error.message)
    }
  }


  const statusHandler = async (event,orderId) => {
    try {
      const response = await axios.post(backendUrl + "/api/order/status", {orderId, status: event.target.value}, {headers: {token}})
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  },[token])

  return (
    <div>
      <h3> DANH SÁCH CÁC ĐƠN HÀNG</h3>
      <div>
        {
          orders.map((order,index) => (
            <div className ='grid grid-cols-1 sm:grid-cols-[0.5fr_ 2fr_1fr] lg:grid-cols-[0.7fr_3fr_2.5fr_1.5fr_1fr] gap-3 items-start border-2 border-black p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm' key={index}>
              <img src = {order_icon} alt='' className='w-12'/>
              <div>
                <div>
                  {
                    order.items.map((item,index) => {
                      if (index === order.items.length - 1 ){
                        return <p className='py-0.5' key={index}>{item.name} x {"(" + item.quantity + ") -"} <span>Size: {item.size}</span></p>
                      }
                      else {
                        return <p className='py-0.5' key={index}>{item.name} x {"(" + item.quantity + ") - "} <span>Size: {item.size}</span>, </p>
                      }
                    })
                  }
                </div>
                <p className='mt-2 mb-2 font-medium'><b>Người đặt:</b> {order.address.fullName } </p>
                <div>
                  <p className='mb-2 font-medium'><b>Địa chỉ:</b> {order.address.houseNumber + "  " +  order.address.street + " - " + order.address.ward + " - " + order.address.city + " - " + order.address.province}</p>
                </div>
                <p className='font-medium'><b>Số điện thoại:</b> {order.address.phone}</p>
              </div>
              <div className='ml-4'>
                <p>Tổng số sản phẩm: {order.items.length}</p>
                <p>Hình thức: {order.paymentMethod}</p>
                <p>Thanh toán: {order.payment ? 'Hoàn thành' : 'Chưa giải quyết'}</p>
                <p>Ngày: {formatVietnameseDate(order.date)}</p>
              </div>
              <p>Tổng tiền: {formatPrice(order.amount)}</p>
              <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className='ml-3 p-2 font-medium'>
                <option value='Đã đặt đơn hàng'>Đã đặt đơn hàng</option>
                <option value='Đang đóng gói hàng'>Đang đóng gói hàng</option>
                <option value='Chuẩn bị vận chuyển'>Chuẩn bị vận chuyển</option>
                <option value='Đang giao hàng'>Đang giao hàng</option>
                <option value='Đã giao hàng'>Đã giao hàng</option>
              </select>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders