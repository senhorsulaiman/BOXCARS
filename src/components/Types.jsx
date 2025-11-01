import React from 'react'
import SectionTitle from './SectionTitle'
import VehicleType from './VehicleType'

const Types = () => {
  return (
     <div className='px-10   max-w-7xl mx-auto z-10 relative py-10 '>
        <SectionTitle text='Browse by Type'/>
        <VehicleType/>
   </div>
  )
}

export default Types
