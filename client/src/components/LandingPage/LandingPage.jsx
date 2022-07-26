import React from "react";
//import Landing from '../../images/Landing.jpg'
import { Link } from "react-router-dom";

export default function LandingPage (){
  
  return(
    <div>
      <h1>WELCOME TO DOGS LAND</h1>
        <Link to='/home'>
          <button>Home</button>
        </Link>
    </div>
    )
}