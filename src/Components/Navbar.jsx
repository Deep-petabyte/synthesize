import {React, useRef} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
    const setRef = useRef();
    const openSettings = () => {
setRef.current.classList.toggle("open-set")
}
  return (
      <nav className=' relative px-36 py-4 h-[100px] flex items-center bg-white bg-opacity-60 backdrop-blur-sm'>
          <div className='flex justify-between items-center w-full'>
              <div>
                  <Link to="/" className='logo text-[#1d3557] text-4xl font-bold'>Synthesize</Link>
              </div>
              <div onClick={openSettings} className='cursor-pointer'><i className="fa-solid fa-gear text-3xl"></i></div>
          </div> 
          <motion.div
              animate={{ y: 100 }}
              transition={{duration: 2}}
              exit={{y: -990}}
              ref={setRef} className='bg-[#1d3557] rounded-xl absolute -top-[990px] z-20 right-20 w-[270px] h-[350px] duration-700 flex flex-col items-center' >
              <div className='rounded-full w-16 h-16 bg-white mt-16'></div>
              <div className=' bg-white rounded-lg px-4 py-2 mt-8 cursor-pointer'>Set Avatar</div>
              <div className=' bg-white rounded-lg px-4 py-2 mt-8 cursor-pointer'>Toggle  Light Mode</div>

              <div className="absolute bottom-3 left-5 text-xs bg-white rounded-[3px] cursor-pointer px-2 py-1"><Link to="/"> Back To Home</Link></div>
              </motion.div>
    </nav>
  )
}

export default Navbar