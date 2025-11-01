import React from 'react'
import { customFetch1 } from '../utils'
import FeaturedListing from '../components/FeaturedListing'
import FilterHome from '../components/FilterHome'
import Filterby from '../components/Filterby'
import PaginationContainer from '../components/PaginationContainer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const url='/api/trims/?&verbose=yes&direction=asc&sort=id&year=2020'
const makesUrl='/api/makes?direction=asc&sort=id'
const modelsUrl='/api/models?sort=id&direction=asc&year=2020&verbose=yes'
import HeroImg from '../assets/listing.png'
const allCarsQuery=(queryParams)=>{
  const {make,model,page}=queryParams;
  return{
    queryKey:[
      'trims',
        make??'',
        model??'',
        page??1,
    ],
    queryFn:()=>customFetch1(url, {params:queryParams}),

  };

};
const allMakeQuery={
    queryKey:['makes'],
    queryFn:()=>customFetch1(makesUrl)

}
const allModelsQuery={
    queryKey:['models'],
    queryFn:()=>customFetch1(modelsUrl)

}
 export const  loader=(queryClient)=>async({request})=>{
    const params=Object.fromEntries([...new URL(request.url).searchParams.entries()])
    //const response=await customFetch1(url, {params}),
    const response=await queryClient.ensureQueryData(allCarsQuery(params))
    const makesResponse=await queryClient.ensureQueryData(allMakeQuery)
    const modelsResponse=await queryClient.ensureQueryData(allModelsQuery)
    const listings=response.data.data;
    const makes=makesResponse.data.data;
    const models=modelsResponse.data.data;
    const meta=response.data;
    return {listings,params,makes,models,meta}
}
const Listings =() => {


  return (
    <div>

            <div className='bg-base-300 h-[300px] relative mt-[-100px] bg-cover bg-right' style={{backgroundImage:`url(${HeroImg})`}}>
                <div className='max-w-7xl absolute top-1/2 left-1/2 translate-[-50%]'>
                  <Filterby/>
                 </div>

            </div>
            <FeaturedListing title='Explore All Vehicles' />
            <PaginationContainer/>

    </div>
  )
}

export default Listings
