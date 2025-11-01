import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SUV from '../assets/SUV.svg'
import Sedan from '../assets/sedan.png'
import Coupe from '../assets/Coupe.png'
import Hatchback from '../assets/Hatchback.png'
import Van from '../assets/Van.png'
const VehicleType = ({styles,mainStyle}) => {
    const types=['SUV','Sedan','HatchBack','Coupe']



  return (
     <div  className={mainStyle}>
        {types.map((item,index)=>{



            return(
                <div key={index} className={styles}>

                    <span>

                        {item=='SUV'?<img src={SUV} alt="" className='hidden'/> :

                               item=='Sedan'?<img src={Sedan} alt="" className='hidden' /> :
                                 item=='Coupe'?<img src={Coupe} alt="" className='hidden'/> :
                                      item=='Hatchback'?<img src={Hatchback} alt="" className='hidden'/> :
                                       item=='Van'?<img src={Van} alt="" className='hidden'/> :


                  ''}
                    </span>
                     <span className=''> {item}</span>



                  </div>
            )
        })}

    </div>
  )
}

export default VehicleType
