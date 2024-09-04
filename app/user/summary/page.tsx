'use client'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { useGlobalContext } from '@/context/GlobalProvider'
import { Resume } from '@/types/types'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

const SummaryPage = () => {

  const router = useRouter();
  const {resume,setResume} = useGlobalContext();
  const {user} = useUser()

  const submit =async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        try {
          const clerkId = user?.id
          const savedResume = await axios.post('/api/resume',{resume,clerkId})
          toast.info('Resume Saved', {position:'top-left'})
          router.replace(`/resume/${savedResume.data._id}`)
        } catch (error) {
          console.log(error)
        }
  }


  return (
    <div className="min-h-screen  p-8">
    <h2 className="text-4xl font-Gupter font-[600] mb-8 p-4 tracking-wide border-l-2 border-l-secondary-100">Add Your Summary Details</h2>

    <form onSubmit={submit} className='text-primary-50 w-8/12'>
      
      <div className="mb-6 py-4 border-b-2 border-b-secondary-100">                                                                                                                              
        <label htmlFor="name" className="block text-xl font-semibold mb-4">Describe yourself and your expertise</label>
        <textarea 
          id="name" className="w-full resize-none  bg-primary-50/90 h-32 text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Describe here..." 
          value={resume?.personalDetails?.summary}
          onChange={(e)=>setResume(prev=>{return {...prev,personalDetails:{...prev?.personalDetails,summary:e.target.value}}})}
          />
      </div>
     <CustomInput
      title='Your Profession'
      placeholder='Enter Your Profession'
      type='text'
      value={resume?.personalDetails?.profession ?? ''}
      handleChange={(e)=>setResume(prev=>{return {...prev,personalDetails:{...prev?.personalDetails,profession:e.target.value}}})}
     />
     <CustomInput
      title='Your Portfolio Link'
      placeholder='Enter Your Portfolio Link'
      type='text'
      value={resume?.personalDetails?.portfolioLink ?? ''}
      handleChange={(e)=>setResume(prev=>{return {...prev,personalDetails:{...prev?.personalDetails,portfolioLink:e.target.value}}})}
     />
     <CustomInput
      title='Other Link'
      placeholder='Enter Any Social Media Link'
      type='text'
      value={resume?.link ?? ''}
      handleChange={(e)=>setResume(prev=>{return {...prev,link:e.target.value}})}
     />
       
       <div className='flex justify-around mt-10'>
        <CustomButton
        title='&larr; Back'
        btnStyles='w-full'
        type='button'
        handleClick={()=>router.replace('/user/skills')}
        />
        <CustomButton
        title='Submit'
        type='submit'
        btnStyles='w-full bg-green-500'
        />

      </div>
    </form>
  </div>
  )
}

export default SummaryPage