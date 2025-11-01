
import React from 'react'
import { Form } from 'react-router-dom'
import FormInput from './FormInput'
export const action=(store)=>async({request})=>{
  const formData=await request.formData()

}
const CheckoutForm = () => {

   const inputStyle='input border-1  border-base-300 focus:outline-0 bg-transparent  py-2 w-full'
   return (
    <Form  method='POST' className='flex flex-col gap-y-4 '>
        <h4 className='font-medium text-xl capitalize'>shipping information</h4>
        <FormInput label='first name' name='name' type='text' styles={inputStyle}/>
        <FormInput label='address' name='address' type='text' styles={inputStyle}/>

        <div className='mt-4'>
              <button></button>
        </div>

    </Form>
  )
}

export default CheckoutForm
