import React from 'react'
import leftArrow from '../assets/icons/leftArrow.svg'
import ProfileImg from '../assets/icons/profileImg.svg'
import { useAuth } from '../context/auth-context';

const SettingsPage = () => {
  const { userName , email } = useAuth();
  return (
    <div className='px-14 mt-8'>
        <div className='flex flex-col justify-start gap-10'>
          <div className='flex items-center'>
            <img src={leftArrow} alt='settings' className='mr-2 w-8 h-8 cursor-pointer' />
            <h1 className='font-bold text-3xl tracking-wide'>Account Settings</h1>
          </div>
          <div className='flex justify-start items-center gap-8'>
            <img src={ProfileImg} alt='profile' className='w-32 h-32 rounded-full' />
            <div className='flex flex-col gap-2'>
              <label className='font-bold text-black/70'>User Name</label>
              <input type='text' value={userName? userName : ""} className='rounded-md border border-gray-300 cursor-not-allowed' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-bold text-black/70'>Email</label>
              <input type='text' value={email? email : ""} className='rounded-md border border-gray-300 cursor-not-allowed' />
            </div>
          </div>
            <h1 className='text-2xl font-bold tracking-wide'>Subscriptions</h1>
          <div className='px-14 bg-gradient-to-r from-[#ffffff] to-[#EDD9FF] h-[100px] rounded-lg border border-[#7E22CE] flex justify-between items-center'>
            <p className='text-purple-500 text-2xl'>Oops! You don’t have any active plans. <b>Upgrade now!</b> </p>
            <button className='text-white rounded-lg bg-purple-700 w-[80px] h-[52px]'>Upgrade</button>
          </div>
        </div>
    </div>
  )
}

export default SettingsPage