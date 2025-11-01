
import React from 'react'
import { Form, NavLink, redirect } from 'react-router-dom'
import FormInput from '../components/FormInput'
import { customFetch } from '../utils'
import { toast } from 'react-toastify'
export const action=async({request})=>{
    const formData=await request.formData()
    const data=Object.fromEntries(formData)
    try{
        const response=await customFetch.post('auth/local/register',data)
        toast.success('account created sucessfully')
        return redirect('/login')
    }
    catch(error){
        const errorMessage=error?.response?.data?.error.message || "Invalid Credentials";
        toast.error(errorMessage)
        return null
    }
}
const Register = () => {

    const inputStyle='input border-1  border-gray-400 focus:outline-0 bg-transparent  py-2 w-full'
  return (
    <section className='h-screen grid place-items-center '>

        <Form method='POST' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>

            <h4 className='text-center text-3xl font-bold'>Register</h4>
            <FormInput label="username" name="username" type="text" styles={inputStyle} defaultValue='james999 smith' />
            <FormInput label="email" name="email" type="email" styles={inputStyle} defaultValue='james999@gmail.com' />
            <FormInput label="password" name="password" type="password" styles={inputStyle} defaultValue='secret' />
            <div className='mt-4 flex flex-col gap-y-1'>
                <button type='submit' className='btn btn-primary w-full'>Register</button>

            </div>
                <p className='text-center'>Already a member? <NavLink to="/login" className='font-bold'>Login</NavLink></p>



        </Form>

    </section>
  )
}

export default Register
