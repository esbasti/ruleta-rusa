import React from 'react';
import classes from "./Country.css";
import { Grid, Paper } from 'material-ui';

const country = (props) => {
  return  (
    props.partidos.map((partido, index) => {
      return (
        <Grid className={classes.countryBox} elevation={20} key={index} >
          <Grid container justify="center" spacing={8} >
            <Grid item xs={6} className={ classes.CountryContainer }>
                <img src={require("../asset/flags/"+partido["equipo1"]+".png")} alt="Logo"/>
                <Grid item xs={12} className={classes.nombreEquipo}>
                <p>{partido["equipo1"]}</p>
                </Grid>
                <input type="text" className={ classes.marcador } onChange={props.changed} id={partido._id} tabIndex={index} name={"marcador1"}/>
            </Grid>
            <Grid item xs={6} className={ classes.CountryContainer }>
                <img src={require("../asset/flags/"+partido["equipo2"]+".png")} alt="Logo"/>
                <Grid item xs={12} className={classes.nombreEquipo}>
                <p>{partido["equipo2"]}</p>
                </Grid>
                <input type="text" className={ classes.marcador } onChange={props.changed} id={partido._id} tabIndex={index} name={"marcador2"}/>
            </Grid>
          </Grid>
        </Grid>
      )

    })

  )}
export default country;
