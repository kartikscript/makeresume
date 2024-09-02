import React from 'react'

 type CustomButtonProps={
  title:string
  btnStyles:string
  type?:'button' | 'submit'
  handleClick?:()=>void
}

const CustomButton = (props:CustomButtonProps) => {
  const {btnStyles,handleClick,title,type} = props

  
  return (
    <div>
      
       {
        type === 'button' ? (
          <button 
      type='button'
       onClick={handleClick}
       className={ `${btnStyles} text-center ring-2 ring-primary-50   font-semibold bg-primary-500 text-white py-2 px-4 rounded-lg hover:text-secondary-200 hover:bg-primary-50 hover:font-semibold active:text-white active:bg-secondary-100 transition duration-300`}
       >{title}</button>
        ) : (
          <button 
       type='submit'
       className={ `${btnStyles} text-center ring-2 ring-primary-50   font-semibold bg-primary-500 text-white py-2 px-4 rounded-lg hover:text-secondary-200 hover:bg-primary-50 hover:font-semibold active:text-white active:bg-secondary-100 transition duration-300`}
       >{title}</button>
        )
       }
    </div>

  )
}

export default CustomButton