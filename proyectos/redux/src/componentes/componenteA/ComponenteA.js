import './ComponenteA.css';

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { establecerTexto } from "../../store/actions/misActions";

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

// El componente A Está definido... y GUAY
// Lo que vamos a hacer es conectar ese componente a REDUX

// mapStateToProps
// Datos que quiero que cuando cambien en REDUX, mi componente sea notificado
// y se le inyecten como nuevos valores de properties
const estado = (funcionDeEstablecimientoEnEstado) => ({})
      // No hay datos que queramos MONITORIZAR del estado, ni recibir

// mapDispatchToProps
// Funciones de despacho de acciones para cambiar el estado y que quiero vincular como propiedades
const acciones = (dispatch) => ({          // Queremos que al crear el componente se me inyecte desde REDUX 
  funcionDeEstablecimientoEnEstado: (texto) => dispatch(establecerTexto(texto))
                                                // Que se solicite al store de Redux, 
                                                // que ejecute una acción, a través de los reducers.
})

const ComponenteAConectado = connect(  estado, acciones  )(ComponenteA)

export default ComponenteAConectado