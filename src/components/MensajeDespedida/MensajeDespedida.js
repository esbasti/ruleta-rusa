import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import React from 'react';
import classes from "./MensajeDespedida.css";
import { Button, Typography } from 'material-ui';
import brandImage from "../asset/logo.png"


const mensaje = (props) => {
  return  (
    <div>
      <Card raised={true}>
        <CardMedia
          image= {brandImage}
          title= "Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="display3" component="h2">
            <p className={classes.p1}>GRACIAS</p>
            <p className={classes.p2}>POR PARTICIPAR</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href="http://www.applebeescr.com/menu">
            Ver Menú
          </Button>
        </CardActions>
      </Card>
    </div>
  )}
export default mensaje;
