import React from 'react'
import { motion } from "framer-motion"
import Navbar from '../Components/Navbar'
import {djAvatar} from '../Avatar'
import RequestContainer from '../Components/RequestContainer'
import MusicControls from '../Components/MusicControls'
const Dj = () => {
  return (
      <motion.div
      initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{duration: 0.2}}
          className=" dark:bg-[#1d3557] relative pt-1 bg-white dark:text-white text-[#1d3557] w-screen min-h-[130vh]"
    >
      <Navbar navbarImages={djAvatar} />
      <RequestContainer />
      <MusicControls/>
      </motion.div>
  )
}

export default Dj