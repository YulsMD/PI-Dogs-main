import React, { useState } from "react";
import Dogs from '../Dogs/Dogs';
import s from '../Home/Home.module.css'
import Paginated from "../Paginated/Paginated";
import Menu from "../Menu/Menu";
import { useSelector } from "react-redux";
import NavBar from '../NavBar/NavBar'

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
  return (
    <div className={s.background}>
      <div className={s.container}>
        <div className={s.navbar}>
          <NavBar/>
        </div>
          <div className={s.container2}>
            <div className={s.menu}>
              <Menu setOrder = {setOrder} setCurrentPage={setCurrentPage}/>
            </div>
            <div className={s.dogs}>
              <Dogs currentDogs ={currentDogs}/>
            </div>
          </div>
        <div className={s.paginated}>
          <Paginated dogsPerPage={dogsPerPage} allDogs={allDogs.length} paginated={paginated}/>
        </div>
      </div>
    </div>
  )
}
 export default Home; 