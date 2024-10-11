import React, { useContext } from 'react'
import { ShopConText } from '../context/ShopContext'
import { FaAngleRight } from "react-icons/fa6";


const Breadcrum = () => {
    const { products } = useContext(ShopConText);

    // Lấy sản phẩm đầu tiên trong danh sách
    const firstProduct = products.length > 0 ? products[0] : null;

    return (
        <div className='mb-10 bg-blue-500 w-full h-14 flex items-center justify-center'>
            {firstProduct ? (
                <div className='text-lg flex items-center gap-1 text-white'>
                    <b>Trang chủ</b> <FaAngleRight />  <b>Bộ sưu tập </b> <FaAngleRight /> <p>{firstProduct.category}</p> <FaAngleRight /> {firstProduct.name}
                </div>
            ) : (
                <div>Loading...</div> // Hoặc thông báo sản phẩm không có
            )}
        </div>
    );
}

export default Breadcrum;
