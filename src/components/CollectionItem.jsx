import React from 'react'
import Divider from './Divider'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/collection/collectionSlice';
import { Trash2 } from 'lucide-react';

const CollectionItem = ({ collectionItem }) => {

    const { collectionID, id,
        image,
        make,
        model,
        price,
        year,
        amount } = collectionItem;
    const dispatch = useDispatch()
    const removeItemFromTheCollection = () => {
        dispatch(removeItem({ collectionID }))
    }

    return (
        <div >
            <div className='grid grid-cols-2 shrink-0'>

                <div style={{ backgroundImage: `url(${image})` }} className=' h-[273px] relative block  bg-cover bg-center'>
                </div>
                <div className='bg-[#373948] px-8 py-6  flex flex-col  h-[273px] text-white'>
                    <div>
                        <h2 className='text-[18px]'>{make} {model} {year}</h2>

                        <h6 className='text-[14px] my-2'>{price}</h6>


                    </div>
                    <div className='flex justify-between mt-auto items-center w-full'>

                        <Link to={`/listing/${id}`} className='  text-[12px]  text-white flex gap-1 items-center justify-start'>
                            <span>View Details</span>
                            <span>
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6111 0H5.05557C4.84061 0 4.66667 0.173943 4.66667 0.388901C4.66667 0.603859 4.84061 0.777802 5.05557 0.777802H12.6723L0.113941 13.3362C-0.0379804 13.4881 -0.0379804 13.7342 0.113941 13.8861C0.189884 13.962 0.289415 14 0.38891 14C0.488405 14 0.5879 13.962 0.663879 13.8861L13.2222 1.3277V8.94447C13.2222 9.15943 13.3961 9.33337 13.6111 9.33337C13.8261 9.33337 14 9.15943 14 8.94447V0.388901C14 0.173943 13.826 0 13.6111 0Z" fill="white"/>
</svg>

                            </span>
                        </Link>
                         <button className='btn-sm btn border-1  text-white shadow-none  bg-transparent   rounded-2xl flex gap-1' onClick={removeItemFromTheCollection}><Trash2 size='14'/>remove</button>

                    </div>




                </div>
            </div>

        </div>
    )
}

export default CollectionItem
