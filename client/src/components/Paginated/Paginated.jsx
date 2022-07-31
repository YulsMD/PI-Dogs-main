import React from "react";

export default function Paginated ({dogsPerPage, allDogs, paginated}){
  const pageNumbers = []
  console.log(dogsPerPage)
  console.log(paginated)
  for(let i=0; i<=Math.floor(allDogs/dogsPerPage);i++){
    pageNumbers.push(i+1)
    console.log(pageNumbers)
  }
  return(
    <div>
      <ul>
        {pageNumbers?.map(num =>{
          return <button key={num} onClick={()=>paginated(num)}>{num}</button>
        })}
      </ul>
    </div>
  )
  
}