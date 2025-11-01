import React from 'react'
import HeroImg from '../assets/listing.png'
const SubPageHero = () => {
  return (

    <div className='bg-base-100 h-[300px] relative mt-[-100px] bg-cover bg-right' style={{backgroundImage:`url(${HeroImg})`}}>
                    <div className='max-w-7xl absolute top-1/2 left-1/2 translate-[-50%]'></div>
    </div>

  )
}

export default SubPageHero