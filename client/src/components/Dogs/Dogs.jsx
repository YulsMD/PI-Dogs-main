import {React, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, getAllTemperaments } from "../../redux/actions";
import DogCard from '../DogCard/DogCard'
import Paginated from "../Paginated/Paginated";
import Menu from '../Menu/Menu'

export default function Dogs(){
  let allDogs = useSelector(state => state.dogs);
  const [, setOrder] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [dogsPerPage,] = useState(8)
  const indexOfLastDog = currentPage * dogsPerPage 
  const indexOfFirstDog = indexOfLastDog - dogsPerPage 
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog)

  const paginated = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }

  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getAllDogs());
    dispatch(getAllTemperaments())
  }, [dispatch]);
  return (
    <div>
      <div>
        <Menu setOrder = {setOrder}/>
      </div>
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
      <div>
        <Paginated dogsPerPage={dogsPerPage} allDogs={allDogs.length} paginated={paginated}/>
      </div>
    </div>
    )
}