'use client'
import { useGlobalContext } from '@/context/GlobalProvider'
import { UserProp } from '@/types/types'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import { SquarePlus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const DashboardPage = () => {

  const {user} = useUser()
  const getResumes = async () =>{
    try {
      const resumes = await axios.get('/api/resume', {params:{clerkId:user?.id}})
      console.log(resumes)
    } catch (error) {
      console.log(error)
    }
  }

  const router= useRouter()

  useEffect(()=>{
    getResumes()
  },[])
  return (
    <div className="bg-gradient-to-bl to-secondary-100 from-secondary-200 h-screen p-8">
      <h1 className='font-Gupter text-5xl tracking-wider font-[500] py-4 px-3 border-l-2 border-l-secondary-100'>Dashboard</h1>
      <h1 className='font-Gupter text-3xl tracking-wider font-[400] mt-10 py-2 px-3 border-l-2 border-l-secondary-100'>Your Projects</h1>
      <section className='mt-6 px-6 pb-4 w-full flex gap-8 overflow-x-auto border-l-2 border-l-secondary-100'>
        <div className='w-52 h-72 bg-primary-50 rounded-3xl bg-opacity-70 '>
          <button 
           className='flex justify-center items-center gap-2 w-full h-full tracking-wide flex-col text-secondary-200 font-Roboto font-[700]'
           onClick={()=>router.push('/user/personalDetails')}
           ><SquarePlus className='w-10 h-9 text-primary-50 self-center bg-secondary-200/70 p-2 rounded-xl '/>Create Resume</button>
        </div>
        <div className='w-52 h-72 bg-primary-50 rounded-3xl bg-opacity-70 '>
          <button className='flex justify-center items-center gap-2 w-full h-full tracking-wide flex-col text-secondary-200 font-Roboto font-[700]'><SquarePlus className='w-10 h-9 text-primary-50 self-center bg-secondary-200/70 p-2 rounded-xl '/>Create Resume</button>
        </div>
        <div className='w-52 h-72 bg-primary-50 rounded-3xl bg-opacity-70 '>
          <button className='flex justify-center items-center gap-2 w-full h-full tracking-wide flex-col text-secondary-200 font-Roboto font-[700]'><SquarePlus className='w-10 h-9 text-primary-50 self-center bg-secondary-200/70 p-2 rounded-xl '/>Create Resume</button>
        </div>
       
      </section>
    </div>
  )
}

export default DashboardPage