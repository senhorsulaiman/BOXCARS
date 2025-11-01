import React, { useState } from 'react'
import SingleReview from './SingleReview';
import { nanoid } from 'nanoid';


const reviews = [
    {
        id: nanoid(),
        name: 'susan smith',
        job: 'Facebook',
        image: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "“I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.”",
    },
    {
        id: nanoid(),
        name: 'anna johnson',
        job: 'Designer',
        image: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: "“I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.”",
    },
    {
        id: nanoid(),

        name: 'peter jones',
        job: 'Marketing',
        image: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: "“I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.”",
    },
     {
        id: nanoid(),

        name: 'peter jones',
        job: 'Marketing',
        image: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: "“I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.”",
    },

];
const icon=<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5_4469)">
<path d="M9.17652 7.12979L4.02083 12.2898C3.86096 12.4498 3.66779 12.5298 3.44131 12.5298C3.21484 12.5298 3.015 12.4498 2.84181 12.2898C2.66863 12.1298 2.58203 11.9298 2.58203 11.6898C2.58203 11.4498 2.67529 11.2498 2.8618 11.0898L7.41799 6.52979L2.8618 1.96979C2.67529 1.80979 2.58203 1.60979 2.58203 1.36979C2.58203 1.12979 2.66863 0.929786 2.84181 0.769786C3.015 0.609785 3.21484 0.529785 3.44131 0.529785C3.66779 0.529785 3.86096 0.609785 4.02083 0.769786L9.17652 5.92979C9.36303 6.08979 9.45628 6.28979 9.45628 6.52979C9.45628 6.76979 9.36303 6.96979 9.17652 7.12979Z" fill="#050B20"/>
</g>
<defs>
<clipPath id="clip0_5_4469">
<rect width="11.96" height="12" fill=""  transform="matrix(1 0 0 -1 0.0195312 12.5298)"/>
</clipPath>
</defs>
</svg>


const Review = () => {
    const [people, setPeople] = useState(reviews);
    const [currPerson, setCurrentPerson] = useState(0);

    const prevSlide = () => {

        setCurrentPerson((oldPerson) => {

            const result = (oldPerson - 1 + people.length) % people.length;
            return result
        })
    }
    const nextSlide = () => {

    setCurrentPerson((oldPerson) => {
        // f  0+1%3=0 100*    100*(0 - 0) 0%  100*(0 - 0) 0% 100*(0 - 0) 0%
        //    0+1%3=1 100*    100*(0 - 1) -100%  100*(0 - 1) 0% 100*(0 - 1) 100%
        //   1+1%3=2
        //   2+1%3=0
        const result = (oldPerson + 1) % people.length;
        return result
    })
    }
    return (
        <div className='max-w-full'>
            <div className='flex gap-4 overflow-x-hidden  flex-nowrap '>
                {people.map((item, index) => {
                    return (
                        <SingleReview key={index} item={item} currIndex={index} currPerson={currPerson} />
                    )
                })}

            </div>
            <div className='mt-4 flex gap-1'>
                    <button className=' btn-sm btn rounded-[8px] ' onClick={prevSlide}> <span className='scale-x-[-1]'>{icon}</span>
                    </button>
                    <button className=' btn-sm btn rounded-[8px]' onClick={nextSlide}>{icon}
                    </button>
            </div>






        </div>
    )
}

export default Review
