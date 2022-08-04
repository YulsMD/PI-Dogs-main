import React from "react";
import s from "../NotFound/NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className={s.body}>
      <div className={s.blur}>
        <div className={s.container}>
          <div>
            <div>Is dangerous stay here</div>
          </div>
          <div>
            <Link to="/">
              <button>BACK</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
