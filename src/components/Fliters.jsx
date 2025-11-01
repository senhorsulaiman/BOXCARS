import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
const Fliters = () => {
    const {params,makes,models}=useLoaderData()
    const carMake=makes.map((item,index)=>item.make_model.make.name );
    const newCarMake=carMake.filter((item, index) => carMake.indexOf(item) === index)
    const carModel=makes.map((item,index)=>item.make_model.name );
    const newCarModel=carModel.filter((item, index) => carModel.indexOf(item) === index)
    const {make,model}=params;


  return (
    <div>

        <Form className='bg-base-200 rounded-md px-4 py-4 flex justify-center gap-2 items-end'>
            <FormSelect  label='Make' defaultValue={make} name='make' option={newCarMake} styles='input border-1 border-black focus:outline-0 bg-transparent  py-2 w-[200px]'/>
            <FormSelect  label='Model' defaultValue={model} name='model' option={newCarModel}  styles='input border-1 border-black focus:outline-0 bg-transparent  py-2 w-[200px]'/>
            <button type='submit' className='bg-black btn-sm text-white border-1 border-gray-50 w-[200px] h-[40px] rounded-[12px]'>Search</button>
            <Link to='/cars' className='bg-transparent btn-sm w-[100px] h-[40px] border-1 border-black rounded-[12px] flex items-center justify-center text-black'>Clear</Link>
        </Form>



    </div>
  )
}

export default Fliters
