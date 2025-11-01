import React from 'react'
import LoanCalculator from './LoanCalculator'
import autoLoan from '../assets/calculator.png'
const AutoLoanContainer = () => {
  return (
    <div className='max-w-[1800px]  bg-[#EEF1FB] grid lg:grid-cols-2 mx-auto rounded-[16px] overflow-hidden mb-14'>
            <div className='flex items-center  justify-center h-[600px] '>
                <LoanCalculator/>
            </div>

            <div className='h-[400px] lg:h-[600px]  hidden lg:block bg-cover '  style={{backgroundImage:`url(${autoLoan})`}}>


            </div>
    </div>
  )
}

export default AutoLoanContainer
