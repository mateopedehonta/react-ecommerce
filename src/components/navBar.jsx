import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "../context/cartContex";
 
function NavBar() {
    const {cartList} =useCartContext()

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
        <li className="iconCart">
          <Link to={'/cart'}>
            <FontAwesomeIcon icon={faCartShopping}/> 
          </Link>   
        </li>
        <div>({cartList.length})</div>
      </ul>
    </nav>
    );
}
export default NavBar;
  