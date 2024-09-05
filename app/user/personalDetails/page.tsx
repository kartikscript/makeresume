'use client'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { useGlobalContext } from '@/context/GlobalProvider'
import { Resume, UserProp } from '@/types/types'
import { useAuth, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { toast } from 'sonner'

const PersonalDetailsPage = () => {

  const {resume, setResume} = useGlobalContext()
  const router = useRouter()
  const {user:currentUser} = useUser()

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>,title:string)=>{
    setResume(
      (prevResume:Resume | null)=>{
        return{
          ...prevResume,
          personalDetails:{
            ...prevResume?.personalDetails, // Keep other personal details
            [title]: e.target.value // Dynamically set the field based on the title
          }
        }
      }
    )
  }

  const submit = (e:React.FormEvent) =>{
    e.preventDefault()
    if(!(resume?.personalDetails?.phoneNumber?.toString().length===10) ){
      return toast.error('Enter valid 10 digit number !', {position:'top-left'})
    }
   router.replace('/user/educationDetails')
  }

  const convertToBase64 = (e: React.ChangeEvent<HTMLInputElement>)=>{
      var reader = new FileReader()
      if(!e.target.files) return
      reader.readAsDataURL(e.target.files[0])
      reader.onload = () =>{
          if (typeof reader.result === 'string') {
          setResume(prev=>{
            return {
              ...prev,
              personalDetails:{
                ...prev?.personalDetails,
                profilePhoto:reader.result as string
              }
            }
          })
        }
      }
      reader.onerror = (err) =>{
          console.log(err,'base 64 error')
      }
  }
  
  useEffect(()=>{
    setResume((prevResume:Resume | null)=>{
      if(currentUser){
        return{
          ...prevResume,
          personalDetails:{
            name:currentUser.fullName,
            email:currentUser.emailAddresses[0]?.emailAddress,
          }
        }   
      }
      return null
    })

  },[])
  return (
    <div className="min-h-screen flex flex-col justify-start  p-8">
    <h2 className="text-4xl font-Gupter font-[600] mb-8 p-4 tracking-wide border-l-2 border-l-secondary-100">Add Your Personal Details</h2>

    <form onSubmit={(e:React.FormEvent)=>submit(e)} className='text-primary-50 w-6/12 '>
      
      <CustomInput
        title='Name'
        type='text'
        placeholder='Enter Your Name'
        value={resume?.personalDetails?.name as string ?? ''}
        handleChange={(e)=>handleChange(e,'name')}
      />
      <CustomInput
        title='Email'
        type="email"
        placeholder='Enter Your Email'
        value={resume?.personalDetails?.email as string ?? ""}
        handleChange={(e)=>handleChange(e,'email')}
      />
      <CustomInput
        type='number'
        title='Phone Number'
        placeholder='Enter Your Phone Number'
        value={resume?.personalDetails?.phoneNumber as number ?? ""}
        handleChange={(e)=>handleChange(e,'phoneNumber')}
      />
     <div className="mb-10">
        <label htmlFor="photo" className="block  font-semibold mb-2">Upload Photo</label>
        <input 
         required
         onChange={convertToBase64}
         accept='image/*'
         type="file" 
         id="photo" className="w-full font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" 
         />
      </div>
      <div className='flex justify-around'>
        <CustomButton
        title='&larr; Cancel'
        btnStyles='w-full'
        type='button'
        handleClick={()=>router.replace('/dashboard')}
        />
        <CustomButton
        type='submit'
        title='Next &rarr;'
        btnStyles='w-full'
        />
      </div>

    </form>
  </div>

  )
}

export default PersonalDetailsPage