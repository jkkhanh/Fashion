import React, { useEffect } from "react";
import fs1 from "../assets/women.png";
import fs2 from "../assets/shopping.png";
import fs3 from "../assets/sale.png";
import Slider from 'react-slick'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import DigitalClock from "./DigitalClock";

const Hero = () => {
  const HeroList = [
    {
      id: 1,
      img: fs1,
      title: "Ưu đãi giảm giá 30%",
      description: "Dành cho thời trang nam",
    },
    {
      id: 2,
      img: fs2,
      title: "Giảm giá 40%",
      description: "Dành cho thời trang nữ",
    },
    {
      id: 3,
      img: fs3,
      title: "Giảm giá 20%",
      description: "Dành cho thời trang cặp đôi",
    },
  ];

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  useEffect(() => {
    AOS.init({
      duration: 1500, 
    });
  }, []);

  return (
    
    <div className="overflow-hidden relative bg-gray-100 min-h-[500px] sm:min-h-[650px]  flex justify-center items-center duration-200 text-black">
      <div className="h-[700px] w-[600px] bg-blue-400 absolute -top-[62%] right-[26%] rounded-3xl rotate-45 "></div>
      <div className="container  pb-8 sm:pb-0 z-10">
        <Slider {...settings} >
          {
            HeroList.map((data) => (
               <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center ">
              <div className="flex flex-col justify-center gap-10 pt-12 order-1 pl-5">
                <div>
                  <h1 data-aos = 'zoom-out' className="text-5xl font-bold">{data.title}</h1>
                  <p data-aos="fade-right" className="text-3xl font-semibold mt-3">
                  {data.description}
                </p>
                </div>
                <div className="flex items-center mt-2">
                  <p className="pr-3 text-lg font-semibold">Thời gian ưu đãi: </p>
                  <DigitalClock targetDate="2024-11-23T00:00:00" />
                </div>
                <div>
                  <Link to = '/collection'><button data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" className="bg-blue-400 hover:scale-105 text-white py-2 px-6 rounded-full duration-400 transition-all ease-in-out hover:bg-blue-700 hover:text-white "> Mua ngay </button></Link>
                </div>
              </div>
              <div className='order-2'>
                <div>
                  <img data-aos = 'zoom-in' src={data.img} alt="" className="w-[500px] h-[450px] mx-auto transition duration-300  drop-shadow-[0_0_25px_rgba(0,0,255)] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
            ))
          }  
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
