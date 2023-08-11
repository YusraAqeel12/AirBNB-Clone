import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className=' md:flex flex-row items-center w-full mt-auto  overflow-hidden '>
        {/** RIGHT SECTION  */}
        <ul className='flex gap-2 font-light'>
            <li className='hover:underline cursor-pointer'>©2023 Airbnb, Inc.</li>
            <li className='hover:underline' >Terms</li>
            <li className='hover:underline' >Sitemap</li>
            <li className='hover:underline'>Privacy</li>
            <li className='hover:underline'>Your Privacy Choices</li>
            <li className='hover:underline'>Destinations</li>
        </ul>
        
        {/** LEFT SECTION  */}
        <ul className='gap-4 flex  text-gray-800 font-semibold  mx-auto'>
            <li className='hover:underline flex flex-row gap-1 items-center'>
            <GlobeAltIcon className='h-5'/>English(US)
            </li>
            <li className='hover:underline'>$ USD</li>
            <li className='hover:underline gap-1 flex items-center'>Support & resources
            <ChevronUpIcon className='h-5'/>
            </li>

        </ul>

    </div>
  )
}

export default Footer