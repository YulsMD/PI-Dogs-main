import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CreateNewDog, getAllTemperaments } from "../../redux/actions";
import validations from "./Validations";


export default function CreateDog (){
  const allTemperaments = useSelector(state=>state.temperaments)
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    name: "",
    weight_min: "",
    weight_max: "", 
    temperament: [],
    height_min: "",
    height_max: "",
    life_span_min: "",
    life_span_max: "",
    image: ""
  }) 

  const dispatch = useDispatch()

  useEffect(()=>{
    if(!allTemperaments.lenght){
      dispatch(getAllTemperaments())
    }
  })

  function handleChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validations({
      ...input,
      [e.target.name]: e.target.value
    })) 

    console.log(input)
  }


  /*const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(CreateNewDog(input));
  } */

  return(
    <div>
      <nav>
        <Link to = '/home'><button>Home</button></Link>
      </nav>
      <div>
        <h2>DO YOU WANT CREATE YOUR OWN BREED DOG?</h2>
      </div>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={input.name} onChange={handleChange}/>
          {<span>{errors.name?errors.name:'OK'}</span>}
        </div>
        <div>
          <label>Weight min:</label>
          <input type="text" name="weight_min" value={input.weight_min} onChange={handleChange}/>
        </div>
        <div>
          <label>Weight max:</label>
          <input type="text" name="weight_max" value={input.weight_max} onChange={handleChange}/>
        </div>
        <div>
          <label>Height min:</label>
          <input type="text" name="height_min" value={input.height_min} onChange={handleChange}/>
        </div>
        <div>
          <label>Height max:</label>
          <input type="text" name="height_max" value={input.height_max} onChange={handleChange}/>
        </div>
        <div>
          <label>Life span min:</label>
          <input type="text" name="life_span_min" value={input.life_span_min} onChange={handleChange}/>
        </div>
        <div>
          <label>Life span max:</label>
          <input type="text" name="life_span_max" value={input.life_span_max} onChange={handleChange}/>
        </div>
        <div>
          <label>Temperaments:</label>
          <select>
            {
              allTemperaments?.map(e=>{
                return <option value={e.name} key={e.id}>
                  {e.name}
                </option>
              })
            }
          </select>
        </div>
      </form>
    </div>
  )
}