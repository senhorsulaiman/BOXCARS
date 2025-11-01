import React from 'react'
import { customFetch, customFetch1 } from '../utils'
import FeaturedListing from '../components/FeaturedListing'
import SubPageHero from '../components/SubPageHero'
import Fliters from '../components/Fliters'
import PaginationContainer from '../components/PaginationContainer'

const url='/trims/?&verbose=yes&direction=asc&sort=id&year=2020'
export const loader=async({request})=>{

     const params=Object.fromEntries([...new URL(request.url).searchParams.entries()])
      //  console.log(params)
    //    const search =params.get('search')

    const make=await customFetch1(url);
    const model=await customFetch1(url);

    const response=await customFetch1(url,{params});
    const meta=response.data;
    // console.log(meta)
    const listings=response.data.data;
    const makes=make.data.data;
    const models=model.data.data;
    console.log(listings)
    return {listings,params,makes,models,meta}

}
const Cars = () => {

  return (
    <div>
            {/* <SubPageHero/> */}
            <Fliters/>
            <FeaturedListing title="Explore Our Cars"/>
            {/* <PaginationContainer/> */}

    </div>
  )
}

export default Cars
