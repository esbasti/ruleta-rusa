import React from "react";
import classes from "./Newform.css";
import { Button, TextField, Grid, Paper } from 'material-ui';

const newForm = (props) => {
  return(
    <Paper className={classes.Newform}>
      <Grid container justify="center" spacing={24}>
        <Grid item xs={12}>
          <TextField label="Nombre" onChange={props.changed} id="nombre"/>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Apellido" onChange={props.changed} id="apellido"/>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Teléfono" onChange={props.changed} id="telefono"/>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Email" onChange={props.changed} id="email"/>
        </Grid>
        <Grid item xs={12}>
          <Button label="Enviar" onClick={ props.clicked } variant="raised" color="secondary">Siguiente</Button>
        </Grid>
      </Grid>
    </Paper>
)}

export default newForm
