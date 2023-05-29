import './ComponenteA.css';

import React from "react";
import PropTypes from "prop-types";

class ComponenteA extends React.Component{

  constructor(props){
    super(props)
    this.campo= React.createRef();
  }


  apretadoBoton(){
    this.props.funcionDeEstablecimientoEnEstado(this.campo.current.value);
  }

  render(){
    return (
      <div>
        Texto: 
        <input type="text" ref={this.campo}/>
        <button onClick={()=>this.apretadoBoton()}>Establecer</button>
      </div>
    );
  }

}
ComponenteA.propTypes = {
  funcionDeEstablecimientoEnEstado: PropTypes.func
  // Esta propiedad la quiero vincular con una función que al final del recorrido 
  // cambie el estado global en react
}
export default ComponenteA;
