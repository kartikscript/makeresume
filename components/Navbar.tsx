import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { ClipboardPenLine } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 w-full'>
       <nav className='h-16 w-10/12 flex justify-between items-center fixed top-3 left-1/2 -translate-x-1/2 p-3 backdrop-blur-md rounded-3xl bg-black/30 z-50 '>
         <Link href='/' className='flex gap-1 bg-primary-200 px-4 py-2 rounded-full text-primary-50 '>
           <ClipboardPenLine className='' />
           <h2 className='font-mono font-bold text-xl'>Make-Resume</h2>
         </Link>
         <SignedIn>
          <span className='flex gap-10'>
            <Link className='font-medium hover:text-secondary-100' href='/dashboard'>Dashboard</Link>
            <Link className='font-medium hover:text-secondary-100' href='/'>Home</Link>
          </span>
          <span className=' bg-primary-50 px-2 py-1 rounded-2xl'>
             <UserButton  showName/>
          </span>
         </SignedIn>
         <SignedOut>
          <Link className='font-medium bg-primary-50 px-2 py-1 rounded-2xl text-texts mx-8 hover:text-secondary-100' href='/sign-up'>Sign Up</Link>
        </SignedOut>
       </nav>
    </div>
  )
}

export default Navbar