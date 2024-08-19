import React from 'react'
import Design from '../components/login/left-design'
import Login from '../components/login/login'

const LoginPage = () => {
  return (
    <div className='flex h-screen w-screen'>
        <Design />
        <Login />
    </div>
  )
}

export default LoginPage