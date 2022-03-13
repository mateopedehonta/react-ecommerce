import React from "react";
import Logo from "./logo";

function NavBar() {
    return (
    <nav>
      <a href="#" ><Logo/></a>
      
      <ul className="nav">
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Shop</a></li>
        <li><a href='#'>About us</a></li>
        <li><a href='#'>Login</a></li>
      </ul>
    </nav>
    );
}
export default NavBar;
  