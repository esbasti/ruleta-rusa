import React from 'react';
import classes from "./Codigo.css";
import { Grid, Button, TextField, Paper } from 'material-ui';


const codigo = (props) => {

  return  (
  <Paper className={classes.codigo}>
    <Grid container justify="center" spacing={8}>
      <Grid item xs={6}>
        <TextField label="Código" onChange={props.changed}/>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={props.clicked} variant="raised" color="secondary">Ingresar</Button>
      </Grid>
    </Grid>
  </Paper>
  )
}
export default codigo;
