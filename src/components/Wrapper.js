import React from 'react'

function Wrapper({children}) {
  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6/12 shadow-md'>
        {children}
    </div>
  )
}

export default Wrapper