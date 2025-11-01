import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {  HomeLayout,About, Landing,Listings,Collections, Register, SingleDetail,Error,Login, Checkout } from './pages'
import ErrorElement from './components/ErrorElement'
//loaders
import { loader as landingLoader} from './pages/Landing'
import { loader as listingsLoader} from './pages/Listings'
import { loader as carLoader} from './pages/SingleDetail'
//actions
import {action as registerAction} from "./pages/Register"
import {action as loginAction} from "./pages/Login"
import { store } from './store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient=new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000 *60*5,
    }
  }
})
const router=createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/> ,
    errorElement: <Error />,
    children:[{
      index:true,
       element:<Landing/> ,
       loader:landingLoader(queryClient),
       errorElement:<ErrorElement/>

    },{


    path:'/about',
    element:<About/> ,

    },

   {

    path:'/listings',
    element:<Listings/> ,
    loader:listingsLoader(queryClient),
     errorElement:<ErrorElement/>,

  },
  {

    path:'/collections',
    element:<Collections/> ,
     errorElement:<ErrorElement/>,

  },
  {

    path:'/listing/:id',
    element:<SingleDetail/> ,
    loader:carLoader(queryClient),
    errorElement:<ErrorElement/>,

  },
  {


    path:'/checkout',
    element:<Checkout/> ,

    },
    ]
  },
  {
    path:'/register',
    element:<Register/>,
    errorElement:<Error/>,
    action:registerAction
  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<Error/>,
    action:loginAction(store)
  },


])

function App(){

  return (
    <>
    <QueryClientProvider client={queryClient}>

          <RouterProvider router={router}/>

          <ReactQueryDevtools initialIsOpen={true} />

    </QueryClientProvider>
    </>

  )
}

export default App
