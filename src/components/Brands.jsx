import React from 'react'
import SectionTitle from './SectionTitle'
import PremiumBrand from './PremiumBrand'

const Brands = () => {
  return (
     <div className='bg-base-300 px-10  mt-[-100px]  rounded-t-3xl z-10 relative' >

      <div className='max-w-7xl mx-auto z-10 relative py-[115px] '>

          <SectionTitle text='Explore Our Premium Brands'/>
          <PremiumBrand/>
      </div>

   </div>
  )
}

export default Brands
