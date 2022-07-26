import React from "react";

export default function Paginated ({dogsPerPage, allDogs, paginated}){
  const pageNumbers = []

  for(let i=0; i<=Math.floor(allDogs/dogsPerPage);i++){
    pageNumbers.push(i+1)
  }
  return(
    <nav>
      <ul>
        {pageNumbers?.map(num =>{
          return <li key={num}>
            <a onClick={()=>paginated(num)}>{num}</a>
          </li>
        })}
      </ul>
    </nav>
  )
  
}