import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  CreateNewDog,
  getAllDogs,
  getAllTemperaments,
} from "../../redux/actions";
import Dog_1_card from "../../images/Dog_1_card.jpg";
import Dog_2_card from "../../images/Dog_2_card.jpg";
import Dog_3_card from "../../images/Dog_3_card.jpg";
import s from "../CreateDog/CreateDog.module.css";
import Logo from "../../images/Home_Create.png";
//import validations from '../CreateDog/validations'
function validations({name , weight_min, weight_max, height_min, height_max, life_span_min, life_span_max}){
  let error = {}
  if(!name){error.name= 'Should to insert name'}
  else if(!/^([a-zñáéíóúA-Z][^\d@+.,-_{}]+[\s]?)+$/.test(name)){
    error.name = 'Invalid name'
  }

  if(!weight_min) { error.weight_min = 'Insert weight min'}
  else if (!/^[0-9]*$/.test(weight_min)){
    error.weight_min = 'Only numbers'
  }else if (!/^[0-9]{1,3}$/.test(weight_min)){
    error.weight_min = 'Must be less than 4 digits'
  }

  if(!weight_max) { error.weight_max = 'Insert weight max'}
  else if (!/^[0-9]*$/.test(weight_max)){
    error.weight_max = 'Only numbers'
  }
  else if (!/^[0-9]{1,3}$/.test(weight_max)){
    error.weight_max = 'Must be less than 4 digits'
  }

  if(parseInt(weight_min) >= parseInt(weight_max)){
    error.weight_max = 'Weight max must be greater'
  }

  if(!height_min) { error.height_min = 'Insert height min'}
  else if (!/^[0-9]+$/.test(height_min)){
    error.height_min = 'Only numbers'
  }
  else if (!/^[0-9]{1,3}$/.test(height_min)){
    error.height_min = 'Must be less than 4 digits'
  }

  if(!height_max) { error.height_max = 'Insert height max'}
  else if (!/^[0-9]*$/.test(height_max)){
    error.height_max = 'Only numbers, must be less than 4 digits'
  }
  else if (!/^[0-9]{1,3}$/.test(height_max)){
    error.height_max = 'Must be less than 4 digits'
  }

  if(parseInt(height_min) >= parseInt(height_max)){
    error.height_max = 'Height max must be greater'
  }

  if(!life_span_min) { error.life_span_min = 'Insert life span min'}
  else if (!/^[0-9]+$/.test(life_span_min)){
    error.life_span_min = 'Only numbers'
  }
  else if (!/^[0-9]{1,3}$/.test(life_span_min)){
    error.life_span_min = 'Must be less than 4 digits'
  }

  if(!life_span_max) { error.life_span_max = 'Insert life span max'}
  else if (!/^[0-9]*$/.test(life_span_max)){
    error.life_span_max = 'Only numbers, must be less than 4 digits'
  }
  else if (!/^[0-9]{1,3}$/.test(life_span_max)){
    error.life_span_max = 'Must be less than 4 digits'
  }

  if(parseInt(life_span_min) >= parseInt(life_span_max)){
    error.life_span_max = 'Height max must be greater'
  }

  return error
}

