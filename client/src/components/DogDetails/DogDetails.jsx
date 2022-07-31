import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";

export default function DogDetails (){
    const dispatch = useDispatch()
    const {id} = useParams()
    const dog = useSelector((state) => state.details)

    useEffect(() =>{
        dispatch(getDetails(id))
    }, [dispatch,id])
    return(
        <div>
            <nav>
                <Link to='/home'><button>Home</button></Link>
            </nav>
                <div>
                    <img src={dog.image} alt='dog-img'/>
                    <h2>{dog.name}</h2>
                    <p>Height: {dog.height} cm</p>
                    <p>Weight: {dog.weight} kg</p>
                    <p>Life Span: {dog.life_span} years</p>
                    <p>Temperaments: {dog.temperaments}</p>
                </div>
        </div>
    )
}