import { useEffect, useState } from "react"


export function ShipList(){
  const [shipList, setShipList] = useState([]);

  useEffect(()=>{
    const fetchShips = async()=>{
      //api call here
    }
    fetchShips();
  }, [])

  return(
    <>
      <h2>Starships here!</h2>
    </>
  )
}