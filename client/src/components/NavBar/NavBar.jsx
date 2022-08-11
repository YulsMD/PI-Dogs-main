import React from "react";
import { NavLink } from "react-router-dom";
import s from "../NavBar/NavBar.module.css";
import Logo from "../../images/Home_1.png";

export default function NavBar() {
  return (
    <React.Fragment>
      <nav className={s.container}>
        <div className={s.logo_cont}>
          <NavLink to="/">
            <img alt="bg-button" src={Logo} className={s.logo} />
          </NavLink>
        </div>
        <div className={s.cont_btn}>
          <NavLink to={"/create"} className={s.NavLink}>
            <button className={s.button}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Create Dog
            </button>
          </NavLink>
        </div>
      </nav>
    </React.Fragment>
  );
}
