// Componente Web de React

import './Usuario.css';
import UsuarioState from './UsuarioState';
// import ServicioUsuario from '../servicios/ServicioUsuario' LA MAYOR MIERDA POSIBLE EN EL MUNDO !
// Y NO LO HARIA EN LA VIDA.. ROMPE CON TODAS LAS BUENAS PRACTICAS
// Solución: Inyección de dependencias
import React from "react";
import PropTypes from "prop-types";
import Usuario from '../usuario/Usuario';

const estado = (estado_global_redux) => {
  return {
      // Props que quiero vincular a Valores del Estado global
      id: estado_global_redux.loggedUser.id,
      data: {
          nombre: estado_global_redux.loggedUser.firstNname,
          apellidos: estado_global_redux.loggedUser.lastName
      }
  }                                       // El reductor que guarda el dato (elTexto) tiene asignado el "Compartimento" datos1
}       // No hay datos que queramos MONITORIZAR del estado, ni recibir

// mapDispatchToProps
// Funciones de despacho de acciones para cambiar el estado y que quiero vincular como propiedades
const acciones = (dispatch) => ({          // Queremos que al crear el componente se me inyecte desde REDUX 
  
})

const UsuarioLogueado = connect(  estado, acciones  )(Usuario)

export default UsuarioLogueado
