import React from 'react'

 
interface CustomInputProps{
  title:string
  value:string | number
  type:string
  placeholder:string
  handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
  inputStyles?:string
}

const CustomInput = (props:CustomInputProps) => {

  const {handleChange,placeholder,title,value,type,inputStyles} = props
  return (
    <div className="mb-6">                                                                                                                              
        <label htmlFor={title} className="block  font-semibold mb-2">{title}</label>
        <input
         required
         value={value}
         type={type}
         name={title}
         id={title} 
         className={` ${inputStyles ? inputStyles :'w-full'}  text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
         placeholder={placeholder} 
         onChange={handleChange}
         />
   </div>

  )
}

export default CustomInput