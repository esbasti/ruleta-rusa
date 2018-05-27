import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from 'material-ui';


const alerta = (props) => {
  return  (
    <Dialog
      open={props.estado}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title">{"Código Inválido"}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {props.mensaje}
       </DialogContentText>
     </DialogContent>
    <DialogActions>
      <Button onClick={props.cerrar} color="primary" autoFocus>
        Aceptar
       </Button>
     </DialogActions>
   </Dialog>
  )}

export default alerta;
