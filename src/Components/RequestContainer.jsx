import React from 'react'
import NewRequest from './NewRequest'

const RequestContainer = () => {
  return (
      <div className='w-full pt-16 px-5 lg:px-36 mt-32 relative'>
          <div className="text-center w-full ">
              <h1 className='logo text-3xl font-bold'>Request List</h1>
          </div>
<NewRequest/>
    </div>
  )
}

export default RequestContainer