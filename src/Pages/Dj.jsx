import React from 'react'
import { motion } from "framer-motion"
import Navbar from '../Components/Navbar'
import {djAvatar} from '../Avatar'
const Dj = () => {
  return (
      <motion.div
      initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{duration: 0.2}}
          className="bg-[blue] text-white w-screen h-screen"
    >
      <Navbar navbarImages={djAvatar} />
      </motion.div>
  )
}

export default Dj