'use client'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'next/navigation'
import React from 'react'

const SummaryPage = () => {

  const router = useRouter()
  return (
    <div className="min-h-screen  p-8">
    <h2 className="text-4xl font-Gupter font-[600] mb-8 p-4 tracking-wide border-l-2 border-l-secondary-100">Add Your Summary Details</h2>

    <section className='text-primary-50 w-8/12'>
      
      <div className="mb-6 py-4 border-b-2 border-b-secondary-100">                                                                                                                              
        <label htmlFor="name" className="block text-xl font-semibold mb-4">Describe yourself and your expertise</label>
        <textarea  id="name" className="w-full resize-none  bg-primary-50/90 h-32 text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Describe here..." />
      </div>
      <div className='mb-4'>
        <label htmlFor="name" className="block  font-semibold mb-2">Your Profession</label>
        <input type="text" id="name" className="w-full text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your profession" />
      </div>
       <div className='mb-4'>
        <label htmlFor="name" className="block  font-semibold mb-2">Your Portfolio link(optional)</label>
        <input type="text" id="name" className="w-full text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your website link" />
       </div>
       <div className='mb-4'>
        <label htmlFor="name" className="block  font-semibold mb-2">Your social media link - any (optional)</label>
        <input type="text" id="name" className="w-full text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your website link" />
       </div>
       
       <div className='flex justify-between mt-10'>
        <CustomButton
        title='&larr; Back'
        btnStyles='w-full'
        handleClick={()=>router.replace('/user/skills')}
        />
        <CustomButton
        title='Submit'
        btnStyles='w-full bg-green-600'
        handleClick={()=>router.replace('/resume/123')}
        />

      </div>
    </section>
  </div>
  )
}

export default SummaryPage