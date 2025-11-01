import { Users } from 'lucide-react'
import { DoorClosed } from 'lucide-react'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { savetoClipboard } from '../utils'
import { useSelector } from 'react-redux'

const CarDetails = () => {

    const {car}=useLoaderData()
   

    console.log(car)
    const trimbody=car.make_model_trim_body;
    const trimengine=car.make_model_trim_engine;
    const colors=car.make_model_trim_exterior_colors;
    const trimMileage=car.make_model_trim_mileage;
    // console.log(colors)
// :
// "I4"
// drive_type
// :
// "front wheel drive"
// engine_type
// :
// "gas"
// fuel_type
// :
// "premium unleaded (required)"
// horsepower_hp
// :
// 188
// horsepower_rpm

     const {doors,seats,wheel_base
}=trimbody;

     const {drive_type, engine_type,horsepower_rpm
}=trimengine;
     const {battery_capacity_electric, fuel_tank_capacity
}=trimMileage


  return (
    < >

        <div className='flex flex-col p-4 border-[#E9E9E9] border-1 mt-4 mx-auto hover:bg-gray-300 gap-y-3 rounded-[16px]  max-w-6xl'>


            <p><strong>Doors:</strong> {doors}</p>
            <p><strong>Seats:</strong> {seats}</p>
            <p><strong>wheel_base
:</strong> {wheel_base
}</p>

        </div>

          <div className='flex flex-col p-4 border-[#E9E9E9] border-1 mt-4 mx-auto hover:bg-gray-300 gap-y-3 rounded-[16px]  max-w-6xl'>


            <p><strong>drive_type:</strong> {drive_type}</p>
            <p><strong>engine_type:</strong> {engine_type}</p>
            <p><strong>horsepower_rpm
:</strong> {horsepower_rpm
}</p>

        </div>
         <div className='flex flex-col p-4 border-[#E9E9E9] border-1 mt-4 mx-auto hover:bg-gray-300 gap-y-3 rounded-[16px]  max-w-6xl'>


            <p><strong> fuel_tank_capacity:</strong> { fuel_tank_capacity}</p>


        </div>
        <div className='flex flex-row p-4 gap-4 border-[#E9E9E9] border-1 mt-4 mx-auto hover:bg-gray-300 gap-y-3 rounded-[16px]  max-w-6xl'>

            {colors.map((item,index)=>{

                return(
                 <button  key={index} className={`border-1 w-8 h-8 block  rounded-full cursor-pointer` }   style={{backgroundColor:`rgb(${item.rgb})`}}> </button>)

            })}
        </div>

{/* :

:
null
combined_mpg
:
30
epa_city_mpg
:
27
epa_city_mpg_electric
:
null
epa_combined_mpg_electric
:
null
epa_highway_mpg
:
35
epa_highway_mpg_electric
:
null
epa_kwh_100_mi_electric
:
null
epa_time_to_charge_hr_240v_electric
:
null
fuel_tank_capacity
:
"15.3"
id
:
6373
make_model_trim_id
:
6373
range_city
:
413
range_electric
:
null
range_highway
:
536 */}

    </>
  )
}

export default CarDetails
