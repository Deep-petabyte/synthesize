import {React, useRef} from 'react'
import { motion } from 'framer-motion'
const Search = () => {
    const searchRef = useRef()

    const whileSearch = () => {
searchRef.current.classList.add("while-search")
    }
  return (
      <div className='px-36 pt-6 fixed bottom-0 left-0 right-0 z-50 bg-white w-full h-[170px] mt-10 overflow-y-hidden bg-opacity-80 backdrop-blur-md'>
          <form action="">
              <div className='flex bg-gray-200 h-12 w-1/2 mx-auto'>
                  <input onChange={whileSearch} type="text" placeholder='Search Our Library' className='bg-transparent w-[94%] outline-none px-4'/>
                  <button type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
              </div>
             
          </form>
          <motion.div
              ref={searchRef}
              initial={{ y: -600, scale : 0 }}
              animate={{ y: 20 , scale: 1}}
              exit={{ y: -600, scale: 0 }}
              transition={{duration: 2}}
              className='bg-[#1d3557] w-1/2 text-white dark:bg-white dark:text-[#1d3557] px-6 py-1 absolute h-20 -top-[150px] left-0 mx-auto right-0 duration-700'>
              suggestions while typing
              </motion.div>
    </div>
  )
}

export default Search