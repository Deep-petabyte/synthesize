import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
      <nav className='px-36 py-4 h-[60px] bg-white bg-opacity-60 backdrop-blur-sm'>
          <div className='flex justify-between items-center'>
              <div>
                  <Link to="/" className='logo text-[#1d3557] text-4xl font-bold'>Synthesize</Link>
              </div>
              <div className='cursor-pointer'><i className="fa-solid fa-gear text-3xl"></i></div>
          </div> 
    </nav>
  )
}

export default Navbar