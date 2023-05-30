// Componente Web de React

import React from "react";
import PropTypes from "prop-types";
import Usuario from '../usuario/Usuario';
import './UsuarioLogueado.css';
import { loginAction, logoutAction } from "../../store/actions/session.actions";
import {connect} from 'react-redux';

class UsuarioLogueadoBase extends React.Component {

  constructor(props){
    super(props)
    this.state = {user: props.user}
  }

  doLogin(){
    // Debería redigirir a una pantalla de login... IdentityProvider REDIRECT 3XX. OAUTH2 => JWT
    // Pasamos de conectar con un IP
    // Suponemos que ha ido bien... y me llega un JWT
    const jwt = {
      id: 12345,
      name: {
        firstName: "Ivan",
        lastName: "Osuna"
      }, 
      contactInfo: {
        email: "ivan.osuna.ayuste@gmail.com",
        phone: "987654321"
      }
    }
    this.props.onUserDataReceived(
      {
        id: jwt.id,
        firstName: jwt.name.firstName, 
        lastName: jwt.name.lastName, 
      }
    );
  }

  doLogout(){
    this.props.onLogoutRequested()
  }

  render(){
    return !this.state.user ? (
      <div>
        <button onClick={() => this.doLogin()}>Login</button>
      </div>
    ) : (
      <div>
        <Usuario id={this.state.user.id} 
                 data={  {nombre: this.state.user.firstName, apellidos: this.state.user.lastName}  } />
        <button onClick={() => this.doLogout()}>Logout</button>
      </div>
    )
  }

  componentDidUpdate( previosProps ){
    if(previosProps.user !== this.props.user){
      this.setState( {user: this.props.user} )
    }
  }

}
UsuarioLogueadoBase.propTypes = {
  onUserDataReceived: PropTypes.func,
  onLogoutRequested: PropTypes.func,
  user: PropTypes.object
  /*
  {
    id:
    firstName:
    lastName:
  }
  */
}
//export default UsuarioLogueado

// Si este componente fuera reutilizable en otros proyecto... Aqui acabo... Y lo de abajo lo metería en otro fichero... componente especifico de esta app

const estado = (estado_global_redux) => {
  return {
      user: estado_global_redux.session.loggedUser
  } 
}  

const acciones = (dispatch) => ({
  onUserDataReceived: (usuario) => dispatch(loginAction(usuario)),
  onLogoutRequested:  () => dispatch(logoutAction()),
})

const UsuarioLogueado = connect(  estado, acciones  )(UsuarioLogueadoBase)

export default UsuarioLogueado