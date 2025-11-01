import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
      <span className="loading loading-bars loading-lg"></span>
      <span className="loading loading-bars loading-lg"></span>
      <span className="loading loading-bars loading-lgs"></span>
    </div>
  )
}

export default Loading