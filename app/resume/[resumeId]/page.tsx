'use client'
import PreviewResume from '@/components/PreviewResume'
import { useGlobalContext } from '@/context/GlobalProvider'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface PageProps{
  params:{
    resumeId:string
  }
}
const ResumePage = ({params}:PageProps) => {
  const {resumeId} =params

  console.log('ID of resume ',params)
  const router = useRouter()
  const [triggerDownload, setTriggerDownload] = useState(false);  // State to trigger download
  const {resume} = useGlobalContext()

  const handleDownload = () => {
    setTriggerDownload(true);  // Set triggerDownload to true to initiate the download
    // After triggering the download, reset the trigger
    setTimeout(() => setTriggerDownload(false), 100);  // Use a timeout to avoid re-triggering
  };

  const deleteResume = async () =>{
      try {
          await axios.delete('/api/resume',{params:{resumeId}})
          // router.replace('/dashboard ')
         
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <main className=" bg-gradient-to-bl to-secondary-100 from-secondary-200 w-full h-screen overflow-hidden grid grid-cols-11">
     
      <section className="col-span-5 pt-8 pl-16 ">
       <PreviewResume download={triggerDownload} resume={resume}/> {/* remove scale origin-top rounded while converting to img in PreviewResume */}
      </section>
     
      <section className="col-span-6 text-primary-50 h-screen flex gap-8 flex-col justify-center items-center">
       <h1 className="text-5xl text-center font-Gupter  tracking-wider ">That&apos;s It !<br/> Your Resume is Ready 🤘</h1>
       <button 
        className="active:bg-secondary-100 animate-pulse active:text-primary-50 p-6 font-Roboto font-bold text-3xl rounded-2xl tracking-wider hover:p-5 hover:rounded-3xl transition-all bg-primary-50 text-secondary-200"
        onClick={handleDownload}
      >Download Your Resume !</button>
       <span className="flex gap-8 mt-6 border-t-2 border-secondary-100 pt-4 px-10">
        <button
         onClick={()=>router.replace('/dashboard')}
         className="active:bg-secondary-100 active:text-primary-50 py-2 px-4  tracking-wide font-Gupter font-semibold text-2xl rounded-2xl hover:text-green-700  hover:rounded-xl transition-all bg-primary-50 text-secondary-200"
        >Go to Dashboard</button>
        <button
         onClick={()=>router.push('/user/personalDetails')}
         className="active:bg-secondary-100 active:text-primary-50 py-2 px-4  tracking-wide font-Gupter font-semibold text-2xl rounded-2xl hover:text-secondary-100  hover:rounded-xl transition-all bg-primary-50 text-secondary-200"
        >Edit</button>
        <button
         onClick={deleteResume}
         className="active:bg-red-500 active:text-primary-50 py-2 px-4 tracking-wide  font-Gupter font-semibold text-2xl rounded-2xl hover:text-red-700  hover:rounded-xl transition-all bg-primary-50 text-secondary-200"
        >Delete</button>
       </span>
      </section>
     
    </main>
  )
}

export default ResumePage