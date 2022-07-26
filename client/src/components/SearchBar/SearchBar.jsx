import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchDogByName } from "../../redux/actions";

export default function SearchBar ({setCurrentPage}){
  const dispatch = useDispatch()
  const [name, setName] = useState("")

  const handleChange = (e) =>{
    setName(e.target.value)
    console.log(name)
  }

  const handleSubmit = (name) => {
    /* console.log(name)
    if(name.length < 3) {
     return alert('Have to complete breed')
    } else { */

      dispatch(SearchDogByName(name))
      setName('')
      setCurrentPage(1)
      console.log(name)
    
  }

  return (
    <div>
      <input type='text' placeholder='Search breed' value={name} onChange={e => handleChange(e)}/>
      <button type= 'submit' onSubmit={e =>handleSubmit(e)}>🔎🐕</button>
    </div>
  )
}

