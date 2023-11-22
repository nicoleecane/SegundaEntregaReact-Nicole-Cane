import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
 <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
      <img className="logoato" src="https://freepngimg.com/thumb/anime/117226-on-attack-titan-logo-download-hd.png" alt=""  width="50" height="50" class="d-inline-block align-text  "/>
      Attack On Titan
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Characters</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Watch Season 4</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">All Seasons</a>
        </li>
      </ul>
      
    </div>
    <div className="cart-widget" style={{color:"violet"}}>
        <CartWidget />
      </div>
  </div>
  
</nav>

  </>   
  )
}