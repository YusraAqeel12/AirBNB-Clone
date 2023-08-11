import React from 'react'
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline"
const Searchbar = () => {
  return (
   
        <div className='flex border-2 rounded-full py-2 px-2 shadow-sm justify-between'>
            
    {/*     <input type='text' placeholder='Start Your Search' className=' outline-none flex-grow bg-transparent '> */}
            <div className='grid grid-cols-3 gap-2 items-center text-sm justify-items-stretch '>
            <div className='font-medium'>Anywhere</div>
            <div className='font-medium sm:hidden md:inline'>Any Week</div>
            <div className='text-slate-700 sm:hidden md:inline' >Add Guests</div>
            </div>
            
            <MagnifyingGlassIcon  className='h-8 flex bg-red-400 text-white  rounded-full p-2 cursor-pointer  '/>


            
            
        </div>

   
  )
}

export default Searchbar