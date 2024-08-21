import { MinusSquare } from 'lucide-react'
import React from 'react'

const SkillsPage = () => {
  return (
    <div className="min-h-screen flex flex-col  justify-start bg-gradient-to-bl to-secondary-100 from-secondary-200 p-8 pb-0">
    <h2 className="text-4xl font-Gupter font-[600] mb-8 p-4 tracking-wide border-l-2 border-l-secondary-100">Add Your Skills (&lt;5) </h2>

    <form className='text-primary-50 w-5/12 '>
      
      <div className="mb-6">                                                                                                                              
        <label htmlFor="name" className="block  font-semibold mb-2">Skill</label>
        <input type="text" id="name" className="w-full text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your skill" />
        <label htmlFor="name" className=" font-semibold mb-2">Rate your skill :</label>
        <select className='w-3/12 text-texts font-bold mt-4 text-center mx-2 rounded-lg font-Roboto'>
         <option>10%</option>
         <option>20%</option>
         <option>30%</option>
         <option>40%</option>
         <option>50%</option>
         <option>60%</option>
         <option>70%</option>
         <option>80%</option>
         <option>90%</option>
         <option>100%</option>
        </select>
      </div>
      <div className="text-center">
        <button type="submit" className="w-6/12 ring-2 ring-primary-50   font-semibold bg-primary-500 text-white py-2 px-4 rounded-lg hover:text-secondary-200 hover:bg-primary-50 hover:font-semibold active:text-white active:bg-secondary-100 transition duration-300">Add</button>
      </div>

      

      <div>
        <h2 className="text-2xl font-Gupter font-[600] mb-4 mt-12 p-2 tracking-wide border-l-2 border-l-secondary-100">Added skills</h2>
        <ul className='space-y-3'>
          <li className='flex items-center w-fit pb-2 gap-3 border-b-2 border-b-secondary-100 '>Frontend Developer - 70% <button className='text-red-400 transition-colors hover:text-red-500'><MinusSquare/></button></li>
          <li className='flex items-center w-fit pb-2 gap-3 border-b-2 border-b-secondary-100 '>Frontend Developer - 70% <button className='text-red-400 transition-colors hover:text-red-500'><MinusSquare/></button></li>
          <li className='flex items-center w-fit pb-2 gap-3 border-b-2 border-b-secondary-100 '>Frontend Developer - 70% <button className='text-red-400 transition-colors hover:text-red-500'><MinusSquare/></button></li>
          <li className='flex items-center w-fit pb-2 gap-3 border-b-2 border-b-secondary-100 '>Frontend Developer - 70% <button className='text-red-400 transition-colors hover:text-red-500'><MinusSquare/></button></li>
          <li className='flex items-center w-fit pb-2 gap-3 border-b-2 border-b-secondary-100 '>Frontend Developer - 70% <button className='text-red-400 transition-colors hover:text-red-500'><MinusSquare/></button></li>
        </ul>
      </div>
    </form>
  </div>
  )
}

export default SkillsPage