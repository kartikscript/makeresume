'use client'
import CustomButton from '@/components/CustomButton'
import { PenLine } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const EducationDetailsPage = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col  justify-start p-8">
    <h2 className="text-4xl font-Gupter font-[600] mb-8 p-4 tracking-wide border-l-2 border-l-secondary-100">Add Your Education Details</h2>

    <section className='text-primary-50 w-8/12 '>
      
      <div className="mb-6 pb-4 border-b-2 border-b-secondary-100">                                                                                                                              
        <label htmlFor="name" className="block  font-semibold mb-2">Academy Name (10+2)</label>
        <input type="text" id="name" className="w-full text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your academy name" />
        <span className='flex gap-3 items-center mt-2'>
          <label htmlFor="name" className=" font-semibold mb-2">Academic Year :</label>
          <input type="number" id="name" min="1900" max="2099" className="w-2/12 text-texts font-semibold p-1 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Year" />
          <p>-</p>
          <input type="number" id="name" min="1900" max="2099" className="w-2/12 text-texts font-semibold p-1 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Year" />
        </span>
        <div className=' mt-2 flex gap-2 items-center'>
          <label htmlFor="name" className=" font-semibold mb-2">Stream :</label>
          <input type="number" id="name" className="w-6/12 text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your stream" />
        </div>
        
      </div>
      <div className="mb-10  ">                                                                                                                              
        <label htmlFor="name" className="block  font-semibold mb-2">University Name</label>
        <input type="text" id="name" className="w-full text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your university name" />
        <span className='flex gap-3 items-center mt-2'>
          <label htmlFor="name" className=" font-semibold mb-2">Total Year :</label>
          <input type="number" id="name" min="1900" max="2099" className="w-2/12 text-texts font-semibold p-1 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Year" />
          <p>-</p>
          <input type="number" id="name" min="1900" max="2099" className="w-2/12 text-texts font-semibold p-1 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Year" />
        </span>
        <div className=' mt-2 flex gap-2 items-center'>
          <label htmlFor="name" className=" font-semibold mb-2">Course :</label>
          <input type="number" id="name" className="w-6/12 text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your course" />
        </div>
        
      </div>

      <div className='flex justify-between'>
        <CustomButton
        title='&larr; Back'
        btnStyles='w-full'
        handleClick={()=>router.replace('/user/personalDetails')}
        />
        <CustomButton
        title='Next &rarr;'
        btnStyles='w-full'
        handleClick={()=>router.replace('/user/workExpDetails')}
        />

      </div>
    </section>
  </div>
  )
}

export default EducationDetailsPage