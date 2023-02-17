import React from 'react'
import { motion } from "framer-motion"
import {Link } from "react-router-dom"
const SplashScreen = () => {
  return (
      <motion.div
      initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{duration: 0.2}}
          className=" splash-bg  w-screen h-screen">
          <div className="bg-white bg-opacity-80 w-screen h-screen flex flex-col justify-center items-center backdrop-blur-sm">
              <div className="roller mb-6">
    <span id="rolltext"> <span className="text-4xl font-bold text-[#1d3557] logo ">Synthesize</span><br/>
      <span className="spare-time">Reinvent Music</span> <br/>
      <span className="spare-time">Simplicity</span> <br/>
    <span className="spare-time">Feel the beats!</span><br/></span>
    </div>
              <div className="flex flex-col space-y-6 items-center overflow-hidden w-[300px]">
                  
              <motion.div
              initial={{x: -350, scale : 0.6}}
              animate={{ x:[-350, 0], scale: 1.0}} 
            transition={{duration: 1}}
               className="bg-white rounded-xl flex items-center justify-center w-[180px] h-[60px] text-[#1d3557]"> <Link to="/User">Continue as User</Link> </motion.div>
              <motion.div
              initial={{x: 350}}
              animate={{ x:[350,0]}} 
            transition={{duration: 1}}
            className="bg-white rounded-xl  flex items-center justify-center w-[180px] h-[60px] text-[#1d3557]"> <Link to="/Dj">Continue as DJ</Link> </motion.div> 
          </div>
        </div>
         
          
    </motion.div>
  )
}

export default SplashScreen