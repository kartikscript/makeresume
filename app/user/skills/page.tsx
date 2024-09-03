'use client'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { useGlobalContext } from '@/context/GlobalProvider'
import { Resume } from '@/types/types'
import { MinusSquare } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { v4 as uuidv4 } from 'uuid';

const SkillsPage = () => {

  const router = useRouter()
  const {resume, setResume} = useGlobalContext()

  const [skillArr, setSkillArr] = useState(resume?.skills)

  const [skillObj, setSkillObj] = useState({
    _id:uuidv4() ,
    skillName:'',
    skillRate:0
  })

  const saveSkill = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if(skillArr?.length && skillArr?.length === 5){
      toast.warning('You can add only 5 skills !')
      return
    }

      setSkillArr((prev)=>{
        if (prev && prev.length>0){
          return [...prev,skillObj]
        } else{
          return [skillObj]
        }
      })
      setSkillObj(prev=>{
       return {
         ...prev,
          _id:uuidv4(),
           skillName:'',
        }

      }
      )
  }

  const deleteSkill = (id:string) =>{
      setSkillArr((prev)=>{
        const itemsleft=prev?.filter((item)=>{
         return item._id !== id
        })
       return itemsleft 
      })
      toast.success('Skill Deleted !',{position:'top-left'})
  }

  const submit = () =>{
    setResume(
      (prevResume:Resume | null)=>{
        return{
          ...prevResume,
         skills:skillArr,
        }
      }
    )
    router.replace('/user/summary')
  }


  return (
   <div className="min-h-screen flex flex-col  justify-start bg-gradient-to-bl to-secondary-100 from-secondary-200 p-8 ">
    <h2 className="text-4xl font-Gupter font-[600] mb-8 p-4 tracking-wide border-l-2 border-l-secondary-100">Add Your Skills</h2>

    <form onSubmit={saveSkill} className='text-primary-50 w-6/12 '>
      
      <div className="mb-6">   
        <CustomInput
         title='Skill Name'
         placeholder='Enter Your Skill'
         type='text'
         handleChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSkillObj((prev)=>{return{...prev,skillName:e.target.value}})}
         value={skillObj.skillName}
        />                                                                                                                           
       <label htmlFor="name" className=" font-semibold mb-2">Rate your skill :</label>
       <select 
       required
      className='w-3/12 text-texts transition-all  font-medium mt-4 text-center mx-2 rounded-lg font-Roboto'
      onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setSkillObj((prev)=>{return{...prev,skillRate:parseInt(e.target.value)}})}
      value={skillObj.skillRate}
    >
      <option value="0" disabled>choose</option> {/* Placeholder option */}
      <option value="10">10%</option>
      <option value="20">20%</option>
      <option value="30">30%</option>
      <option value="40">40%</option>
      <option value="50">50%</option>
      <option value="60">60%</option>
      <option value="70">70%</option>
      <option value="80">80%</option>
      <option value="90">90%</option>
      <option value="100">100%</option>
     </select>
      </div>
      <CustomButton
       title='Add'
      type='submit'
       btnStyles='w-5/12'
      />
    </form>

      

     <div>
        <h2 className="text-2xl font-Gupter font-[600] mb-4 mt-12 p-2 tracking-wide border-l-2 border-l-secondary-100">Your skills</h2>
        {
          skillArr && skillArr.length > 0 ? (
            <ul className='space-y-3'>
              {skillArr.map((item,i)=>{
                return(
                  <li
                    key={i}
                    id={item._id}
                    className='flex items-center w-fit pb-2 gap-3 border-b-2 border-b-secondary-100 '
                   >
                    {item.skillName} - {item.skillRate}%
                    <button onClick={()=>deleteSkill(item._id)} className='text-red-400 transition-colors hover:text-red-500'>
                      <MinusSquare/>
                    </button>
                  </li>
                )
              })}
           
            </ul>

          ) : (
            <p className='font-Gupter font-[600] my-8 p-2 tracking-wide'>No Skill Added Yet !!</p>
          )
        }
       </div>
      <div className='flex justify-around mt-10'>
        <CustomButton
        title='&larr; Back'
        btnStyles='w-full'
        type='button'
        handleClick={()=>router.replace('/user/workExpDetails')}
        />
        <CustomButton
        title='Next &rarr;'
        btnStyles='w-full'
        type='button'
        handleClick={submit}
        />

      </div>
  </div>
  )
}

export default SkillsPage