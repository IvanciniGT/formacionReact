import './ComponenteB.css';

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ComponenteB extends React.Component{

  render(){
    return (
      <div>
        Texto establecido: {this.props.textoAMostrar}
      </div>
    );
  }

}
ComponenteB.propTypes = {
    textoAMostrar: PropTypes.string
    // Esta propiedad la asigno a un dato almacenado en el estado global
}

// El componente B Está definido... y GUAY
// Lo que vamos a hacer es conectar ese componente a REDUX

// mapStateToProps
// Datos que quiero que cuando cambien en REDUX, mi componente sea notificado
// y se le inyecten como nuevos valores de properties
const estado = (estado_global_redux) => {
    return {
        // Props que quiero vincular a Valores del Estado global
        textoAMostrar: estado_global_redux.datos1.elTexto
    }                                       // El reductor que guarda el dato (elTexto) tiene asignado el "Compartimento" datos1
} 

// mapDispatchToProps
// Funciones de despacho de acciones que quiero vincular como propiedades
const acciones = () => ({})

const ComponenteBConectado = connect(  estado, acciones  )(ComponenteB)

export default ComponenteBConectado