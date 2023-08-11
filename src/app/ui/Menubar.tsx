'use client'
import React from 'react'
import { UserIcon } from '@heroicons/react/24/solid'
import { Bars3Icon } from '@heroicons/react/24/outline'


const Menubar = () => {
  return (
    <div className='px-1 py-2  rounded-full border-2 hover:shadow-md items-center justify-center gap-2 sm:hidden md:inline-flex  '>
        <Bars3Icon className='h-6'
        />
        <UserIcon className='h-6 bg-slate-700 text-white rounded-full'/>
    </div>
  )
}

export default Menubar