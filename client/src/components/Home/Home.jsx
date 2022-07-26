import {React, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Dogs from '../Dogs/Dogs';
import Menu from "../Menu/Menu";
import Paginated from "../Paginated/Paginated";
import { getAllDogs, getAllTemperaments } from "../../redux/actions";
import SearchBar  from "../SearchBar/SearchBar";

const Home = () =>{
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
        <SearchBar setCurrentPage ={setCurrentPage}/>
      </div>
      <div>
        <Menu setCurrentPage ={setCurrentPage} setOrder = {setOrder}/>
      </div>
      <div>
        <Dogs currentDogs = {currentDogs}/>
      </div>
      <div>
        <Paginated dogsPerPage={dogsPerPage} allDogs={allDogs.length} paginated={paginated}/>
      </div>
    </div>
  )
}
 export default Home; 