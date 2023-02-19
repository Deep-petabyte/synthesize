import React from 'react'
import MusicBox from './MusicBox'

const MusicContainer = () => {
  return (
      <div className='w-full pt-10 px-36 mt-32'>
          <h1 className='logo text-4xl mb-4 font-semibold text-center'>Recommended</h1>
          <div className='grid grid-cols-4 grid-rows-3 gap-3 row-gap-3 w-full'>
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
          <MusicBox/>
          <MusicBox/>
          
          </div>
        
    </div>
  )
}

export default MusicContainer