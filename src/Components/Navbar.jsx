import {React, useRef, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useLocalStorage from 'use-local-storage'
const Navbar = (props) => {
    const setRef = useRef();
    const openSettings = () => {
setRef.current.classList.toggle("open-set")
    }
    const [theme, setTheme] = useLocalStorage('theme' ?  "light" : 'dark')
    // const [theme, setTheme] = useState("light");
    useEffect(() => {
        if (theme === "light") {
       document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
   } 
    }, [theme])
    const handleThemeSwitch = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
            }
    
  return (
      <nav className=' relative px-36 py-4 h-[100px] flex items-center dark:text-white bg-white bg-opacity-60 backdrop-blur-sm'>
          <div className='flex justify-between items-center w-full'>
              <div>
                  <Link to="/" className='logo text-[#1d3557] dark:text-white text-4xl font-bold'>Synthesize</Link>
              </div>
              <div onClick={openSettings} className='cursor-pointer'><i className="fa-solid fa-gear text-3xl"></i></div>
          </div> 
          <motion.div
              animate={{ y: 100 }}
              transition={{duration: 2}}
              exit={{y: -990}}
              ref={setRef} className='bg-[#1d3557] dark:bg-white dark:text-white rounded-xl absolute -top-[990px] z-20 right-20 w-[270px] h-[350px] duration-700 flex flex-col items-center' >
              <div className='rounded-full w-16 h-16 dark:bg-[#1d3557] bg-white mt-14'></div>
              <div className=' bg-white dark:bg-[#1d3557] rounded-lg px-4 py-2 mt-8 cursor-pointer'>Set Avatar</div>
              <div onClick={handleThemeSwitch} className=' bg-white dark:bg-[#1d3557] rounded-lg px-4 py-2 mt-8 cursor-pointer theme-toggle'> {theme === "dark" ? <div>Toggle Light Theme <i className="fa-solid fa-toggle-off"></i></div> : <div>Toggle Dark Theme <i className=' fa-solid fa-toggle-on'></i></div>}</div>

              <div className="absolute bottom-5 left-5 text-xs dark:bg-[#1d3557] bg-white rounded-[3px] cursor-pointer px-2 py-1"><Link to="/"> Back To Home</Link></div>
              </motion.div>
    </nav>
  )
}

export default Navbar