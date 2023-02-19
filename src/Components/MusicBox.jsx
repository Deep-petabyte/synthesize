import React from 'react'

const MusicBox = () => {
  return (
    <div className='w-40 h-40 rounded-lg flex-col bg-gray-400 mt-7 flex justify-center text-center cursor-pointer'>
      <div className='bg-white w-full  h-14  mt-1 outline outline-1'>lorem song image</div>
      <p>lorem song title</p>
      <p>lorem song artist</p>
    </div>
  )
}

export default MusicBox