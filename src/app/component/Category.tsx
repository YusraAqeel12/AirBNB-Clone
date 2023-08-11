import React from "react"
import CategoryBox from "../../app/ui/Categorybox"
import { categories } from "@/app/utils/mock"
const  Category = () => {
  return (
    <div className=" py-4 flex flex-row items-center justify-between overflow-x-auto">
      {categories.map((item)=>{
        return(
          <CategoryBox
          key={item.name}
          name={item.name}
          icon={item.icon} //categories hamari categories ka data hai //CatBox mai deata ki styling hai  
          
          />
        )
      })}
       

    </div>
  )
}

export default  Category
