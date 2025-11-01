import React from 'react'
import SubPageHero from '../components/SubPageHero'
import ItemGrid from '../components/ItemGrid'
import SectionTitle from '../components/SectionTitle'
import { customFetch } from '../utils';
// API_KEY=vxm4xY8FPWurIq2vqIkdZw==W3tsTx3HFRwqU76z
const url='/books';
export const loader=async({request})=>{
  // console.log(request)
  const params=Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  console.log(params)
    const response  =await customFetch(url,{params});
       const books=response.data;
        return {books,params}


}
const Listing = () => {
  return (

    <>
        <SubPageHero/>
        <div className="px-10   max-w-7xl mx-auto z-10 relative py-10 ">
          <SectionTitle text='Books'/>

            <ItemGrid/>
        </div>

    </>

  )
}

export default Listing