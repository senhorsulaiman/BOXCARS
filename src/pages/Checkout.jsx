import React from 'react'
import CheckoutInfo from '../components/CheckoutInfo'
import CheckoutForm from '../components/CheckoutForm'

const Checkout = () => {
  return (
    <div className="max-w-7xl  mt-8 w-7xl mx-auto">
      
      <div className="bg-base-300  grid  sm:grid-cols-2 gap-14 p-10  rounded-2xl   " >
        <CheckoutForm/>
        <CheckoutInfo/>
      </div>

    </div>
  )
}

export default Checkout
