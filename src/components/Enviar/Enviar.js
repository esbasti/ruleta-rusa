import React from 'react';
import { Grid, Button,} from 'material-ui';


const enviar = (props) => {
  return  (
    <Grid container>
        <Grid item xs={12}>
          <Button onClick={props.clicked} variant="raised" color="secondary">Enviar</Button>
        </Grid>
    </Grid>
  )
}
export default enviar;
