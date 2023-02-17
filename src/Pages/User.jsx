import React from 'react'
import {motion} from 'framer-motion'
import Navbar from '../Components/Navbar'
const User = () => {
  return (
      <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{duration: 0.2}}
      className="bg-[white] text-[#1d3557] w-screen h-screen">
      <Navbar/>
          </motion.div>
  )
}

export default User