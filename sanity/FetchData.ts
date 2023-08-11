import { client } from "./lib/client";

export default async function FetchData(){
   const query = '*[_type == "property" ]'
   const data = await client.fetch (query)
   return data

}