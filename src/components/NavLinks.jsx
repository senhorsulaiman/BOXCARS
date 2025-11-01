import { nanoid } from 'nanoid';
import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const links = [
    { id: nanoid(), url: '/', text: 'home' },
     { id: nanoid(), url: 'listings', text: 'Listings' },
      { id: nanoid(), url: 'collections', text: 'collections' },

    { id: nanoid(), url: 'About', text: 'About' },

       { id:nanoid(), url: 'Checkout', text: 'Checkout' },


];


const NavLinks = () => {
  const numofItemsinCollection=useSelector((state)=>state.collectionState.numItemsInCollection)
  const user=useSelector((state)=>state.userState.user)
  return (
    <div className='hidden gap-8 items-center  lg:flex' >
        {links.map((link)=>{
            const {id,url,text}=link
           if(url==='collections'&!user) return null
            if(url==='Checkout'&!user ) return null
            return(

                <button key={id}><NavLink className='capitalize   ' to={url}>{text}</NavLink></button>


            )





        })}

    </div>
  )
}

export default NavLinks
