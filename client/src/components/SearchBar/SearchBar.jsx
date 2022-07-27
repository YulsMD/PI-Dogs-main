import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchDogByName } from "../../redux/actions";

export default function SearchBar (){
  const dispatch = useDispatch()
  const [name, setName] = useState("")

  const handleChange = (e) =>{
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
  }

  const handleSubmit = (e) => {
    /* console.log(name)
    if(name.length < 3) {
     return alert('Have to complete breed')
    } else { */
      e.preventDefault()
      dispatch(SearchDogByName(name))
      setName('')
      console.log(name)
    
  }

  return (
    <form onSubmit={e =>handleSubmit(e)}>
      <input type='text' placeholder='Search breed' value={name} onChange={e => handleChange(e)}/>
      <input type= 'submit' value='Search'/>
    </form>
  )
}

