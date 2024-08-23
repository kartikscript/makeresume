import React, { ReactNode } from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <main className='h-screen flex justify-center items-center'>
      {children}
    </main>
  )
}

export default Layout