'use client'
import { useGlobalContext } from '@/context/GlobalProvider'
import { Resume, UserProp } from '@/types/types'
import { ClerkLoading, useUser } from '@clerk/nextjs'
import axios from 'axios'
import { File, SquarePlus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const DashboardPage = () => {

  const {user} = useUser()
  const [resumeArr, setResumeArr] = useState<Resume[]>([])
  const router= useRouter()
  const {setResume} = useGlobalContext()

  const previewResume =(resumeId:string | undefined)=>{
   const activeResume = resumeArr.filter(item=>item._id === resumeId)
    setResume(activeResume[0])
    router.replace(`resume/${resumeId}`)
  }
  
  const getResumes = async () =>{
    try {
      const res = await axios.get('/api/resume', {params:{clerkId:user?.id}})
      const resumes = res.data.resumes
      setResumeArr(resumes)   
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getResumes()
  },[])
  return (
    <div className=" h-screen p-8">
      <h1 className='font-Gupter text-5xl tracking-wider font-[500] py-4 px-3 border-l-2 border-l-secondary-100'>Dashboard</h1>
      <h1 className='font-Gupter text-3xl tracking-wider font-[400] mt-10 py-2 px-3 border-l-2 border-l-secondary-100'>Your Projects</h1>
      <section className='mt-6 px-6 pb-4 w-full flex gap-8 overflow-x-auto border-l-2 border-l-secondary-100'>
        <div className='w-52 h-72 bg-primary-50 rounded-3xl bg-opacity-70 '>
          <button 
           className='flex justify-center items-center gap-2 w-full h-full tracking-wide flex-col text-secondary-200 font-Roboto font-[700]'
           onClick={()=>router.push('/user/personalDetails')}
           ><SquarePlus className='w-10 h-9 text-primary-50 self-center bg-secondary-200/70 p-2 rounded-xl '/>Create Resume</button>
        </div>
        <ClerkLoading>
          <div className='w-full h-72 flex items-center justify-center'>
            <p className='text-3xl font-semibold tracking-wider'>Loading...</p>
          </div>
        </ClerkLoading>
        {
          resumeArr.map((item,i)=>{
            return (
        <div key={item._id}  onClick={()=>previewResume(item._id)} className='w-52 h-72 bg-primary-50 rounded-3xl '>
          <button className='flex justify-center items-center gap-2 w-full h-full tracking-wide flex-col text-secondary-200 font-Roboto font-[700]'><File className='w-10 h-9 text-primary-50 self-center bg-secondary-200/70 p-2 rounded-xl '/>Resume -{i+1}</button>
        </div>

            )
          })
        }
              
      </section>
    </div>
  )
}

export default DashboardPage