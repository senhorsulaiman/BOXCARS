import React from 'react'
import Hero from '../components/Hero'
import Brands from '../components/Brands';
import FeaturedListing from '../components/FeaturedListing';
import FilterHome from '../components/FilterHome';
import WhyUs from '../components/WhyUs';
import PopularMakes from '../components/PopularMakes';
import { customFetch, customFetch1 } from '../utils';
import StatsContainer from '../components/StatsContainer';

import Divider from '../components/Divider';
import LoanCalculator from '../components/LoanCalculator';
import AutoLoanContainer from '../components/AutoLoanContainer';
import ReviewContainer from '../components/ReviewContainer';
import { QueryClient } from '@tanstack/react-query';
const trimsUrl = '/api/trims?direction=asc&sort=id&year=2020&verbose=yes&limit=4'
const featureCarQuery={
  queryKey:['featuredCars'],
  queryFn:()=>customFetch1(trimsUrl)
}

export const loader =(queryClient)=> async ({ request }) => {
  //const response = await customFetch1(trimsUrl)
   const response = await queryClient.ensureQueryData(featureCarQuery)
  //console.log(response)
  const meta = response.data;
  const listings = response.data.data;
  return { listings,meta}
}
const Landing = () => {
  return (
    <>
      <Hero />
      <Brands />
      <StatsContainer />
      <Divider />
      <FeaturedListing title='Featured Listings' />
      <AutoLoanContainer />
      <WhyUs />
      <ReviewContainer/>
    </>
  )
}

export default Landing