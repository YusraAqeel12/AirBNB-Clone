import React from 'react'
import { Container } from '../../../src/app/ui/Container'
import Menubar from '../../../src/app/ui/Menubar'
import Searchbar from '../../../src/app/ui/Searchbar'
import Usermenu from '../../../src/app/ui/Usermenu'

const Navbar = () => {
  return (
    <div className='w-full border-b-2 shadow-sm items-center sticky top-0 z-10 grid grid-cols-3 py-4'>
        {/** IMAGE */}
        <div>
            <Container/>
        </div>

        {/** MIDDLE SECTION Search Bar */}
        <Searchbar/>

        
        {/** END SECTION  */}
        <div className='items-center flex flex-row gap-2 justify-end text-gray-600'>
        <Usermenu/>
        <Menubar/>
        </div>

    </div>
  )
}

export default Navbar