export default function CreateDog() {
  const allDogs = useSelector((state) => state.dogs);
  const allTemperaments = useSelector((state) => state.temperaments);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    weight_min: "",
    weight_max: "",
    temperaments: [],
    height_min: "",
    height_max: "",
    life_span_min: "",
    life_span_max: "",
    image: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTemperaments());
    dispatch(getAllDogs());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validations({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleTemperaments(e) {
    if (input.temperaments === "") setInput({ ...input, temperaments: [] });
    if (Object.values(input.temperaments).includes(e.target.value)) {
      alert("Duplicate temperament");
    } else {
      setInput({
        ...input,
        temperaments: [...input.temperaments, e.target.value],
      });
    }
  }

  function handleDelete(e) {
    setInput({
      ...input,
      temperaments: input.temperaments.filter((temp) => temp !== e),
    });
  }

  function selectImage(e) {
    if (!input.image) {
      setInput({ ...input, image: e.target.value });
    }
    if (input.image) {
      setInput({ image: "" });
      setInput({ ...input, image: e.target.value });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const existeName = allDogs.filter(
      (e) => e.name.toLowerCase() === input.name.toLowerCase()
    );
    if (existeName.length) {
      return alert("Dog already exists");
    } else {
      if (!Object.keys(input).length || input.temperaments.length === 0) {
        alert("Complete all options");
      } else if (Object.keys(errors).length) {
        alert("incorrect data");
      } else {
        dispatch(CreateNewDog(input));
        alert("Dog created succesfully");
        setInput({
          name: "",
          image: "",
          height_min: "",
          height_max: "",
          weight_min: "",
          weight_max: "",
          life_span_min: "",
          life_span_max: "",
          temperaments: [],
        });
      }
    }
  };

  return (
    <div className={s.body}>
      <div className={s.blur}>
        <div className={s.container}>
          <div className={s.nav}>
            <div className={s.container2}>
              <Link to="/home">
                <img alt="bg-button" src={Logo} className={s.logo} />
              </Link>
            </div>
            <div className={s.background_title}>
              <h2 className={s.title}>CREATE YOUR OWN BREED DOG</h2>
            </div>
          </div>
          <div className={s.align_form}>
            <form onSubmit={handleSubmit} className={s.form}>
              <div className={s.container_first_row}>
                <div className={s.container_name_input}>
                  <label className={s.label}>Name:</label>
                  <div className={s.container_inputs}>
                    <input
                      type="text"
                      name="name"
                      value={input.name}
                      onChange={handleChange}
                      className={s.inputs}
                    />
                    {<span className={s.span}>{errors.name}</span>}
                  </div>
                </div>
                <div>
                  <button className={s.button} type="submit">
                    CREATE
                  </button>
                </div>
              </div>
              <div className={s.container_first_row}>
                <div className={s.container_name_input}>
                  <label className={s.label}>Weight min:</label>
                  <div className={s.container_inputs}>
                    <input
                      type="text"
                      name="weight_min"
                      value={input.weight_min}
                      onChange={handleChange}
                      className={s.inputs}
                    />
                    {<span className={s.span}>{errors.weight_min}</span>}
                  </div>
                </div>
                <div className={s.container_name_input}>
                  <label className={s.label}>Weight max:</label>
                  <div className={s.container_inputs}>
                    <input
                      type="text"
                      name="weight_max"
                      value={input.weight_max}
                      onChange={handleChange}
                      className={s.inputs}
                    />
                    {<span className={s.span}>{errors.weight_max}</span>}
                  </div>
                </div>
              </div>
              <div className={s.container_first_row}>
                <div className={s.container_name_input}>
                  <label className={s.label}>Height min:</label>
                  <div className={s.container_inputs}>
                    <input
                      type="text"
                      name="height_min"
                      value={input.height_min}
                      onChange={handleChange}
                      className={s.inputs}
                    />
                    {<span className={s.span}>{errors.height_min}</span>}
                  </div>
                </div>
                <div className={s.container_name_input}>
                  <label className={s.label}>Height max:</label>
                  <div className={s.container_inputs}>
                    <input
                      type="text"
                      name="height_max"
                      value={input.height_max}
                      onChange={handleChange}
                      className={s.inputs}
                    />
                    {<span className={s.span}>{errors.height_max}</span>}
                  </div>
                </div>
              </div>
              <div className={s.container_first_row}>
                <div className={s.container_name_input}>
                  <label className={s.label}>Life span min:</label>
                  <div className={s.container_inputs}>
                    <input
                      type="text"
                      name="life_span_min"
                      value={input.life_span_min}
                      onChange={handleChange}
                      className={s.inputs}
                    />
                    {<span className={s.span}>{errors.life_span_min}</span>}
                  </div>
                </div>
                <div className={s.container_name_input}>
                  <label className={s.label}>Life span max:</label>
                  <div className={s.container_inputs}>
                    <input
                      type="text"
                      name="life_span_max"
                      value={input.life_span_max}
                      onChange={handleChange}
                      className={s.inputs}
                    />
                    {<span className={s.span}>{errors.life_span_max}</span>}
                  </div>
                </div>
              </div>
              <div className={s.container_first_row}>
                <div className={s.container_name_input}>
                <label className={s.label}>Image:</label>
                <input
                  type="text"
                  name="image"
                  value={input.image}
                  onChange={handleChange}
                  className={s.inputs}
                />
                </div>
                <div className={s.container_images}>
                  <button
                    type="button"
                    value={Dog_1_card}
                    className={s.button_one}
                    onClick={selectImage}
                  ></button>
                  <button
                    type="button"
                    value={Dog_2_card}
                    onClick={selectImage}
                    className={s.button_two}
                  ></button>
                  <button
                    type="button"
                    value={Dog_3_card}
                    onClick={selectImage}
                    className={s.button_three}
                  ></button>
                </div>
              </div>
              <div className={s.container_first_row}>
                <div className={s.container_name_input}>
                <label className={s.label}>Temperaments:</label>
                <div>
                  <select onChange={handleTemperaments} className={s.select}>
                    {allTemperaments?.map((e) => {
                      return (
                        <option value={e.name} key={e.id}>
                          {e.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                </div>
                
              </div>
              <div className={s.container_temps}>
                {input.temperaments?.map((e) => (
                  <div key={e}>
                    <button
                      type="button"
                      key={e}
                      value={e}
                      onClick={() => handleDelete(e)}
                      className={s.button}
                    >
                      {e}
                    </button>
                  </div>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
