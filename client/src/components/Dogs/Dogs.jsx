import { React, useState, useEffect} from "react";
import { useDispatch} from "react-redux";
import { getAllDogs, getAllTemperaments } from "../../redux/actions";
import DogCard from "../DogCard/DogCard";
import Loader from "../Loader/Loader";
import s from "../Dogs/Dogs.module.css";



export default function Dogs({currentDogs}){
  
  const [loader, setLoader] = useState(false)

  const dispatch = useDispatch()
  useEffect(() =>{
    setLoader(true)
    dispatch(getAllDogs());
    dispatch(getAllTemperaments())
    .then(()=>setLoader(false))
  }, [dispatch]);
  return ( 
    <div>
    {
    loader
    ? <div className={s.loader}><Loader/></div>
    :(
        <div className={s.container}>
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
    </div>
  )
} 
