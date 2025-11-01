
import React from 'react'
import { Form, NavLink, redirect, useNavigate } from 'react-router-dom'
import FormInput from '../components/FormInput'
import { toast } from 'react-toastify'
import { customFetch } from '../utils'
import { loginUser } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'
export const action=(store)=>async({request})=>{

        const formData=await request.formData()
        const data=Object.fromEntries(formData)

      try{
        const response=await customFetch.post('auth/local',data)
        store.dispatch(loginUser(response.data))
        toast.success('Logged in Successfully')
        // console.log(response)
        return redirect('/')
       
    }
    catch(error){
        const errorMessage=error?.response?.data?.error.message || "Invalid Credentials";
        // console.log(error)
        toast.error(errorMessage)
        return null
    }


}
const Login =() => {
        const dispatch=useDispatch()
        const navigate=useNavigate()
        const loginAsGuestUser=async ()=>{
            try{
            const response=await customFetch.post('auth/local',{
                "identifier":"test@test.com","password":"secret"
            })
            dispatch(loginUser(response.data))
            toast.success('Logged in as Guest user')
            return navigate('/')
            }
            catch(error){
                // const errorMessage=error?.response?.data?.error.message || "Invalid Credentials";
                console.log(error)
                  toast.error('guest user login error please try agin');
                //toast.error(errorMessage)
                //return null
            }


         }

    const inputStyle='input border-1  border-gray-400 focus:outline-0 bg-transparent  py-2 w-full'
  return (
    <section className='h-screen grid place-items-center '>

        <Form method='POST' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>

            <h4 className='text-center text-3xl font-bold'>Login</h4>
            <FormInput label="email" name="identifier" type="email" styles={inputStyle}  />
            <FormInput label="password" name="password" type="password" styles={inputStyle}  />
            <div className='mt-4 flex flex-col gap-y-1'>
                <button type='submit' className='btn btn-primary w-full'>Login</button>
                <button type='button'  className='btn btn-secondary  text-base-100 w-full' onClick={loginAsGuestUser}>Guest User</button>
            </div>
            <p className='text-center'>New User? <NavLink to="/register" className='font-bold'>Register </NavLink> here</p>


        </Form>

    </section>
  )
        }

export default Login
