import React from 'react'
import { motion } from 'framer-motion'
const NewRequest = () => {
  return (
      <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1] }}
          transition={{duration: 0.6}}
          className='px-4 py-2 rounded-full bg-gray-300 w-[80%] mt-12 cursor-pointer lg:w-1/2 '>
          <p>New Request Enters</p>
    </motion.div>
  )
}

export default NewRequest