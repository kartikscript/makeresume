import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SigninPage = () => {
  return (<SignIn afterSignOutUrl='/'/>)
}

export default SigninPage