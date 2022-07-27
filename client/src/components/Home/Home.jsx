import React from "react";
import Dogs from '../Dogs/Dogs';
import SearchBar  from "../SearchBar/SearchBar";

const Home = () =>{
  return (
    <div>
      <div>
        <SearchBar/>
      </div>
      <div>
        <Dogs/>
      </div>
    </div>
  )
}
 export default Home; 