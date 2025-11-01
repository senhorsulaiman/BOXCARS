import React from 'react'

import VehicleType from './VehicleType'
import FormSelect from './FormSelect'
import { Form, Link, useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom'


const FilterHome = () => {

    // const {params,makes,models}=useLoaderData()
    //  const makesName=makes.map((item)=>item.name)
    //  const modelsName=models.map((item)=>item.name)
    //  const {make,model}=params;



    return (
        <div className='absolute top-1/2 left-1/2 translate-[-50%] flex flex-col items-center'>

            <h2 className='text-[30px] lg:text-[70px] text-white mb-[20px] lg:mb-[89px] text-center'>Find Your Perfect Car</h2>
               {/* <Form className=' bg-transparent lg:bg-white lg:py-4 lg:px-7 flex flex-col gap-y-4 lg:flex-row lg:rounded-[80px] items-center gap-4'>

                    <FormSelect defaultValue={make} name='make' option={makesName} styles='border-0 outline-0 focus:outline-0 rounded-[12px] bg-white lg:bg-transparent  w-[214px]  h-[50px] lg:h-[36px] text-[15px] px-3' />
                    <FormSelect defaultValue={model} name='model' option='' styles='border-0 outline-0 focus:outline-0 rounded-[12px]  bg-white lg:bg-transparent  w-[214px] h-[50px] lg:h-[36px] text-[15px] px-3' />





                </Form>
                  <button onClick={()=>handlePageChange()}     className='bg-[#405FF2] h-[55px]  text-white px-14 rounded-[60px] flex items-center gap-1'><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.15781 0.790088C5.12448 0.790088 4.18281 1.04009 3.33281 1.54009C2.48281 2.04009 1.79948 2.72342 1.28281 3.59009C0.766146 4.45675 0.507812 5.39842 0.507812 6.41509C0.507812 7.43175 0.766146 8.37342 1.28281 9.24009C1.79948 10.1068 2.48281 10.7901 3.33281 11.2901C4.18281 11.7901 5.12448 12.0401 6.15781 12.0401C6.79115 12.0401 7.40781 11.9318 8.00781 11.7151C8.60781 11.4984 9.15781 11.2068 9.65781 10.8401L12.0078 13.1401C12.1078 13.2734 12.2495 13.3401 12.4328 13.3401C12.6161 13.3401 12.7661 13.2818 12.8828 13.1651C12.9995 13.0484 13.0578 12.8984 13.0578 12.7151C13.0578 12.5318 12.9911 12.3901 12.8578 12.2901L10.5578 9.94009C10.9245 9.44009 11.2161 8.89009 11.4328 8.29009C11.6495 7.69009 11.7578 7.07342 11.7578 6.44009C11.7578 5.40675 11.5078 4.45675 11.0078 3.59009C10.5078 2.72342 9.82448 2.04009 8.95781 1.54009C8.09115 1.04009 7.15781 0.790088 6.15781 0.790088ZM6.15781 2.04009C6.95781 2.04009 7.69115 2.24009 8.35781 2.64009C9.02448 3.04009 9.54948 3.57342 9.93281 4.24009C10.3161 4.90675 10.5078 5.63175 10.5078 6.41509C10.5078 7.19842 10.3161 7.93175 9.93281 8.61509C9.54948 9.29842 9.02448 9.83175 8.35781 10.2151C7.69115 10.5984 6.95781 10.7901 6.15781 10.7901C5.35781 10.7901 4.62448 10.5984 3.95781 10.2151C3.29115 9.83175 2.75781 9.29842 2.35781 8.61509C1.95781 7.93175 1.75781 7.19842 1.75781 6.41509C1.75781 5.63175 1.95781 4.90675 2.35781 4.24009C2.75781 3.57342 3.29115 3.04009 3.95781 2.64009C4.62448 2.24009 5.35781 2.04009 6.15781 2.04009Z" fill="white" />
                    </svg>


                        Search Cars

                        </button>

            <h2 className='text-white text-[15px] my-[20px] lg:mt-[68px] lg:mb-[35px]'>Or Browse Featured Model</h2>
            <VehicleType  styles='bg-[#ffffff26] flex rounded-[40px] px-8 py-3 text-[12px] md:text-[15px] lg:text-[18px] item-center text-white' mainStyle='flex gap-4 flex-wrap justify-center '/> */}


        </div>
    )
}

export default FilterHome
