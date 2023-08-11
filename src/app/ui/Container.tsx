'use client'
import React from 'react'
import Link from 'next/link'
import logo from "../../../public/logo.webp"
import Image from 'next/image'


export const Container = () => {
  
  return (
    <div className='hidden lg:block'>
        <Link href={"/"}>
            <Image src={logo} alt='Logo' height={90} width={90}/>
        </Link>

    </div>
  )
}
