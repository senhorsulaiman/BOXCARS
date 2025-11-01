import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomeLayout = () => {
    const navigation=useNavigation()
    const isPageLoading=navigation.state==='loading'
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar/>
        {isPageLoading?<Loading/>:
        <>
            <Outlet/>
        </>

       }
        <Footer/>
    </div>
  )
}

export default HomeLayout