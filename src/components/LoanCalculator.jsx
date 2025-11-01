import { Form, Link } from 'react-router-dom';
import FormInput from './FormInput'
import React, { useRef, useState } from 'react'
import { calculateLoanDetails } from '../utils';
import { toast } from 'react-toastify';
const LoanCalculator = () => {
  const inputStyles = 'h-[57px] text-[15px] text-black pt-[20px] w-full rounded-[12px] border-[#E9E9E9] border-1 px-5 bg-white focus:outline-none'
  const [principle,setPrinciple]=useState()
  const [rate,setRate]=useState()
  const [year,setYear]=useState()
  const [emis,setEmis]=useState();
  const [totalAmounts,settotalAmounts]=useState();
  const [totalInterests,settotalInterests]=useState();
  const handleClear=()=>{

    setPrinciple('');
    setRate('');
    setYear('');
    setEmis('')
    settotalAmounts('')
    settotalInterests('')


  }
  const handleSubmit=()=>{
      if(principle<10000){
        toast.error("amount should be grater than 1000")
        return
      }
      if(rate<1){
        toast.error("rate should be grater than 0")
        return
      }
      if(year<1){
        toast.error("yeart should be grater than 0")
        return
      }
      const  {emi,totalAmount,totalInterest}=calculateLoanDetails(principle,rate,year)

      setEmis(emi)
      settotalAmounts(totalAmount)
      settotalInterests(totalInterest)


  }


  return (
    <div className=' px-10'>
      <h2 className='text-[40px] mb-5 text-black'>Auto Loan Calculator</h2>
      <p className='text-[15px] text-[#050B20]'>Use this car payment calculator to estimate monthly payments on your next new or
        used auto loan.</p>



      <div className='flex gap-2 mt-4 h-[50px] text-black'>
        {principle>=10000&&rate>=1&&year>=1&&
          <> {emis&&<span className='text-[15px] '><strong>EMI:</strong>{emis}</span>}
            {totalAmounts&&<span className='text-[15px] '><strong>Total Amount:</strong>{totalAmounts}</span>}
            {totalInterests&&<span className='text-[15px] '> <strong>Total Interest:</strong>{totalInterests}</span>}
            </>

        }
      </div>





      <div className='py-10 grid grid-cols-2 gap-8'>
          <div className='relative'>
              <label htmlFor="" className='absolute top-[10px] px-5 text-[12px]'>Amount</label>
               <input placeholder=''  value={principle} onChange={(event)=> setPrinciple(event.target.value)}  type="number"  className={inputStyles} name="principle" id="" />
          </div>
          <div className='relative'>
                <label htmlFor="" className='absolute top-[10px] px-5 text-[12px]'>Interest rate</label>
                <input placeholder=''  value={rate} onChange={(event)=> setRate(event.target.value)}  type="number"   className={inputStyles} name="rate" id="" />
          </div>
          <div className='relative'>

              <label htmlFor="" className='absolute top-[10px] px-5 text-[12px]'>Year</label>

               <input placeholder=''  value={year} onChange={(event)=> setYear(event.target.value)}  type="number"  className={inputStyles} name="year" id="" />

          </div>
          <div className='grid grid-cols-2 gap-1'>

            <button type='button' onClick={handleSubmit} className='bg-primary  btn btn-lg text-white rounded-[16px] w-full border-0'>Calculate <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.033 0.159943H5.47745C5.26249 0.159943 5.08855 0.333886 5.08855 0.548844C5.08855 0.763802 5.26249 0.937745 5.47745 0.937745H13.0942L0.535816 13.4961C0.383895 13.648 0.383895 13.8941 0.535816 14.046C0.611759 14.1219 0.71129 14.1599 0.810785 14.1599C0.91028 14.1599 1.00978 14.1219 1.08575 14.046L13.6441 1.48764V9.10441C13.6441 9.31937 13.818 9.49331 14.033 9.49331C14.248 9.49331 14.4219 9.31937 14.4219 9.10441V0.548844C14.4219 0.333886 14.2479 0.159943 14.033 0.159943Z" fill="white" />
            </svg>
            </button>
            <button type='button'  onClick={handleClear} className='bg-base-100 btn btn-lg  rounded-[16px] w-full border-0'>Clear <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.033 0.159943H5.47745C5.26249 0.159943 5.08855 0.333886 5.08855 0.548844C5.08855 0.763802 5.26249 0.937745 5.47745 0.937745H13.0942L0.535816 13.4961C0.383895 13.648 0.383895 13.8941 0.535816 14.046C0.611759 14.1219 0.71129 14.1599 0.810785 14.1599C0.91028 14.1599 1.00978 14.1219 1.08575 14.046L13.6441 1.48764V9.10441C13.6441 9.31937 13.818 9.49331 14.033 9.49331C14.248 9.49331 14.4219 9.31937 14.4219 9.10441V0.548844C14.4219 0.333886 14.2479 0.159943 14.033 0.159943Z" fill="white" />
            </svg>
            </button>
          </div>








      </div>
      <div className='flex gap-1'>

      </div>

    </div>
  )
}

export default LoanCalculator
