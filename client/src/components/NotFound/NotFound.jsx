import React from "react";
import s from "../NotFound/NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className={s.body}>
      <div className={s.blur}>
        <div className={s.container}>
          <div className={s.text}>
            <div>We're working...</div>
          </div>
          <div>
            <Link to="/">
              <button className={s.button}>BACK</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
