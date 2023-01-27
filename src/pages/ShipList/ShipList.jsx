import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getStarshipList } from "../../services/api-calls";


export function ShipList(){
  const [shipList, setShipList] = useState([]);

  useEffect(()=>{
    const fetchShips = async()=>{
      const shipData = await getStarshipList();
      setShipList(shipData.results);
    }
    fetchShips();
  }, [])

  return(
    <main>
      {shipList.length ?
        <>
          {shipList.map((ship, idx) =>(
            <Link key={idx} className="ship-tile" to='/ship' state={{ship}}>
              <div>
                {ship.name}
              </div>
            </Link>
          ))}
        </>
        :
        <>
          <h3 className="loading">Loading...</h3>
        </>
      }
    </main>
  )
}