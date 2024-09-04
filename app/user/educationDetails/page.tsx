'use client'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { useGlobalContext } from '@/context/GlobalProvider'
import { Resume } from '@/types/types'
import { PenLine } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const EducationDetailsPage = () => {
  const router = useRouter()
  const {resume,setResume} = useGlobalContext();

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>,title:string)=>{
    setResume(
      (prevResume:Resume | null)=>{
        return{
          ...prevResume,
          educationDetails:{
            ...prevResume?.educationDetails, // Keep other personal details
            [title]: e.target.value // Dynamically set the field based on the title
          }
        }
      }
    )
  }

  const submit = (e:React.FormEvent) =>{
    e.preventDefault();
    
   router.replace('/user/workExpDetails')
  }

  
  return (
    <div className="min-h-screen flex flex-col  justify-start p-8">
      <h2 className="text-4xl font-Gupter font-[600] mb-8 p-4 tracking-wide border-l-2 border-l-secondary-100">Add Your Education Details</h2>

      <form onSubmit={(e:React.FormEvent)=>submit(e)} className='text-primary-50 w-8/12 '>
      
       <div className="mb-6 pb-4 border-b-2 border-b-secondary-100">     
      <CustomInput
        title='Academic Name'
        type='text'
        placeholder='Enter Your Academic Name'
        value={resume?.educationDetails?.academyName as string ?? ''}
        handleChange={(e)=>handleChange(e,'academyName')}
      />      

       <span className='flex gap-3 items-center mt-2'>
          <label htmlFor="name" className=" font-semibold mb-2">Academic Year :</label>
          <input
           required
           value={resume?.educationDetails?.acadPassInYear as number ?? ''}
           onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange( e,'acadPassInYear')}
           type="number" min="1900" max="2099"
           className="w-2/12 text-texts font-semibold p-1 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
           placeholder="Year"
            />   
          <p>-</p>
          <input
          required
           value={resume?.educationDetails?.acadPassOutYear as number ?? ''}
           onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange( e,'acadPassOutYear')}
           type="number" min="1900" max="2099"
           className="w-2/12 text-texts font-semibold p-1 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
           placeholder="Year"
          />   
       </span>
        {/* <div className=' mt-2 flex gap-2 items-center'>
          <label htmlFor="name" className=" font-semibold mb-2">Stream :</label>
          <input type="number" id="name" className="w-6/12 text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your stream" />
        </div> */}
        <CustomInput
        title='Stream Name'
        type='text'
        placeholder='Enter Your Stream'
        value={resume?.educationDetails?.academyStream as string ?? ''}
        handleChange={(e)=>handleChange(e,'academyStream')}
        inputStyles='w-6/12'
      />   
        
      </div>
      <div className="mb-10  ">                                                                                                                              
      <CustomInput
        title='University Name'
        type='text'
        placeholder='Enter Your University Name'
        value={resume?.educationDetails?.universityName as string ?? ''}
        handleChange={(e)=>handleChange(e,'universityName')}
      />  
        <span className='flex gap-3 items-center mt-2'>
          <label htmlFor="name" className=" font-semibold mb-2">Total Year :</label>
          <input
          required
           value={resume?.educationDetails?.univPassInYear as number ?? ''}
           onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange( e,'univPassInYear')}
           type="number" min="1900" max="2099"
           className="w-2/12 text-texts font-semibold p-1 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
           placeholder="Year"
            />   
          <p>-</p>
          <input
          required
           value={resume?.educationDetails?.univPassOutYear as number ?? ''}
           onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange( e,'univPassOutYear')}
           type="number" min="1900" max="2099"
           className="w-2/12 text-texts font-semibold p-1 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
           placeholder="Year"
          />   
        </span>
        <CustomInput
        title='Course Name'
        type='text'
        placeholder='Enter Your Course'
        value={resume?.educationDetails?.universityStream as string ?? ''}
        handleChange={(e)=>handleChange(e,'universityStream')}
        inputStyles='w-6/12'
      />   
        
      </div>

      <div className='flex justify-around'>
        <CustomButton
        title='&larr; Back'
        btnStyles='w-full'
        type='button'
        handleClick={()=>router.replace('/user/personalDetails')}
        />
        <CustomButton
        title='Next &rarr;'
        btnStyles='w-full'
        type='submit'
        />

      </div>
    </form>
  </div>
  )
}

export default EducationDetailsPage