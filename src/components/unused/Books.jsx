import React from 'react'
import SectionTitle from './SectionTitle'
import ItemGrid from './ItemGrid'


const Books = () => {
  return (
   <div className='px-10   max-w-7xl mx-auto z-10 relative py-10 '>
    <SectionTitle text='The Most Searched Books'/>

    <ItemGrid/>
   </div>
  )
}

export default Books