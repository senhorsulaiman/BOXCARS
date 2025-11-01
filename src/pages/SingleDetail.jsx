import React from 'react'

import { customFetch1 } from '../utils'
import ListingDetail from '../components/ListingDetail'
const singleCarQuery=(id)=>{
  return {queryKey:['singleCar',id],queryFn:()=>customFetch1(`api/trims/${id}`)}
}
export const loader=(queryClient)=>async ({params})=>{
  // const response=await customFetch1(`api/trims/${params.id}`)
  const response=await queryClient.ensureQueryData(singleCarQuery(params.id))
  return {detail:response.data}
}
const SingleDetail = () => {
  return (
    <div>
        <ListingDetail/>
    </div>
  )
}

export default SingleDetail
