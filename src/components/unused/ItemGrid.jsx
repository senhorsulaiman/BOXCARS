import { Calendar } from 'lucide-react'
import { BookCheck } from 'lucide-react'
import { BookOpenText } from 'lucide-react'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Divider from './Divider'
const ItemGrid = () => {
    const { books} = useLoaderData()
    // console.log(books)

    return (
        <div className='grid  grid-cols-4 gap-8'>
            {books.map((book) => {


                const {number, title, cover, releaseDate, description,
                    pages, originalTitle
                } = book;

                return (

                    <div key={title} className='border-[#E9E9E9] border-1 p-0 rounded-[16px] overflow-hidden flex flex-col'>

                        <img src={cover} alt="" className='w-full h-[218px]' />
                        <div className='px-7 py-2 '>

                            <h2 className='text-[14px] text-black mb-0.5'> {title}</h2>
                            <span className='text-[12px] text-black'> {description.substring(0, 25)}...</span>
                        </div>



                        <div className='  px-7 items-center '>

                            <Divider />
                            <div className="flex justify-around gap-4 py-3">
                                <span className='flex flex-col items-center w-max gap-0.5 text-black text-[12px] text-center'>
                                    <BookCheck className='size-4' />
                                    {originalTitle.substring(20,)}


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

                        <Link to={`/books/${number}`} className='text-[#405FF2] mt-auto text-[12px] px-7 py-3  flex gap-1 items-center justify-end'>
                            <span>View Details</span>
                            <span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1111 0.630127H5.55557C5.34061 0.630127 5.16667 0.80407 5.16667 1.01903C5.16667 1.23399 5.34061 1.40793 5.55557 1.40793H13.1723L0.613941 13.9663C0.46202 14.1182 0.46202 14.3643 0.613941 14.5162C0.689884 14.5921 0.789415 14.6301 0.88891 14.6301C0.988405 14.6301 1.0879 14.5921 1.16388 14.5162L13.7222 1.95783V9.5746C13.7222 9.78956 13.8961 9.9635 14.1111 9.9635C14.3261 9.9635 14.5 9.78956 14.5 9.5746V1.01903C14.5 0.80407 14.326 0.630127 14.1111 0.630127Z" fill="#405FF2" />
                            </svg>
                            </span>
                        </Link>




                    </div>
                )
            })}
        </div>
    )
}

export default ItemGrid