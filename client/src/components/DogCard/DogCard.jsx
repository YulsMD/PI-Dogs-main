import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from '../DogCard/DogCard.module.css'

const DogCard = ({name, weight, temperaments, image, id}) =>{
  return (
    <>
      <div className={s.card}>
            <div className={s.div_cont}>
              <div className={s.title}>
                <h3 className={s.h3}>{name}</h3>
              </div>
                <div className={s.div_img}>
                <NavLink to={`/dogs/${id}`} className={s.image}>
                    <img src={image} alt='Dog' width="200" height="200"/>
                </NavLink>
                </div>
              <div className={s.divWeight}>
                <p>Weight: </p>
                <p>{ weight} kg</p>
              </div>
              <div className={s.divWeight}>
                <p>Temperaments: </p>
              </div>
              <div  className={s.div_temp}>
                <p>{ temperaments}</p>
              </div>
            </div>
      </div>
    </>
)
}

export default DogCard