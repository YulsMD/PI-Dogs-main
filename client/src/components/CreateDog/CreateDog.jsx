import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CreateNewDog, getAllDogs, getAllTemperaments } from "../../redux/actions";
import validations from "./validations";


export default function CreateDog (){
  const allDogs =useSelector(state => state.dogs)
  const allTemperaments = useSelector(state=>state.temperaments)
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    name: "",
    weight_min: "",
    weight_max: "", 
    temperaments: [],
    height_min: "",
    height_max: "",
    life_span_min: "",
    life_span_max: "",
    image: ""
  }) 

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllTemperaments())
  },[dispatch]) 

  function handleChange(e){
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
      setErrors(validations({
        ...input,
        [e.target.name]: e.target.value
      }))
    }

  function handleTemperaments(e){
    if(input.temperaments === "") setInput({...input, temperaments: []})
    if(Object.values(input.temperaments).includes(e.target.value)){
      alert('Duplicate temperament')
    } 
      else {
        setInput({
          ...input,
          temperaments: [...input.temperaments, e.target.value]
        })
        console.log(e)
      }
  }

  function handleDelete(e){
    setInput({
      ...input,
      temperaments: input.temperaments.filter( temp => temp !== e)
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(CreateNewDog(input))
  } 

  return(
    <div>
      <nav>
        <Link to = '/home'><button>Home</button></Link>
      </nav>
      <div>
        <h2>DO YOU WANT CREATE YOUR OWN BREED DOG?</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={input.name} onChange={handleChange}/>
          {<span>{errors.name}</span>}
        </div>
        <div>
          <label>Weight min:</label>
          <input type="text" name="weight_min" value={input.weight_min} onChange={handleChange}/>
          {<span>{errors.weight_min}</span>}
        </div>
        <div>
          <label>Weight max:</label>
          <input type="text" name="weight_max" value={input.weight_max} onChange={handleChange}/>
          {<span>{errors.weight_max}</span>}
        </div>
        <div>
          <label>Height min:</label>
          <input type="text" name="height_min" value={input.height_min} onChange={handleChange}/>
          {<span>{errors.height_min}</span>}
        </div>
        <div>
          <label>Height max:</label>
          <input type="text" name="height_max" value={input.height_max} onChange={handleChange}/>
          {<span>{errors.height_max}</span>}
        </div>
        <div>
          <label>Life span min:</label>
          <input type="text" name="life_span_min" value={input.life_span_min} onChange={handleChange}/>
          {<span>{errors.life_span_min}</span>}
        </div>
        <div>
          <label>Life span max:</label>
          <input type="text" name="life_span_max" value={input.life_span_max} onChange={handleChange}/>
          {<span>{errors.life_span_max}</span>}
        </div>
        <div>
          <label>Temperaments:</label>
          <select onChange={handleTemperaments}>
            {
              allTemperaments?.map(e=>{
                return <option value={e.name} key={e.id}>
                  {e.name}
                </option>
              })
            }
          </select>
        </div>
        <div>
          {
            input.temperaments?.map(e=>
              <div key={e}>
                <button type='button' key={e} value={e} onClick={()=>handleDelete(e)}>{e}</button>
              </div>
            )
          }
        </div>
        <div>
          <label>Image:</label>
          <input type="text" name="image" value={input.image} onChange={handleChange}/>
        </div>
        <button type="submit">CREATE</button>
      </form>
    </div>
  )
}