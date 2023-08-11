import Image from "next/image"
import FetchData from "../../../../sanity/FetchData"
import { urlForImage } from "../../../../sanity/lib/image"
import Bed from "../../../../public/download (4).jpeg"
import Button from "@/app/ui/Button"
import { GiKitchenKnives } from "react-icons/gi"
import { FaParking } from "react-icons/fa"
import { MdBalcony } from "react-icons/md"
import { BiWifi } from "react-icons/bi"
import { RiFridgeFill } from "react-icons/ri"
import { MdPets } from "react-icons/md"
import { MdMicrowave } from "react-icons/md"
import { MdLandscape } from "react-icons/md"
export default async function Page ({params} : {params : any}){
    const datafetched = await FetchData()
    const filterData = datafetched.find ((item : any ) => item.slug.current == params.PropertyDetail)
    console.log(filterData)
   // console.log(datafetched)
    console.log(params)
    return(
        <div>
            <div>
            {/** TITLE */}
            <h1 className="font-semibold text-3xl pb-4"> {filterData.title}</h1>
            
            {/**Image Section */}
            <div className="flex rounded-3xl">
                <img src={urlForImage(filterData.mainimage).url()} alt={filterData.title} className="w-2/4 h-80 object-cover object-center rounded-lg" />
            </div>

              {/**Section after Image */}
                <div className="flex justify-between">
              
                {/** Details Section  */}
                <div className=" w-3/5  ">        
                <h2 className="font-semibold text-2xl pt-8">{filterData.propertytype} hosted by </h2>
                <div className="pt-2 ">
                    <h3 className="font-normal border-b-2 pb-3 " >{filterData.bedroom} bedrooms</h3>
                    <h4 className="font-normal border-b-2 text-lg py-4"> {filterData.description}</h4>                
                </div>
                </div>
                 
                 {/**Card Section */}
                 <div className="px-8 h-80 w-1/3 shadow-lg p-24 rounded-lg border-b-2  ">
                     <div className=" flex  gap-2 items-center  "> <h1 className=" text-2xl font-semibold"> ${filterData.price}</h1> <span className="font-light">night</span> </div>
                          <Button/>
                     <div className="font-light text-center py-4"> You want be charged Yet </div>
                 </div>
                
                </div> 

                <div className="border-b-2">
                    <h1 className="text-2xl font-semibold py-4 ">Where you'll Sleep</h1>
                    <Image src={Bed} alt="bed" width={300} height={300} className="rounded-md"/>
                    <h1 className="text-base font-semibold pt-4">Bedroom</h1>
                    <h2 className="text-sm pb-6">{filterData.bedroom}  bed</h2>
                
                </div>  

                <div className="border-b-2 w-2/5 text-[#222222]">
                    <h1 className=" text-2xl font-semibold py-4 " >What this place offers</h1>
                    <div className="justify-between text-lg font-extralight flex text-[#222222]">
                        <div className="">
                            <ul className="flex items-center"> <GiKitchenKnives width={"20"} height={"20"}/> Kitchen</ul>
                            <ul className="flex items-center"> <FaParking width={"20"} height={"20"}/>Free Parking on Premises</ul>
                            <ul className="flex items-center"> <MdBalcony width={"20"} height={"20"}/>Patio or balcony</ul>
                            <ul className="flex items-center"> <RiFridgeFill width={"20"} height={"20"}/>Refrigerator</ul>
                        </div>
                        <div>
                            <ul className="flex items-center"> <BiWifi width={"20"} height={"20"}/>Wifi</ul>
                            <ul className="flex items-center"> <MdPets width={"20"} height={"20"}/>Pets Allowed</ul>
                            <ul className="flex items-center"> <MdLandscape width={"20"} height={"20"}/>Backyard</ul>
                            <ul className="flex items-center"> <MdMicrowave width={"20"} height={"20"}/>Microwave</ul>

                        </div>
                    </div>
                </div>
      
        </div>
        </div>
    )
}

//params sai url mai jo be type hota hai uski value get karlaitay hain 
//last mai jo bee url hai wo params mai receive hogai gee
//ab data poora fetch karingay aur filter kai options sai sirf slug waala data filter karingay
//items mai poora data aata hai toh ab hum filter kartay hain kai slug ki basis per kai jab item match karay param sai
//wo waala data laado
//filter data agar bht saaray hain toh array mai laikar aata hai jab kai dind object mai 
//ail value ki base per bht ziyaada data dikhaana cahtay ho toh filer 
//aik value ki basis per sirf aik data aayi toh find
