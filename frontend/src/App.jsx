import React, { useContext, useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Product from './pages/Product';
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar2 from './components/Navbar2'
import { ShopConText } from './context/ShopContext'



const App = () => {

  const { getCartCount } = useContext(ShopConText);
  useEffect(() => {
    getCartCount(); // Gọi hàm khi component được mount
  }, [])

  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
  return (
    <div className='mx-auto'>
      <ToastContainer position='top-center' autoClose={1000} />
       <div className=' w-full bg-blue-400 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[1vw]'>
          <Navbar />
       </div>
       <div className={`fixed top-0 z-50 w-full bg-blue-400 px-4 transition-transform ease-in-out duration-700 bg-opacity-80 backdrop-blur-sm ${navbarVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0 z-0'}`}>
          <Navbar2/>
      </div>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[1vw]' >   
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/collection' element={<Collection />}/>
          <Route path='/collection/:category' element={<Collection />}/>
          <Route path='/about' element ={<About />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element = {<Cart />} />
          <Route path='login' element ={<Login />}/>
          <Route path='/place-order' element = {<PlaceOrder />} />
          <Route path='/orders' element = {<Orders />} />
        </Routes>
      </div>
      <div className=' w-full bg-blue-400 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[1vw]'>
          <Footer />
       </div>
    </div>
  )
}

export default App