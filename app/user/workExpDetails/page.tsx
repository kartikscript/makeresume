'use client'
import CustomButton from '@/components/CustomButton'
import { MinusSquare } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const WorkExpPage = () => {
  const router = useRouter()
  return (
    <div className="min-h-screen flex flex-col   justify-start p-8">
    <h2 className="text-4xl font-Gupter font-[600] mb-8 p-4 tracking-wide border-l-2 border-l-secondary-100">Add Your Work Experience Details</h2>

    <section className='text-primary-50 w-8/12'>
      
      <div className="mb-6 py-4 border-b-2 border-b-secondary-100">                                                                                                                              
        <label htmlFor="name" className="block  font-semibold mb-2">Company Name</label>
        <input type="text" id="name" className="w-full text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter company name" />
        <span className='flex gap-3 items-center mt-2'>
          <label htmlFor="name" className=" font-semibold mb-2">Worked there from :</label>
          <input type="number" id="name" min="1900" max="2099" className="w-2/12 text-texts font-semibold p-1 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Year" />
          <p>-</p>
          <input type="number" id="name" min="1900" max="2099" className="w-2/12 text-texts font-semibold p-1 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Year" />
        </span>
        <div className=' mt-2 flex gap-2 items-center'>
          <label htmlFor="name" className=" font-semibold mb-2">worked as:</label>
          <input type="number" id="name" className="w-6/12 text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your profession" />
        </div>
        
      </div>
    
      <CustomButton
       title='Add'
       btnStyles='w-3/12'
       handleClick={()=>{}}
      />
      <div>
      <h2 className="text-2xl font-Gupter font-[600] my-8 p-2 tracking-wide border-l-2 border-l-secondary-100">Your Work Experience Details</h2>
      <ul className='space-y-4'>
      <li
       className='flex items-center w-fit pb-2 gap-3 border-b-2 border-b-secondary-100 '
       >Worked in Uniex Private Limited (2019-2023) as Fashion Designer<button className='text-red-400 transition-colors hover:text-red-500'><MinusSquare/></button>
      </li>
      <li
       className='flex items-center w-fit pb-2 gap-3 border-b-2 border-b-secondary-100 '
       >Worked in Uniex Private Limited (2019-2023) as Fashion Designer<button className='text-red-400 transition-colors hover:text-red-500'><MinusSquare/></button>
      </li>

       
      </ul>
      </div>
      <div className='flex justify-between mt-10'>
        <CustomButton
        title='&larr; Back'
        btnStyles='w-full'
        handleClick={()=>router.back()}
        />
        <CustomButton
        title='Next &rarr;'
        btnStyles='w-full'
        handleClick={()=>router.push('/user/skills')}
        />

      </div>
    </section>
  </div>
  )
}

export default WorkExpPage