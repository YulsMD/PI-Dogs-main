import React from "react";
import s from "../NotFound/NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className={s.body}>
      <div className={s.container}>
        <div>
          <div>
            You shouldn't have come here, we're on the wrong track.
          </div>
          <div>
            Go back to Dog's Land as soon as possible
          </div>
        </div>
        <Link to="/">
          <button>Get back on track</button>
        </Link>
      </div>
    </div>
  );
}
