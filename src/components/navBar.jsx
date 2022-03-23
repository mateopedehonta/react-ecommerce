import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";

function NavBar() {
    return (
    <nav className="nav">
      <li><Link to={'/'}><Logo/></Link></li>
      
      <ul >
        <li className="todos"><Link to={'/'}>Todos</Link>
        <ul className="subNav">
          <li><Link to={'/mause'}>Mause</Link></li>
          <li><Link to={'/teclado'}>Teclado</Link></li>
          <li><Link to={'/auriculares'}>Auriculares</Link></li>
        </ul>
        </li>
        
        <li><Link to={'/cart'}>Carrito</Link></li>

      </ul>
    </nav>
    );
}
export default NavBar;
  