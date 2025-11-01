import React from 'react'
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import Audi from '../assets/Audi.svg'
import BMW from '../assets/BMW.svg'
import Mercedes from '../assets/Mercedes.svg'
import Volkswagen from '../assets/Volkswagen.svg'
import Nissan from '../assets/Nissan.svg'
import Jeep from '../assets/jeep.png'
import Bentley from '../assets/Bentley.svg'
import Ford from '../assets/Ford.svg'
import { nanoid } from 'nanoid'




const PremiumBrand = () => {
        const brands = [
          {id:nanoid(),

            brand:'BMW',
            img:BMW
          },
           {id:nanoid(),

            brand:'Audi',
            img:Audi
          },
          {id:nanoid(),

            brand:'Nissan',
            img:Nissan
          },
           {id:nanoid(),

            brand:'Volkswagen',
            img:Volkswagen
          },
          {id:nanoid(),

            brand:'Mercedes',
            img:Mercedes
          },
          {id:nanoid(),

            brand:'Jeep',
            img:Jeep
          },
          {id:nanoid(),

            brand:'Bentley',
            img:Bentley
          },
             {id:nanoid(),

            brand:'Ford',
            img:Ford
          },]

  return (
    <div  className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4'>
        {brands.map((item)=>{

            const {id,brand,img}=item
            return(
                <Link to={`listings?make=${brand}`} key={id} className='cursor-pointer h-[119px] flex flex-col items-center border-base-300 border-1 rounded-[16px]' onClick={()=>handlePageChange(item)}>

                <img className='h-[70px] w-[70px] inline-block' src={img}/>
                <span className='text-[16px]   text-center text-nowrap'> {brand}</span>
                 </Link>


            )
        })}

    </div>
  )
}

export default PremiumBrand
