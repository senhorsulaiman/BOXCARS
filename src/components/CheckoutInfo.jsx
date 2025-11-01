import React from 'react'
import { useSelector } from 'react-redux'
import { formatPrice } from '../utils'

const CheckoutInfo = () => {
  if(useSelector((state)=>state.checkoutState.checkOutItem)==null){

    return(<>
    </>)
  }
    const {name,price}=useSelector((state)=>state.checkoutState.checkOutItem.checkout)

  return (

        <div className='card bg-base-200 mb-8 '>
            <div className="card-body">
                {/* Name*/}
                <p className='flex justify-between text-xs border-b border-base-300 pb-2'>

                    <span>Name</span>
                    <span className='font-bold'>{name}</span>
                </p>
                {/*Prices*/}
                <p className='flex justify-between text-xs border-b border-base-300 pb-2'>

                    <span>Price</span>
                    <span className='font-bold'>{formatPrice(price) }</span>
                </p>
            </div>

        </div>
  )
}

export default CheckoutInfo
