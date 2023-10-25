import Navbar from "../components/Navbar"
import "./App.css";
import Data from "./data";
import Card from "../components/Card";
export default function App()
{
  const myCard = Data.map(data => {
    return <Card key={data.id}
                  data={data}/>
  })
  
  return(
    <> 
      <Navbar />
      <section>{myCard}</section>
    </>
  )
}