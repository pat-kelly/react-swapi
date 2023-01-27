import { Link, useLocation } from "react-router-dom"

export function StarShipPage(props){
  const location = useLocation();
  const ship = location.state.ship;
  console.log(ship);
  
  return(
    <main className="ship-details">
      <div>
        <p><h3>Name: </h3>{ship.name}</p>
        <p><h3>Model: </h3>{ship.model}</p>
        <p><h3>Class: </h3>{ship.starship_class}</p>
        <p><h3>Manufaturer: </h3>{ship.manufacturer}</p>
        <Link to='/starships'>Back to Listing</Link>
      </div>
    </main>
  )
}