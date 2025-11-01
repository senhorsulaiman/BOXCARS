import React, { useRef } from 'react'
import FormSelect from './FormSelect'
import { Form, Link, useLoaderData } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/filter/FilterSlice';
import BtnSubmit from './BtnSubmit';
const Filterby = () => {
      const {params,makes,models}=useLoaderData();
      const makesName=makes.map((item)=>item.name);
      const [listmakes,setListMakes]=useState(makesName);
      const {make,model}=params;
      const modelsWithCurrMake=models.filter((item)=>make==item.make.name);
      const modelsNamesWithCurrMake= modelsWithCurrMake.map((item)=>item.name);
      const [listmodels,setListModels]=useState(modelsNamesWithCurrMake)
      const myref=useRef()
      const handleChange=(myref)=>{
        const modelLists=models.filter((item)=>myref.current.value==item.make.name);
        const modelNames=modelLists.map((item)=>item.name);
        setListModels(modelNames)


      }

        return (
                <div>
                        <Form className=' bg-transparent lg:bg-base-100 lg:border-1 lg:border-base-300 lg:py-4 lg:px-7 flex flex-col gap-y-4 lg:flex-row lg:rounded-[80px] items-center gap-4 '>

                        <FormSelect defaultValue={make} ref={myref} name='make' change={()=>handleChange(myref)}  option={listmakes} styles='border-1 lg:border-0 outline-0 focus:outline-0 rounded-[12px]  bg-base-100 lg:bg-base  w-[214px] h-[50px] lg:h-[36px] text-[15px] px-3' />
                        <FormSelect defaultValue={model}  name='model' option={listmodels} styles='border-1 lg:border-0 outline-0 focus:outline-0 rounded-[12px]  bg-base-100 lg:bg-base  w-[214px] h-[50px] lg:h-[36px] text-[15px] px-3' />

                        <BtnSubmit text='search' />

                        </Form>
                </div>
        )
}

export default Filterby
