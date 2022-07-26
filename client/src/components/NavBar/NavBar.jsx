import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar (){
  return (
    <React.Fragment>
      <nav>
        <li>
          <NavLink to={'/home'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/create'}>Create Dog</NavLink>
        </li>
      </nav>
    </React.Fragment>
  )
}

