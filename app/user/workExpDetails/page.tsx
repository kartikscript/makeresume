'use client'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { useGlobalContext } from '@/context/GlobalProvider'
import { WorkExpDetail } from '@/types/types'
import { MinusSquare } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';

const WorkExpPage = () => {
  const router = useRouter()
  const {resume, setResume} = useGlobalContext()

  const [workDetailsArr, setWorkDetailsArr] = useState(resume?.workExperience)

  const [workObject, setworkObject] = useState({
    _id:uuidv4(),
    companyName:'',
    beginYear:undefined,
    endYear:undefined,
    workProfession:''
  })

  const saveWork = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if(workDetailsArr?.length && workDetailsArr?.length > 3){
      return( <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={true}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />)
    }
      setWorkDetailsArr((prev)=>{
        if (prev && prev.length>0){
          return [...prev,workObject]
        } else{
          return [workObject]
        }
      })
  }


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>,title:string)=>{
      setworkObject(prev=>{
        return{
          ...prev,
          [title]:e.target.value
        }
      })
  }


  return (
    <div className="min-h-screen flex flex-col   justify-start p-8">
    <h2 className="text-4xl font-Gupter font-[600] mb-8 p-4 tracking-wide border-l-2 border-l-secondary-100">Add Your Work Experience Details</h2>

    <form onSubmit={(e)=>saveWork(e)} className='text-primary-50 w-8/12'>
      
      <div className="mb-6 py-4 border-b-2 border-b-secondary-100">                                                                                                                              
      <CustomInput
        title='Company Name :'
        type='text'
        placeholder='Enter Your Company Name'
        value={workObject.companyName}
        handleChange={(e)=>handleChange(e,'companyName')}
      />  
       <span className='flex gap-3 items-center mt-2'>
          <label htmlFor="name" className=" font-semibold mb-2">Worked there from :</label>
          <input 
            required
            type="number" id="name" min="1900" max="2099" 
            className="w-2/12 text-texts font-semibold p-1 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" 
            placeholder="Year" 
            value={workObject.beginYear || ''}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange(e,'beginYear')}
          />
          <p>-</p>
           <input 
            required
            type="number" id="name" min="1900" max="2099" 
            className="w-2/12 text-texts font-semibold p-1 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" 
            placeholder="Year" 
            value={workObject.endYear || ''}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange(e,'endYear')}
           />
        </span>
        <div className=' mt-2 flex gap-2 items-center'>
          <CustomInput
            title='Worked as :'
            type='text'
            placeholder='Enter Your Profession'
            value={workObject.workProfession}
            handleChange={(e)=>handleChange(e,'workProfession')}
          />  
        </div>
        
      </div>
    
      <CustomButton
       title='Add'
       type='submit'
       btnStyles='w-3/12'
      />
    </form>

      <div>
        <h2 className="text-2xl font-Gupter font-[600] my-8 p-2 tracking-wide border-l-2 border-l-secondary-100">Your Work Experience Details</h2>
        {
          workDetailsArr && workDetailsArr.length > 0 ? (
            <ul className='space-y-4'>
              {workDetailsArr.map((item,i)=>{
                return(
                  <li
                    key={i}
                    id={item._id}
                    className='flex items-center w-fit pb-2 gap-6 border-b-2 border-b-secondary-100 '
                   >
                    Worked in {item.companyName} ({item.beginYear}-{item.endYear}) as {item.workProfession}
                    <button className='text-red-400 transition-colors hover:text-red-500'>
                      <MinusSquare/>
                    </button>
                  </li>
                )
              })}
           
            </ul>

          ) : (
            <p className='font-Gupter font-[600] my-8 p-2 tracking-wide'>No Work Experience Added Yet !!</p>
          )
        }
      </div>
      <div className='flex justify-between mt-10'>
        <CustomButton
        title='&larr; Back'
        btnStyles='w-full'
        handleClick={()=>router.replace('/user/educationDetails')}
        />
        <CustomButton
        title='Next &rarr;'
        btnStyles='w-full'
        handleClick={()=>router.replace('/user/skills')}
        />

      </div>
  </div>
  )
}

export default WorkExpPage