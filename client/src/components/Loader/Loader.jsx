import React from "react";
import s from '../Loader/Loader.module.css'

export default class Loader extends React.Component{
  render(){
    return(
    <React.Fragment>
      <div className={s.loader}>
        <div className={s.face}>
          <div className={s.circle}></div>
        </div>
        {
          console.log('Holaa!')
        }
        <div className={s.face}>
          <div className={s.circle}></div>
        </div>
      </div>
    </React.Fragment>
    )
  }
}