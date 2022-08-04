import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  CreateNewDog,
  getAllDogs,
  getAllTemperaments,
} from "../../redux/actions";
import validations from "./validations";
import Dog_1 from "../../images/Dog_1.jpg";
import Dog_2 from "../../images/Dog_2.jpg";
import Dog_3 from "../../images/Dog_3.jpg";
import s from "../CreateDog/CreateDog.module.css";
import Logo from "../../images/Home_Create.png";

export default function CreateDog() {
  const allDogs = useSelector((state) => state.dogs);
  const allTemperaments = useSelector((state) => state.temperaments);
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(false);
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
      console.log(e);
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
      console.log(e.target.value);
      setInput({ ...input, image: e.target.value });
    }
    if (input.image) {
      setInput({ image: "" });
      console.log(e.target.value);
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
      if (
        !input.name ||
        !input.height_min ||
        !input.height_max ||
        !input.weight_max ||
        !input.weight_min ||
        !input.life_span_min ||
        !input.life_span_max ||
        input.temperaments.length === 0
      ) {
        
        alert("Complete all options");
        setDisabled(true);
      } else if (
        errors.name ||
        errors.height_min ||
        errors.height_max ||
        errors.weight_max ||
        errors.weight_min ||
        errors.life_span ||
        errors.temperaments
      ) {
        setDisabled(true);
        alert("incorrect data");
      } else {
        dispatch(CreateNewDog(input));
        setDisabled(false);
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
                <img alt='bg-button' src={Logo} className={s.logo} />
              </Link>
            </div>
            <div className={s.background_title}>
              <h2 className={s.title}>CREATE YOUR OWN BREED DOG</h2>
            </div>
          </div>
            <div className={s.align_form}>
              <form onSubmit={handleSubmit} className={s.form}>
                <div className={s.container_first_row}>
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
                  <div>
                    <button className={s.button} type="submit">
                      CREATE
                    </button>
                  </div>
                </div>
                <div className={s.container_first_row}>
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
                <div className={s.container_first_row}>
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
                <div className={s.container_first_row}>
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
                <div className={s.container_first_row}>
                  <label className={s.label}>Image:</label>
                  <input
                    type="text"
                    name="image"
                    value={input.image}
                    onChange={handleChange}
                    className={s.inputs}
                  />
                  <div className={s.container_images}>
                    <button
                      type="button"
                      value={Dog_1}
                      className={s.button_one}
                      onClick={selectImage}
                    ></button>
                    <button
                      type="button"
                      value={Dog_2}
                      onClick={selectImage}
                      className={s.button_two}
                    ></button>
                    <button
                      type="button"
                      value={Dog_3}
                      onClick={selectImage}
                      className={s.button_three}
                    ></button>
                  </div>
                </div>
                <div className={s.container_first_row}>
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
                <div className={s.container_temps}>
                  {input.temperaments?.map((e) => (
                    <div key={e}>
                      <button
                        type="button"
                        key={e}
                        value={e}
                        onClick={() => handleDelete(e)}
                        disabled={disabled}
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