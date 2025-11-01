
import React from 'react'
import { Link, useLoaderData, useLocation } from 'react-router-dom'
import SingleList from './SingleList'
import { useSelector } from 'react-redux'
const ListGrid = () => {
    const { listings,meta} = useLoaderData()
    const totals=meta.collection.total
    const { search, pathname } = useLocation()
      const searchParams = new URLSearchParams(search);
    // console.log(searchParams.size)
    return (

        <>
            <div className='flex justify-end items-center py-2'>
                {searchParams.size>0&& <button className='btn-xs btn bg-base-100  border-1 font-bold  '><Link to='/listings' className='flex items-center gap-1  '>Clear Search
                </Link></button>
                }
            </div>
            <div className={`grid grid-cols-2  lg:grid-cols-4 gap-8 max-h-[450px] ${listings.length>4?'overflow-y-scroll':''}`}>

                {listings?.map((list) => {



                    return (
                        <SingleList key={list.id} list={list} />

                    )
                })}
            </div>

        </>

    )




}

export default ListGrid