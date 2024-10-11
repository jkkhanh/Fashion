import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, formatPrice} from '../App'
import { toast } from 'react-toastify';
import { category } from './../../../frontend/src/assets/assets';
import remove_icon from '../assets/icon/remove-icon.png'


const List = ({token}) => {

  const [list, setList] = useState([])


  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list")
      if (response.data.success) {
        setList(response.data.products)
      }
      else {
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }


  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', {id}, {headers:{token}})
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  },[])

  return (
    <>
      <p className='mb-3 text-2xl text-center font-semibold'>Danh sách các sản phẩm</p>
      <div className='flex flex-col gap-2'>
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-blue-400 text-sm'>
          <b>Hình ảnh</b>
          <b>Tên sản phẩm</b>
          <b className='text-center'>Danh mục</b>
          <b className='text-center'>Giá sản phẩm</b>
          <b className='text-center'>Thao tác</b>
        </div>
        {
          list.map((item,index) => (
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1.2fr_1fr_1fr] items-center py-1 px-2 border text-sm ' key={index}>
              <img className='w-16' src={item.image[0]} alt=''/>
              <p className=' font-semibold'>{item.name}</p>
              <p className='text-center ml-2'>{item.category}</p>
              <p className='text-center'>{formatPrice(item.price)}</p>
              <img onClick={() => removeProduct(item._id)} src={remove_icon} alt='' className='w-7 cursor-pointer mx-auto'/>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default List