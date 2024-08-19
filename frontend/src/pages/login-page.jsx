import React from 'react'
import Design from '../components/Login/left-design'
import Login from '../components/Login/login'

const LoginPage = () => {
  return (
    <div className='flex h-screen w-screen'>
        <Design />
        <Login />
    </div>
  )
}

export default LoginPage