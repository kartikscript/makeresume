import { Globe, Link, Mail, MapPinHouse, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const PreviewResume = () => {
  return (
    <div className="w-[794px] h-[1123px] flex text-texts bg-primary-50 scale-50 ring-8 ring-white ring-offset-4 ring-offset-primary-200 origin-top overflow-hidden rounded-3xl shadow-inner  ">
      <div className='bg-primary-50 w-full pt-16 space-y-4'>
        <div className='h-[365px] relative bg-primary-100 rounded-l-full ml-8'>
          <Image
           src='/pfp.jpg'
           alt='pfp'
           width={270} 
           height={270}
           className='absolute aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-8 ring-primary-50'
           />
        </div>
        <div className='pl-16 pt-7 pr-4 '>
          <h1 className=' tracking-wide text-5xl font-[700] '>John <br/> <span className='text-primary-200'>Doe</span></h1>
          <h2 className='font-mono text-3xl tracking-wide font-medium mt-8 text-black '>Fashion Designer</h2>
          <p className='mt-4 text-base font-Gupter tracking-wide font-semibold'>A resume is a formal document that outlines an individuals qualifications, skills, work experience, and education. It is typically used to apply for jobs, internships, or academic programs. A well-crafted resume highlights a persons achievements</p>
          <h2 className='mt-9 text-4xl font-Roboto tracking-wider font-bold text-black'>Contact</h2>
          <ul className='mt-4 space-y-3 font-semibold text-base '>
            <li className='flex items-center gap-4 '><Phone className='bg-primary-200 w-8 h-8 p-2 rounded-full text-primary-50'/> 94638201283</li>
            <li className='flex items-center gap-4 '><Mail className='bg-primary-200 w-8 h-8 p-2 rounded-full text-primary-50'/> john123@gmail.com</li>
            <li className='flex items-center gap-4 '><Globe className='bg-primary-200 w-8 h-8 p-2 rounded-full text-primary-50'/> john.dev</li>
            <li className='flex items-center gap-4 '><Link className='bg-primary-200 w-8 h-8 p-2 rounded-full text-primary-50'/> near hawkings store</li>
          </ul>
        </div>
      </div>

      <div className='bg-primary-200 text-primary-50 w-full pl-16 pt-16'>
        <div className='space-y-5'>
          <h2 className='text-4xl font-Roboto tracking-wider font-medium text-white'>Education</h2>
          <p className='text-lg font-Gupter tracking-widest '>2012 - 2016 :<br/>Shadow Certified Academy<br/>Fashion Designing</p>
          <p className='text-lg font-Gupter tracking-widest '>2018 - 2022 :<br/>Uniex Certified University<br/>Fashion Designing</p>
        </div>
        <div className='space-y-5 mt-10'>
          <h2 className='text-4xl font-Roboto tracking-wider font-medium text-white'>Experience</h2>
          {/* map below experience data */}
          <p className='text-lg font-Gupter tracking-widest '>2023 - 2024 :<br/>Fashion Designer Intern<br/>Coplers Pvt Lmt</p>
          <p className='text-lg font-Gupter tracking-widest '>2018 - present :<br/>Uniex Certified University<br/>Fashion Designing</p>
        </div>
        <div className='mt-10 space-y-6'>
          <h2 className='text-4xl  font-Roboto tracking-wider font-medium text-white'>Skills</h2>
           {
           [1,2,3].map(item=>{
            return(
              <div key={item} className='space-y-2'>
                <p className='text-lg font-Gupter tracking-widest'>Drawing Sketch</p>
                <div className='relative overflow-hidden h-3 w-44 rounded-full bg-white'><span style={{width:'50%'}} className='absolute left-0 h-3 bg-primary-100'/></div>
              </div>
            )
           })
           }
        </div>
      </div>
    </div> 

  )
}

export default PreviewResume