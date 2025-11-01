import React from 'react'
import HeroImg from '../assets/listing.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='h-[649px] px-14 w-full mt-[-100px] relative bg-cover flex items-center' style={{backgroundImage:`url(${HeroImg})`}}>

      <div className=' max-w-7xl mx-auto w-full '>
        <span className='text-[15px]'>Find cars for sale and for rent near you</span>
        <h2 className='mt-6 mb-8 text-[70px]'>4,675 Vehicles<br/>
Available</h2>

        <Link to='/listings' className="bg-[#405FF2] text-white text-[15px] rounded-[12px] font-medium w-[180px] h-[53px] flex items-center justify-center">View Inventory</Link>
      </div>
    </div>
  )
}

export default Hero