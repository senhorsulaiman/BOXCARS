import React, { useEffect, useState } from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

const Pagination = () => {

    const { meta } = useLoaderData();

    const { pages, count, total } = meta.collection;

    const pagenos = Array.from({ length: pages }, (_, index) => {
        return index + 1
    })


    const { search, pathname } = useLocation()


    const navigate = useNavigate();

    const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set('page', pageNumber)
        navigate(`${pathname}?${searchParams.toString()}`)
    }

        // console.log(count)
        // console.log(count)
      if (pages < 2) return null
        return (

        <div className='mt-16 flex justify-start'>

            <div className='join'>

                <button className='btn btn-sm join-item'>Prev</button>
                {pagenos.map((item) => {
                    return <button key={item} className='btn btn-sm join-item' onClick={() => handlePageChange(item)}>{item}</button>
                })}
                <button className='btn btn-sm join-item'>Next</button>
            </div>

        </div>
    )

}

export default Pagination
