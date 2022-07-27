import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar (){
  return (
    <React.Fragment>
      <nav>
        <li>
          DOGS LAND
        </li>
        <li>
          <NavLink to={'/create'}>Create Dog</NavLink>
        </li>
      </nav>
    </React.Fragment>
  )
}

