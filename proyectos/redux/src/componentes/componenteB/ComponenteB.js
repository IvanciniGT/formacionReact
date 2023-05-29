import './ComponenteB.css';

import React from "react";
import PropTypes from "prop-types";

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

export default ComponenteB;
