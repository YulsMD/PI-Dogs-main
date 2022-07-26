import React from "react";
import DogCard from '../DogCard/DogCard'

export default function Dogs({currentDogs}){
  return (
    <div>
      {
        currentDogs?.map(dog => {
          return <DogCard
            key = {dog.id}
            id = {dog.id}
            name = {dog.name}
            temperaments = {dog.temperaments}
            weight = {dog.weight}
            image = {dog.image}
          />
        })
      }
    </div>
    )
}