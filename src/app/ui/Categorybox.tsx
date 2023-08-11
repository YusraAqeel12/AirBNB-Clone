import React from 'react'
import { IconType } from 'react-icons'
interface CategoryBoxProps 
    {
        name : string , 
        icon :IconType
    }

const CategoryBox : React.FC<CategoryBoxProps> = ( { icon:Icon , name  }) => {
  return (
    <div className='flex flex-col gap-2  justify-between items-center text-gray-500  hover:text-neutral-800 transition cursor-pointer border-b-2 '>
       {/** ICON */}
        <div>
            <Icon size={26}/>
        </div>

        {/** NAME  */}
        <p className=' font-medium text-sm'>{name}</p>

    </div>
  )
}

export default CategoryBox