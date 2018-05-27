import React, { Component } from 'react';
import classes from './App.css';
import Country from "./components/Country/Country";
import Newform from "./components/Newform/Newform"
import Codigo from "./components/Codigo/Codigo"
import Enviar from "./components/Enviar/Enviar"
import Alerta from "./components/Alerta/Alerta"
import Mensaje from "./components/MensajeDespedida/MensajeDespedida"
import { Grid } from 'material-ui';
import Logo from './components/asset/logo.png';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import { indigo } from "material-ui/colors";
import createPalette from "material-ui/styles/createPalette";

import partidosAPI from "./api"

const muiTheme = createMuiTheme({
  palette: createPalette({
    primary: indigo,
    secondary: {
      light: '#18479E',
      main: '#18479E',
      dark: '#18479E',
      contrastText: '#FFFFFE',
    }
  }),
  typography: {
    "fontFamily": "\"Helvetica\""
   }
});


class App extends Component {

  state = {
    partidos: null,
    /*partidos2: [
      {key:"1", equipo1:"Rusia", equipo2:"Brasil"},
      {key:"2", equipo1:"Costa Rica", equipo2:"Alemania"},
      {key:"3", equipo1:"Argentina", equipo2:"Suiza"},
    ],*/
    participante: { codigo: "", nombre: "", apellido: "", telefono: "", email: "", marcadorPartidos: null},
    codigo: "abc",
    id: null,
    mensaje: null,
    showFormulario: false,
    showPartidos: false,
    showCodigo: true,
    showAlerta: false,
    showMensaje: false,
    dispositivo: "",
    deviceWidth: ""
  }

  componentWillMount(){
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;


    if (x<480) {
      this.setState({dispositivo:"Movil"});
    }
  }

  componentDidMount() {
    partidosAPI.getPartidos().then(json => {
      this.setState({ partidos: json });
    })
  }

  enviarCodigoHandler = () => {
    let estado = this.state
    let participante = Object.assign({}, this.state.participante);
    const doesShow = this.state.showFormulario;

    partidosAPI.validateCodigo(estado).then(result => {
      if (result === null ) {
        //Código incorrecto
        this.setState({mensaje: "Verifique que digitó su código correctamente"})
        this.setState({showAlerta: !doesShow})
      } else if (!result.estado) {
        //Código Previamente Utilizado
        this.setState({mensaje: "Código previamente utilizado"})
        this.setState({showAlerta: !doesShow})
      } else {
        //Código válido
        participante.codigo = result.codigo
        this.setState({showFormulario: !doesShow})
        this.setState({showCodigo: doesShow})
        this.setState({participante})
        this.setState({codigo: result})
      }
    })
  }

  togglePartidosHandler = () => {
       let participante = this.state.participante
       const doesShow = this.state.showFormulario;
       if (participante.nombre === "" || participante.apellido === "" || participante.telefono === "" || participante.email === "") {
         this.setState({mensaje: "Favor responda a todos los datos del formulario"})
         this.setState({showAlerta: doesShow})
       } else {
         this.setState({showFormulario: !doesShow})
         this.setState({showPartidos: doesShow})
       }
   }

  toggleEnviarHandler = () => {
     let estado = this.state
     let partidosMarcador = Object.assign({}, this.state.partidos)
     partidosAPI.createParticipante(estado).then(result => {
       partidosAPI.cambiarEstadoCodigo(estado).then(codigo => {
       })
       const doesShow = this.state.showPartidos;
       this.setState({showPartidos: !doesShow})
       this.setState({showMensaje: doesShow})
     })
   }

  codigoChangeHandler = (event) => {
    let codigo = event.target.value
    this.setState({codigo: codigo})
  }

  formValueHandler = (event) => {
    let formValue = event.target.value
    let formId = event.target.id
    let participante = Object.assign({}, this.state.participante);
    participante[formId] = formValue
    this.setState({participante})
  }

  marcadorValueHandler = (event) => {
     let marcadorId = event.target.name
     let index = event.target.tabIndex
     let partidosMarcador = Object.assign({}, this.state.partidos)

     let participante = Object.assign({}, this.state.participante)
     partidosMarcador[index][marcadorId] = event.target.value

     this.setState({partidosMarcador})
     participante.marcadorPartidos = partidosMarcador

     this.setState({participante})
   }

  alertaHandler = () => {
    this.setState({showAlerta: false})
  }


  render() {
    let country = null;
    let newform = null;
    let codigo = null;
    let enviar = null;
    let mensaje = null;
    let alerta = null;

    if (this.state.showCodigo) {
      codigo =
      <Codigo
        codigo = {this.state.codigo}
        changed= { this.codigoChangeHandler }
        clicked= { this.enviarCodigoHandler }
      />
    }

    if (this.state.showFormulario) {
      newform =(
        <Newform
          nombre = ""
          apellido = ""
          telefono = ""
          email = ""
          clicked = { this.togglePartidosHandler }
          changed = {this.formValueHandler}
        />
      )
    }

    if (this.state.showPartidos) {
      country = <Country
        changed={this.marcadorValueHandler}
        partidos={this.state.partidos}
        />
      enviar = <Enviar
        clicked = {this.toggleEnviarHandler}
        />
    }

    if (this.state.showMensaje) {
      mensaje = (<Mensaje/>)
    }

    if (this.state.showAlerta) {
      alerta = <Alerta
        estado = {this.state.showAlerta}
        cerrar = {this.alertaHandler}
        mensaje = {this.state.mensaje}
      />
    }

    return (
      <MuiThemeProvider theme={muiTheme}>
        <div>
          <img src={require('./components/asset/portada'+this.state.dispositivo+'.jpg')} alt="Fondo" className={ classes.Background }/>
          <Grid container justify="center" spacing={0} className={ classes.App2 }>
            <Grid item xs={12} className={classes.TopBanner}>
              <img className={classes.TopBanner} src={require('./components/asset/topBanner'+this.state.dispositivo+'.png')} alt="Banner"/>
            </Grid>
            <Grid container justify="center" spacing={0} className={ "" }>
              {codigo}
              {newform}
              {country}
              {enviar}
              {mensaje}
              {alerta}
            </Grid>
            <Grid item xs={12}>
              <img className={classes.Logo} src={Logo} alt="Logo"/>
            </Grid>
          </Grid>

        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;
