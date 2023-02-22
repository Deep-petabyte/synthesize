import {React, useState, useRef} from 'react'
import MusicBox from './MusicBox'
import { motion } from 'framer-motion'

const MusicContainer = ({ }) => {
  const [getAvatar, setGetAvatar] = useState("")
  
const djRef = useRef()

const avatarSrc = () => {
  setGetAvatar( localStorage.getItem("url"))
}
const openDj = () => {
  djRef.current.classList.toggle("open-dj")
  avatarSrc()
}
  return (
      <div className='w-full pt-10 px-5 lg:px-36 mt-32'>
          <h1 className='logo text-4xl mb-4 font-semibold text-center'>Recommended</h1>
          <div className='grid grid-cols-2 lg:grid-cols-4 grid-rows-3 gap-3 row-gap-3 w-full'>
        <MusicBox openDj={ openDj} />
          <MusicBox />
          <MusicBox/>
          <MusicBox/>
          <MusicBox/>
          <MusicBox/>
          <MusicBox/>
          <MusicBox/>
          <MusicBox/>
          <MusicBox/>
          <MusicBox/>
          <MusicBox/>
          
          </div>
      <motion.div initial={{x: -600}} animate={{x: 10}} exit={{x: -600}} transition={{duration: 2}} ref={djRef} className="absolute -left-[600px] bg-[#1d3557] flex items-center flex-col dark:bg-white dark:text-[#1d3557] w-[290px] h-[230px] overflow-hidden rounded-lg top-[120px] duration-700">
        <div className='w-16 h-16 rounded-full bg-white overflow-hidden mt-8'>
          <img src={getAvatar} alt=""  className='object-cover w-full h-full'/>
        </div>
        <div className='flex space-x-4 mt-4'>
          <div className=' bg-white w-[70px] py-1 text-center rounded-sm text-sm cursor-pointer'>Request</div>
          <div className=' bg-white w-[70px] py-1 text-center rounded-sm text-sm cursor-pointer'> Status</div>
        </div>
        <div className="absolute top-5 right-5 bg-white p-1 rounded-sm text-sm">
          Timer
        </div>
        <div className="absolute w-full bg-red-200 text-center h-[60px] bottom-0 right-0 left-0"> add now playing here</div>
        <div onClick={openDj} className="absolute top-5 left-5 text-white text-2xl cursor-pointer"><i className="fa-regular fa-circle-xmark"></i></div>
      </motion.div>
    </div>
  )
}

export default MusicContainer