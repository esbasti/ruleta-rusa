import React from "react";
import classes from "./Userform.css";

const userform = (props) => {
  return(
    <div className= { classes.Userform }>
      <h2>Nombre</h2>
      <input type="text" onChange="" value={props.name} className={ classes.UserFormInput }/>
      <h2>Apellido</h2>
      <input type="text" onChange={props.changed} value={props.apellido} className={ classes.UserFormInput }/>
      <h2>Teléfono</h2>
      <input type="text" onChange={props.changed} value={props.telefono} className={ classes.UserFormInput }/>
      <h2>Email</h2>
      <input type="email" onChange={props.changed} value={props.email } className={ classes.UserFormInput }/>
      <button onClick={props.clicked} >Hola</button>
  </div>
)}

export default userform
