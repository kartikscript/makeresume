import { Globe, Link, Mail, MapPinHouse, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Resume } from '@/types/types';

const PreviewResume = ({resume}:{resume:Resume | null}) => {

  if(resume === null){
    return
  }
  const {educationDetails,link,personalDetails,skills,workExperience} = resume
  const [firstName,middleName,lastName]=personalDetails?.name?.includes('') ? personalDetails.name.split(' ') : [null,null,null]
  console.log(personalDetails?.name ,firstName,lastName )
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
          <h1 className=' tracking-wide text-5xl font-[700] '>{firstName ?firstName:personalDetails?.name} <br/> <span className='text-primary-200'>{`${middleName} ${lastName}`}</span></h1>
          <h2 className='font-mono text-3xl tracking-wide font-medium mt-8 text-black '>{personalDetails?.profession}</h2>
          <p className='mt-4 text-base font-Gupter tracking-wide font-semibold'>{personalDetails?.summary}</p>
          <h2 className='mt-9 text-4xl font-Roboto tracking-wider font-bold text-black'>Contact</h2>
          <ul className='mt-4 space-y-3 font-semibold text-base '>
            <li className='flex items-center gap-4 '><Phone className='bg-primary-200 w-8 h-8 p-2 rounded-full text-primary-50'/> {personalDetails?.phoneNumber}</li>
            <li className='flex items-center gap-4 '><Mail className='bg-primary-200 w-8 h-8 p-2 rounded-full text-primary-50'/> {personalDetails?.email}</li>
            <li className='flex items-center gap-4 '><Globe className='bg-primary-200 w-8 h-8 p-2 rounded-full text-primary-50'/> {personalDetails?.portfolioLink}</li>
            <li className='flex items-center gap-4 '><Link className='bg-primary-200 w-8 h-8 p-2 rounded-full text-primary-50'/>{link}</li>
          </ul>
        </div>
      </div>

      <div className='bg-primary-200 text-primary-50 w-full pl-16 pt-16'>
        <div className='space-y-5'>
          <h2 className='text-4xl font-Roboto tracking-wider font-medium text-white'>Education</h2>
          <p className='text-lg font-Gupter tracking-widest '>{educationDetails?.acadPassInYear} - {educationDetails?.acadPassOutYear} :<br/>{educationDetails?.academyName}<br/>{educationDetails?.academyStream}</p>
          <p className='text-lg font-Gupter tracking-widest '>{educationDetails?.univPassInYear} - {educationDetails?.univPassOutYear} :<br/>{educationDetails?.universityName}<br/>{educationDetails?.universityStream}</p>
        </div>
        <div className='space-y-5 mt-10'>
          <h2 className='text-4xl font-Roboto tracking-wider font-medium text-white'>Experience</h2>
          {/* map below experience data */}
          {
            workExperience?.map(item=>{
              return(
                <p key={item._id} className='text-lg font-Gupter tracking-widest '>{item.beginYear} - {item.endYear} :<br/>{item.companyName}<br/>{item.workProfession}</p>
              )
            })
          }
        </div>
        <div className='mt-10 space-y-6'>
          <h2 className='text-4xl  font-Roboto tracking-wider font-medium text-white'>Skills</h2>
           {
             skills?.map(item=>{
            return(
              <div key={item._id} className='space-y-2'>
                <p className='text-lg font-Gupter tracking-widest'>{item.skillName}</p>
                <div className='relative overflow-hidden h-3 w-44 rounded-full bg-white'><span style={{width:`${item.skillRate}%`}} className='absolute left-0 h-3 bg-primary-100'/></div>
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