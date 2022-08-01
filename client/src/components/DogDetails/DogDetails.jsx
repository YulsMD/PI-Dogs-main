import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";
import s from "../DogDetails/DogDetails.module.css";
import DogHome from "../../images/DogHome.png";

export default function DogDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const dog = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);
  return (
    <div className={s.body}>
      <div className={s.blur}>
        <div className={s.container}>
          <nav className={s.nav}>
            <div className={s.logo_cont}>
              <Link to="/home">
                <img src={DogHome} className={s.logo} />
              </Link>
            </div>
          </nav>
          <div className={s.container_f_b}>
            <div className={s.container_front}>
              <div className={s.div_img}>
                <img src={dog.image} alt="dog-img" />
              </div>
              <div className={s.card_description}>
                <div className={s.title}>
                  <h2>{dog.name}</h2>
                </div>
                <div className={s.divWeight}>
                  <p>Height: {dog.height} cm</p>
                </div>
                <div className={s.divWeight}>
                  <p>Weight: {dog.weight} kg</p>
                </div>
                <div className={s.divWeight}>
                  <p>Life Span: {dog.life_span} years</p>
                </div>
                <div className={s.divWeight}>
                  <p>Temperaments:</p>
                </div>
                <div className={s.divWeight}>
                  <p>{dog.temperaments}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
