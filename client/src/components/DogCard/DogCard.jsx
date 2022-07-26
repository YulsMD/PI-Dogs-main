import React from "react";
import { Link } from "react-router-dom";

const DogCard = ({name, weight, temperaments, image, id}) =>{
  return (
    <>
      <div>
        <Link to={`/dogs/${id}`}>
        <div>
          <div>
            <h4>{name}</h4>
          </div>
          <div>
            <p>Weight: </p>
            <p>{weight} kg</p>
          </div>
          <div>
            <p>Temperaments: </p>
            <p>{temperaments}</p>
          </div>
          <div>
            <img src={image} alt='Dog-Image' width="200" height="200"/>
          </div>
        </div>
        </Link>
      </div>
    </>
)
}

export default DogCard