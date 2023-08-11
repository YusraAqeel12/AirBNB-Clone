import { urlForImage } from "../../../sanity/lib/image"
import FetchData from '../../../sanity/FetchData'
import Link from "next/link"
export default async function Home ()  {
  const datafetched = await FetchData()
 // console.log ( "data" , datafetched)
  return (
    <div>

      <div className='flex flex-row gap-4 items-center '>
        {datafetched.map((PropertyDetail : any)=>
        <Link href={`/PropertyDetail/${PropertyDetail.slug.current}`} >
          
          <div className=' items-center '>
          <img src={urlForImage(PropertyDetail.mainimage).url()} alt={PropertyDetail.title}  className='rounded-2xl w-full object-cover h-40 object-center'/>
          <h1 className='font-semibold mt-2 text-base'>{PropertyDetail.title}</h1>
          <h2 className='font-size[15px] font-semibold underline pt-1'>${PropertyDetail.price} <span className='font-thin'>total before taxes</span></h2>
          </div>

       
        </Link>
        )}

      </div>

    </div>
  )
}

//hum cah rahay hain hum page banay slug ki basis per hum slug ki basis per us page per jaain
//properties given ko slug ki basis per doosray page per lao
//href waalay part sai yeh horaha hai jo url hai wo property ka title hai jo route banay wo slug ki basis per hai 
//ab hum cah rahay hain jo url hai uska he data aayi hain uskia liyae we will use params