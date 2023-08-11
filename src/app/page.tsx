import AllProperties from "../app/AllProperties/page"
import Category from './component/Category'
export default async function Home ()  {
  return (
    <div>
      <Category/>
      <AllProperties/>
    
      
      

    </div>
  )
}


//serversiderpops mai async function daala phir query define ki jo humnai studio mai use ki thee usko var
//mai daala and query ko fetch kiya and then return