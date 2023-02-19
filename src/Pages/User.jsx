import React from 'react'
import {motion} from 'framer-motion'
import Navbar from '../Components/Navbar'
import MusicContainer from '../Components/MusicContainer'
import Search from '../Components/Search'
import { userAvatar } from '../Avatar'
const User = () => {
  return (
    <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{duration: 0.2}}
      className=" dark:bg-[#1d3557] relative pt-1 bg-white dark:text-white text-[#1d3557] w-screen min-h-[130vh] ">
      <Navbar navbarImages={userAvatar} />
      <MusicContainer />
      <Search/>
          </motion.div>
  )
}

export default User