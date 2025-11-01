import React from 'react'
import { customFetch1 } from '../utils'
import { useLoaderData } from 'react-router-dom'
import SubPageHero from '../components/SubPageHero'
import CarDetails from '../components/CarDetails'
export const loader=async({params})=>{
    const response=await customFetch1(`/trims/${params.id}`)
    // console.log(response)
    return {car:response.data}
}
const SingleCar = () => {


  return (
    <div>
        <SubPageHero/>
        <CarDetails/>
    </div>
  )
}

export default SingleCar
