import { Link } from "react-router-dom";

export function Navbar(){
  return(
    <>
      <header>
        <Link to='/'>
          <img 
            src='logo.svg'
            alt="logo"
            style={{width: '100px', height: '100px'}}
          />
        </Link>
        <Link to="/starships">Starship Listing</Link>
      </header>
    </>
  )
}