import React from 'react'
import SectionTitle from './SectionTitle'
import Review from './Review'

const ReviewContainer = () => {
  return (
    <div className='bg-base-300 px-10 py-[115px]'>
        <div className="max-w-7xl mx-auto">

            <SectionTitle text="What our customers say" />
            <Review/>
        </div>

    </div>
  )
}

export default ReviewContainer
