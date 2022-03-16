import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";

function NavBar() {
    return (
    <nav>
      <li><Link to={'/'}><Logo/></Link></li>
      
      <ul className="nav">
        <li><Link to={'/mause'}>Mause</Link></li>
        <li><Link to={'/teclado'}>Teclado</Link></li>
        <li><Link to={'/auriculares'}>Auriculares</Link></li>
        <li><Link to={'/'}>Todos</Link></li>

      </ul>
    </nav>
    );
}
export default NavBar;
  