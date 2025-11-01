
import { nanoid } from 'nanoid'
import React from 'react'
const stats=[{id:nanoid(),count:'836M',description:'CARS FOR SALE'},
        {id:nanoid(),count:'738M',description:'DEALER REVIEWS'},
        {id:nanoid(),count:'100M',description:'VISITORS PER DAY'},
        {id:nanoid(),count:'238M',description:'VERIFIED DEALERS'}, ]

const Stats = () => {


  return (
    <div className='grid  grid-cols-4 text-center'>
          {stats.map(({id,count,description})=>{

              return(

                <div key={id} className='flex flex-col gap-x-10 gap-y-5'>

                      <h2 className='text-[38px]'>{count}</h2>
                      <p className='text-[15px] '>{description}</p>
                </div>

              )
          })}
    </div>
  )
}

export default Stats
