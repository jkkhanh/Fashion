import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo_fashion.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import order_icon from '../assets/Icon Image/order.png'
import DarkMode from "./DarkMode";
import { Link, NavLink, useNavigate} from "react-router-dom";
import { ShopConText } from "../context/ShopContext";
import { toast } from 'react-toastify';



const Navbar = () => {

  const {search,setSearch,getCartCount, navigate, token, setToken, setCartItem} = useContext(ShopConText)
  const {products,category} = useContext(ShopConText)
  const [filterSearch,setFilterSearch] = useState([])
  const [showResults, setShowResults] = useState(false);
  
  
  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItem({})
    toast.info("Bạn đã đăng xuất")
  }



  const searchProduct = () => {
    let productSearch = products.slice()
    if( search ){
      productSearch = productSearch.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    setFilterSearch(productSearch)
  }


  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setShowResults(value.length > 0);

  };


  const handleFocus = () => {
    setShowResults(search.length > 0);
  };

  const handleBlur = () => {
    setTimeout(() => setShowResults(false), 200);
  };


  useEffect(() => {
    searchProduct()
  },[search,products])



  return (
    <div className="w-full bg-blue-400 flex items-center justify-center">
      <div className="flex items-center justify-between py-3 md:px-[6px] mx-auto lg:w-full lg:px-[1vw] font-medium">
        <div className="flex items-center gap-16">
         <img onClick={() => navigate('/')} src={logo} alt="" className="w-[160px]" /> 
          <ul className="hidden sm:flex lg:flex gap-8 text-white text-[18px] ml-0 font-semibold">
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link relative text-blue-600" : "relative hover-effect"} >
              <p>Trang chủ</p>
            </NavLink>

            <div className="relative group">
              <NavLink to="/collection" className={({ isActive }) => isActive ? "active-link relative text-blue-600" : "relative group hover-effect"}>
                <p>Bộ sưu tập</p>      
              </NavLink>
              <div className="absolute w-56 left-0 p-3 hidden group-hover:block bg-gray-800 top-8  rounded shadow-lg z-50">
                <ul>
                  { category.map((item,index) => (
                    <li>
                      <Link key={index} to = {`/collection/${item.category}`} className="block px-4 py-2 hover:bg-gray-700 text-white">
                        <p>{item.nameCategory}</p>
                      </Link>
                    </li>       
                  ))}      
                </ul>
                </div>
            </div>  

          
            <NavLink to="/about" className={({ isActive }) => isActive ? "active-link relative text-blue-600" : "relative hover-effect"} >
              <p>Về chúng tôi</p>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link relative text-blue-600" : "relative hover-effect"} >
              <p>Liên hệ</p>
            </NavLink>
          </ul>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="relative group hidden sm:block">
            <input
              type="text"
              placeholder="Tìm kiếm ở đây..."
              className={`border-2 outline-none placeholder:text-sm px-5 py-2 rounded-full transition-all duration-300 w-0 group-hover:w-[500px] ${showResults ? "w-[500px]" : ""}`}
              value ={search}
              // onChange={(e) => setSearch(e.target.value)} 
              onChange={handleInputChange} // Gọi hàm xử lý sự kiện thay đổi
              onFocus = {handleFocus} // Gọi hàm xử lý khi focus
              onBlur={handleBlur}
            />
              <IoMdSearch className="absolute top-[7px]  flex items-center justify-center bg-white  right-[6px] text-[28px] cursor-pointer " />
             
             {
              showResults && search && (
                <div className="absolute top-12 rounded-lg px-2 py-3 bg-white w-[500px] h-[300px] overflow-y-scroll z-20 scroll">
                {
                  filterSearch.length > 0 ? (
                    filterSearch.map((item) => (
                    <Link to={`/product/${item._id}`} key={item.id} className="text-sm py-2 flex items-center cursor-pointer hover:bg-blue-400">
                      <img src={item.image[0]} alt="" className="w-10 h-10 object-cover pl-1" />
                      <p className="line-clamp pl-2 font-normal" title={item.name}>{item.name}</p>
                    </Link>
                  ))
                ) : (
                  <p className="text-center">Không có sản phẩm nào</p>
                )
                }
                </div>
              )
             }
          </div>
         
          <Link to = '/cart' className="w-[43px] h-[43px] group  bg-white flex justify-center items-center rounded-full object-contain p-2 cursor-pointer relative ">
            <FaCartShopping className="text-2xl transition-all ease-in-out duration-400 hover:scale-110" />
            <div className="absolute -top-[1px] right-0 bg-red-400  p-[8px] rounded-full group">
              <p className="text-[10px] font-bold text-black absolute top-[1px] right-[3px]">
                {getCartCount()}
              </p>
            </div>
          </Link>
          {
            token && (
              <Link to = '/orders' className="w-[43px] h-[43px] group  bg-white flex justify-center items-center rounded-full object-contain p-2 cursor-pointer relative "><img src={order_icon} alt=""/></Link>
            )
          }
          { token ? (
            <button onClick={logout} className="border-2 border-purple-600 px-6 py-2 rounded-full bg-purple-400 font-semibold hover:bg-purple-700 hover:text-white">
              Đăng xuất
            </button>
           ) : (
              <button onClick={() => token ? null : navigate('/login')} className="border-2 border-purple-600 px-6 py-2 rounded-full bg-purple-400 font-semibold hover:bg-purple-700 hover:text-white">
                Đăng nhập
              </button>
           )}
          {/* <Link to = '/login'><button className="border-2 border-purple-800-600 px-6 py-2 rounded-full bg-purple-400 font-semibold hover:bg-purple-700 hover:text-white">
            Login
          </button></Link>
          <button onClick={logout}>logout</button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
