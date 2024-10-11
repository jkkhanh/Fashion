import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopConText } from "../context/ShopContext";
import star from "../assets/Icon Image/star.png";
import Breadcrum from "../components/Breadcrum";
import avata from '../assets/images.jpg'
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, formatPrice, addToCart } = useContext(ShopConText);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [activeTabs, setActiveTabs] = useState(0);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId,products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overscroll-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[20%] w-full scroll">
            {productData.image.map((item, index) => (
              <img onClick={() => setImage(item)} src={item} key={index} className={`w-[20%] h-[134px] sm:w-[100%] sm:mb-2 flex-shrink-0 cursor-pointer ${ item === image ? "border border-blue-700" : "" }`} />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-[703px]" />
          </div>
        </div>

        {/***infor */}
        <div className="flex-1">
          <h1 className="font-medium text-3xl mt-2 line-clamp-productsdetail">
            {productData.name}
          </h1>
          <div className="flex flex-center items-center gap-1 mt-2">
            <img src={star} alt="" className="w-5 h-5 5" />
            <img src={star} alt="" className="w-5 h-5 5" />
            <img src={star} alt="" className="w-5 h-5 5" />
            <img src={star} alt="" className="w-5 h-5 5" />
            <img src={star} alt="" className="w-5 h-5 5" />
            <p className="pl-3">(122)</p>
          </div>
          <p className="pt-8 text-xl font-bold">
            Giá tiền:{" "}
            <b className="text-red-500 font-semibold pl-2">
              {formatPrice(productData.price)}
            </b>
          </p>
          <p className="pt-8 text-base font-medium">
            Thông tin sản phẩm:{" "}
            <b className="font-normal pl-2">{productData.description}</b>
          </p>
          <div className="flex flex-col gap-4 my-9">
            <p className="font-semibold text-xl">Size: </p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border w-14 h-14 text-lg bg-slate-200 font-semibold ${
                    item === size ? " border-blue-700" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button onClick={() => addToCart(productData._id,size)} className="bg-blue-600 w-[250px] h-[60px] text-white text-lg font-semibold mt-5 hover:bg-blue-800">
              Thêm giỏ hàng
            </button>
            <hr className="mt-8" />
            <div className="text-sm text-gray-600 mt-3">
              <p className="italic mb-1">- Cam kết hàng thật 100%</p>
              <p className="italic mb-1">
                - Giao hàng tận nơi, phục vụ tận giường
              </p>
              <p className="italic mb-1">
                - Trả hàng trong vòng 14 ngày và hoàn tiền cho quý khách.
              </p>
              <p className="italic mb-1">
                - Xin cảm ơn đã mua hàng, chúc một ngày tốt lành
              </p>
              <p className="mt-2 font-medium">
                - Người đăng:{" "}
                <b className="pl-1 text-blue-600">Nguyễn Lê Khánh</b>
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="border p-5 mt-36 ">
        {/* <div className="customTabs"> */}
          <ul className="flex items-center gap-10 px-2 py-2">
            <li>
              <button className={`border-2 w-[150px] h-12 bg-blue-500 text-white ${activeTabs === 0 ? "bg-black" : ''}`} onClick={() => { setActiveTabs(0);}} > Thông tin </button>
            </li>        
            <li >
              <button className={`border-2 w-[150px] h-12 bg-blue-500 text-white ${activeTabs === 1 ? "bg-black" : ''}`} onClick={() => { setActiveTabs(1);}} >Bài viết đánh giá </button>
            </li>
          </ul>
          <br />
          {activeTabs === 0 && (
            <div className="px-2 py-2">
              <p>{productData.description}</p>
            </div>
          )}
          {activeTabs === 1 && (
            <div>
              <div>
                <div className="w-[70%] h-auto">
                  <h3 className="text-2xl font-semibold">Các đánh giá và nhận xét</h3>
                  <br />
                  <div className="flex border px-2 py-3">
                    <div className="w-[25%] flex flex-col justify-center items-center">
                        <img src={avata}  alt="" className="rounded-full w-[180px]" />
                        <b className='text-center mt-2'>Ông Đa - tổ trưởng khu phố</b>
                    </div>

                    <div className="pl-11 w-[85%]">
                      <b>1/10/2024</b>
                      <p>Tôi năm nay hơn 70 tuổi rồi mà tôi chưa thấy cái chất vải nào đẹp như này, phải tôi, tôi mua cho chục bộ.</p>
                    </div>
                  </div>

                  <br />
                  <br />

                  <form >
                    <h4 className="text-2xl font-semibold">Thêm mô tả</h4>
                    <div>
                      <textarea
                        className="w-full h-36 border mt-3 px-2 py-2"
                        placeholder="Thêm góp ý của bạn vào đây..."
                      ></textarea>
                    </div>

                    <div className="mt-3">
                      <input type="text" placeholder="Kimi no nawa..." className="border outline-none px-2 py-2 w-[30%]"/>
                    </div>
                    <br />

                    <div className="form-group">
                      <button type="submit" className="w-[200px] h-12 bg-blue-600 text-white text-base">Gửi nhận xét</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      {/* </div> */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
