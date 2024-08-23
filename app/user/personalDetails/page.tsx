'use client'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'next/navigation'
import React from 'react'

const PersonalDetailsPage = () => {

  const router = useRouter()
  return (
    <div className="min-h-screen flex flex-col justify-start  p-8">
    <h2 className="text-4xl font-Gupter font-[600] mb-8 p-4 tracking-wide border-l-2 border-l-secondary-100">Add Your Personal Details</h2>

    <section className='text-primary-50 w-6/12 '>
      
      <div className="mb-6">                                                                                                                              
        <label htmlFor="name" className="block  font-semibold mb-2">Name</label>
        <input type="text" id="name" className="w-full text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your name" />
      </div>

      
      <div className="mb-6">
        <label htmlFor="email" className="block  font-semibold mb-2">Email</label>
        <input type="email" id="email" className="w-full text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your email" />
      </div>

      
      <div className="mb-6">
        <label htmlFor="phone" className="block  font-semibold mb-2">Phone Number</label>
        <input type="tel" id="phone" className="w-full text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your phone number" />
      </div>

      <div className="mb-10">
        <label htmlFor="photo" className="block  font-semibold mb-2">Upload Photo</label>
        <input type="file" id="photo" className="w-full font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
      </div>
      <div className='flex justify-between'>
        <CustomButton
        title='&larr; Cancel'
        btnStyles='w-full'
        handleClick={()=>router.replace('/dashboard')}
        />
        <CustomButton
        title='Next &rarr;'
        btnStyles='w-full'
        handleClick={()=>router.replace('/user/educationDetails')}
        />

      </div>
      
    </section>
  </div>

  )
}

export default PersonalDetailsPage