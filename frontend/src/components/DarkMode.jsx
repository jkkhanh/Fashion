import React, { useEffect, useState } from 'react'
import darkMode from '../assets/darkmode.png'
import lightMode from '../assets/lightmode.png'


const DarkMode = () => {
  const [theme,setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  )

  const element = document.documentElement;

  useEffect (() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    else {
      element.classList.add("light");
      localStorage.setItem("theme","light");
    }
  },[theme]);

  return (
    <div className='relative'>
        <img src={lightMode} alt='' onClick={() => setTheme ( theme === "light" ? "dark" : "light")} className='absolute right-0 z-10 w-16 h-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'/>
        <img src={darkMode}  alt='' onClick={() => setTheme ( theme === "light" ? "dark" : "light")} className=' w-16 h-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' />
    </div>
  )
}

export default DarkMode