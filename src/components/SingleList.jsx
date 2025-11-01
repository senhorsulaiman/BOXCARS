import React, { useState } from 'react'
import { formatPrice } from '../utils';
import sampleImage from '../assets/image.png'
import AudiImage from '../assets/Audi.png'

import BmwImage from '../assets/bmw.png'
import { Link, useNavigate } from 'react-router-dom';
import { addItem, removeItem } from '../features/collection/collectionSlice';
import { useDispatch, useSelector } from 'react-redux';
import Divider from './Divider';
import { toast } from 'react-toastify';

const SingleList = ({ list}) => {
       const user=useSelector((state)=>state.userState.user)
       const navigate=useNavigate()
     const collectionItems=useSelector((state)=>state.collectionState.collectionItems);

    const { created,
        description,
        id,
        make_model,
        make_model_id,
        msrp,
        name,
        year } = list;
        const savedID=id + make_model_id;



    const aedAmount = formatPrice(msrp)
    const [amount,setAmount]=useState(1)
    const [saved,setSave]=useState(false)


    const collectionCar = {
        collectionID: id + make_model_id,
      id,
        image: make_model.make.name=='Audi'?AudiImage:make_model.make.name=='BMW'?BmwImage:sampleImage,
        make: make_model.make.name,
        model: make_model.name,
        price: formatPrice(msrp),
        year,
        amount,
        saved

    }

    const dispatch = useDispatch()

    const toggleCollection= (ID) => {
        if(!user){
            toast.success('login to continue')
             return navigate('/login')
            }
         const savedItem=collectionItems?.find((item)=>item.collectionID==ID)

        if(savedItem){
                const {collectionID}=savedItem
                dispatch(removeItem({collectionID}))
        }else{
              dispatch(addItem({car:collectionCar}))
        }



    }

    return (
        <div className='border-base-200 border-1 p-0 rounded-[16px] overflow-hidden flex flex-col relative '>

            <button  onClick={()=>toggleCollection(savedID)}
            className={collectionItems?.find((i)=>i.collectionID===savedID)?'bg-primary cursor-pointer w-[40px] h-[40px] rounded-full absolute top-2 right-2 flex items-center justify-center':'bg-white cursor-pointer w-[40px] h-[40px] rounded-full absolute top-2 right-2 flex items-center justify-center'}>
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_5_152)">
                    <path d="M9.40031 12.53C9.16031 12.53 8.93365 12.4634 8.72031 12.33L6.12031 10.69C6.04031 10.6367 5.96031 10.6367 5.88031 10.69L3.28031 12.33C3.04031 12.49 2.77365 12.55 2.48031 12.51C2.18698 12.47 1.93365 12.3567 1.72031 12.17C1.45365 11.93 1.32031 11.6234 1.32031 11.25V1.81003C1.32031 1.46336 1.44698 1.16336 1.70031 0.910029C1.95365 0.656696 2.25365 0.530029 2.60031 0.530029H9.40031C9.74698 0.530029 10.047 0.656696 10.3003 0.910029C10.5536 1.16336 10.6803 1.46336 10.6803 1.81003V11.25C10.6803 11.5967 10.5536 11.8967 10.3003 12.15C10.047 12.4034 9.74698 12.53 9.40031 12.53ZM6.00031 9.61003C6.24031 9.61003 6.46698 9.6767 6.68031 9.81003L9.28031 11.45C9.30698 11.4767 9.34698 11.49 9.40031 11.49C9.45365 11.49 9.50031 11.47 9.54031 11.43C9.58031 11.39 9.60031 11.33 9.60031 11.25V1.81003C9.60031 1.73003 9.58031 1.67003 9.54031 1.63003C9.50031 1.59003 9.45365 1.57003 9.40031 1.57003H2.60031C2.54698 1.57003 2.50031 1.59003 2.46031 1.63003C2.42031 1.67003 2.40031 1.73003 2.40031 1.81003V11.25C2.40031 11.33 2.43365 11.3967 2.50031 11.45C2.56698 11.5034 2.64031 11.5034 2.72031 11.45L5.32031 9.81003C5.53365 9.6767 5.76031 9.61003 6.00031 9.61003Z" fill={collectionItems?.find((i)=>i.collectionID===savedID)?'white':'#050B20'}/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5_152">
                    <rect width="12" height="12" fill="white" transform="matrix(1 0 0 -1 0 12.53)"/>
                    </clipPath>
                    </defs>
                </svg>
            </button>

            <img src={make_model.make.name=='Audi'?AudiImage:make_model.make.name=='BMW'?BmwImage:sampleImage} alt="" className='w-full h-[218px]' />
            <div className='px-8 pb-6 bg-base-100'>

                <h2 className='mt-4 text-[18px]  font-medium '>{make_model.make.name}  – {year}</h2>
                <p className=' text-[15px]  pb-4'>{make_model.name}</p>
                {/* <ul className='flex text-[14px] gap-4 mt-1 items-center justify-evenly  text-black list-disc'>
                    <li className=' w-max'>{make_model.name}</li>
                    <li className=' w-max'>{year}
                    </li>
                    <li className=' w-max'>{name}
                    </li>

                </ul> */}
                {/* <Divider/> */}
                <div className='flex items-center justify-between'>

                      <p className='text-[20px] mt-5'>
                    {aedAmount}


                </p>

                 <Link to={`/listing/${id}`} className='text-primary mt-auto text-[12px] px-0     flex gap-1 items-center justify-start'>
                    <span>View Details</span>
                    <span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1111 0.630127H5.55557C5.34061 0.630127 5.16667 0.80407 5.16667 1.01903C5.16667 1.23399 5.34061 1.40793 5.55557 1.40793H13.1723L0.613941 13.9663C0.46202 14.1182 0.46202 14.3643 0.613941 14.5162C0.689884 14.5921 0.789415 14.6301 0.88891 14.6301C0.988405 14.6301 1.0879 14.5921 1.16388 14.5162L13.7222 1.95783V9.5746C13.7222 9.78956 13.8961 9.9635 14.1111 9.9635C14.3261 9.9635 14.5 9.78956 14.5 9.5746V1.01903C14.5 0.80407 14.326 0.630127 14.1111 0.630127Z" fill="#405FF2" />
                    </svg>
                    </span>
                </Link>
                </div>





            </div>
        </div>
    )
}

export default SingleList
