import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (<SignUp afterSignOutUrl='/'/>)
}

export default SignUpPage