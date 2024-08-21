import React from 'react'

const WorkExpPage = () => {
  return (
    <div className="min-h-screen flex flex-col   justify-start p-8">
    <h2 className="text-4xl font-Gupter font-[600] mb-8 p-4 tracking-wide border-l-2 border-l-secondary-100">Add Your Work Experience Details</h2>

    <form className='text-primary-50 w-8/12'>
      
      <div className="mb-6 py-4 border-b-2 border-b-secondary-100">                                                                                                                              
        <label htmlFor="name" className="block  font-semibold mb-2">Company Name</label>
        <input type="text" id="name" className="w-full text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter company name" />
        <span className='flex gap-3 items-center mt-2'>
          <label htmlFor="name" className=" font-semibold mb-2">Worked there from :</label>
          <input type="number" id="name" min="1900" max="2099" className="w-2/12 text-texts font-semibold p-1 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Year" />
          <p>-</p>
          <input type="number" id="name" min="1900" max="2099" className="w-2/12 text-texts font-semibold p-1 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Year" />
        </span>
        <div className=' mt-2 flex gap-2 items-center'>
          <label htmlFor="name" className=" font-semibold mb-2">worked as:</label>
          <input type="number" id="name" className="w-6/12 text-texts font-semibold px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your profession" />
        </div>
        
      </div>
    
      <div className="text-center">
        <button type="submit" className="w-full  font-semibold bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition duration-300">Add more</button>
      </div>
    </form>
  </div>
  )
}

export default WorkExpPage