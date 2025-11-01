import React from 'react'
import SectionTitle from './SectionTitle'
import ListGrid from './ListGrid'

const FeaturedListing = ({title}) => {
  return (
    <div className='px-10 '>

      <div className="max-w-7xl mx-auto z-10 relative py-24 ">

         <SectionTitle text={title}  />
         <ListGrid/>
      </div>


   </div>
  )
}

export default FeaturedListing
