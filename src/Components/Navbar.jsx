import {React, useRef, useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import useLocalStorage from 'use-local-storage'
// import { userAvatar } from '../Avatar'
const Navbar = ({navbarImages}) => {
    const location = useLocation();
    const setRef = useRef();
    const avatarRef = useRef();
    const openSettings = () => {
setRef.current.classList.toggle("open-set")
    }
    
    const openAvatar = () => {
        avatarRef.current.classList.toggle("show-avatar")
    }
    const [theme, setTheme] = useLocalStorage('theme' ?  "light" : 'dark')
  
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
    const [checkAvatar, setCheckAvatar] = useLocalStorage("")
    const avatarSetter = (imageUrl) => {
        setCheckAvatar(imageUrl)
        openAvatar()
        
    }
    localStorage.setItem("url",checkAvatar)

  return (
      <nav className=' fixed top-0 left-0 right-0 z-50 px-36 py-4 h-[100px] justify-between w-full flex items-center dark:text-white bg-white bg-opacity-60 backdrop-blur-sm'>
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
              ref={setRef} className='bg-[#1d3557] dark:bg-white dark:text-white rounded-xl absolute -top-[990px] z-20 right-20 w-[270px] h-[350px] duration-700 flex flex-col items-center ' >
              <motion.div whileTap={{scale: 1.5}}  className='rounded-full w-16 h-16 dark:bg-[#1d3557] bg-white mt-14 overflow-hidden'>
                 { checkAvatar && <img src={checkAvatar} alt=""  className='object-cover w-full h-full'/>}
              </motion.div>
              <div onClick={openAvatar} className=' bg-white dark:bg-[#1d3557] rounded-lg px-4 py-2 mt-8 cursor-pointer '>
                  Set Avatar
          
              </div>
                 <div onClick={openSettings} className="absolute top-5 right-5 text-white text-2xl cursor-pointer"><i className="fa-regular fa-circle-xmark"></i></div>
              <div onClick={handleThemeSwitch} className=' bg-white dark:bg-[#1d3557] rounded-lg px-4 py-2 mt-8 cursor-pointer theme-toggle'> {theme === "dark" ? <div>Toggle Light Theme <i className="fa-solid fa-toggle-off"></i></div> : <div>Toggle Dark Theme <i className=' fa-solid fa-toggle-on'></i></div>}</div>

              <div className="absolute bottom-5 left-5 text-xs dark:bg-[#1d3557] bg-white rounded-[3px] cursor-pointer px-2 py-1"><Link to="/"> Back To Home</Link></div>
               <motion.div
                    initial={{  scale:0 }}
                   transition={{duration: 2}}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0}}
                  ref={avatarRef} className="absolute   top-[40px] -left-[160px]  h-[280px] w-[180px] scale bg-[grey] z-20 p-0 grid grid-cols-3 overflow-hidden duration-700">
                     { navbarImages.map((avatar, index) => <motion.div key={index} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={() => avatarSetter(avatar.url)} className='rounded-md h-10 w-10 gap-4  cursor-pointer overflow-hidden'>
                   <img src={avatar.url} alt=""  className='object-cover w-full h-full'/> 
              </motion.div> )}
              </motion.div>
          </motion.div>
          
          
    </nav>
  )
}

export default Navbar