import React from "react";
import s from "../LandingPage/LandingPage.module.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className={s.body}>
      <div className={s.blur}>
        <div className={s.container}>
        <div className={s.title}>
          <h1 className={s.h1}>DOGS</h1>
          <h2 className={s.h1}>LAND</h2>
        </div>
        <div className={s.container_btn}>
          <Link to="/home">
            <button className={s.button}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>V I S I T
            </button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
