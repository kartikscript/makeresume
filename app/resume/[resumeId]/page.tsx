import PreviewResume from '@/components/PreviewResume'
import React from 'react'

const ResumePage = () => {
  return (
    <main className=" bg-gradient-radial to-secondary-100 from-secondary-200 backdrop-blur-xl w-full h-screen overflow-hidden grid grid-cols-11">
      <section className="col-span-5 pt-8 pl-16 ">
       <PreviewResume/> {/* remove scale origin-top rounded while converting to img in PreviewResume */}
      </section>
     
      <section className="col-span-6 text-primary-50 h-screen flex gap-5 flex-col justify-center items-center">
       <h1 className="text-5xl text-center font-Gupter  tracking-wider ">That's It !<br/> Your Resume is Ready 🤘</h1>
       <button 
        className="active:bg-secondary-100 active:text-primary-50 p-4 font-Roboto font-semibold text-3xl rounded-2xl tracking-wider hover:p-5 hover:rounded-3xl transition-all bg-primary-50 text-secondary-200"
       >Download your Resume !</button>
       <span className="flex gap-5 mt-6 border-t-2 border-secondary-100 pt-4 px-10">
        <button
         className="active:bg-secondary-100 active:text-primary-50 p-2 font-Gupter font-semibold text-3xl rounded-2xl hover:text-secondary-100  hover:rounded-xl transition-all bg-primary-50 text-secondary-200"
        >Edit</button>
        <button
         className="active:bg-red-500 active:text-primary-50 p-2 font-Gupter font-semibold text-3xl rounded-2xl hover:text-red-700  hover:rounded-xl transition-all bg-primary-50 text-secondary-200"
        >Delete</button>
       </span>
      </section>
     
    </main>
  )
}

export default ResumePage