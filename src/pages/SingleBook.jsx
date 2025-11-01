import React from 'react'
import { customFetch } from '../utils'
import { useLoaderData } from 'react-router-dom'
import Hero from '../components/Hero'
import Divider from '../components/Divider'
import { BookCheck } from 'lucide-react'
import { BookOpenText } from 'lucide-react'
import { Calendar } from 'lucide-react'
export const  loader=async ({params})=>{
    const newNumber=params.number;
    const orgNumber=newNumber-1;
    const response=await customFetch(`/books?index=${orgNumber}`)
    // console.log(response.data)
    return {book:response.data}
}
const SingleBook = () => {
     const { book } = useLoaderData()
  const {number, title, cover, releaseDate, description,
                    pages, originalTitle
                } = book
  return (

    <>
            <div className='h-[100px] w-full mt-[-100px] relative bg-black text-base-100'>


            </div>

             <div className="px-10   max-w-4xl mx-auto z-10 relative py-10 ">


                <div key={title} className='border-base-300 border-1 p-0 rounded-[16px] overflow-hidden'>

                         <div className='  px-7 items-center '>
                            <div className="flex justify-around gap-4 py-3">
                                <span className='flex flex-col items-center w-max gap-0.5 text-black text-[12px] text-center'>
                                    <BookCheck className='size-4' />
                                    {originalTitle}


                                </span>
                                <span className='flex flex-col items-center w-max gap-0.5 text-black text-[12px] text-center'>

                                    <BookOpenText className='size-4' />
                                    {pages}

                                </span>
                                <span className='flex flex-col items-center w-max gap-0.5 text-black text-[12px] text-center'>
                                    <Calendar className='size-4' />

                                    {releaseDate}

                                </span>





                            </div>
                            <Divider />


                        </div>


                        <div className='px-7 py-2 '>

                            <h2 className='text-[18px] text-black mb-0.5 font-bold'> {title}</h2>
                            <span className='text-[14px] text-black'> {description}</span>
                        </div>







                   </div>
            </div>
    </>





  )
}

export default SingleBook
