import './ComponenteA.css';

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { establecerTexto } from "../../store/actions/misActions";

class ComponenteA extends React.Component{

  constructor(props){
    super(props)
    this.campo= React.createRef();
    //this.state = {valorPorDefecto:this.props.valorPorDefecto}
  }


  apretadoBoton(){
    this.props.funcionDeEstablecimientoEnEstado(this.campo.current.value);
  }

  render(){
    //<input type="text" ref={this.campo} value={this.state.valorPorDefecto} onChange={()=> this.setState({valorPorDefecto:this.campo.current.value})}/>
       
    return (
      <div>
        Texto: 
        
        <input type="text" ref={this.campo} defaultValue={this.props.valorPorDefecto}/>
        <button onClick={()=>this.apretadoBoton()}>Establecer</button>
      </div>
    );
  }
  componentDidUpdate(valoresPreviosPropiedades){ // Se ejecuta cuando ha sido renderizado
    if(valoresPreviosPropiedades.valorPorDefecto !== this.props.valorPorDefecto){
      //this.setState({valorPorDefecto:this.props.valorPorDefecto})
      //this.campo.current.value = this.props.valorPorDefecto
      this.forceUpdate();
    }
  }

}
ComponenteA.propTypes = {
  valorPorDefecto: PropTypes.string,
  funcionDeEstablecimientoEnEstado: PropTypes.func
  // Esta propiedad la quiero vincular con una función que al final del recorrido 
  // cambie el estado global en react
}

// El componente A Está definido... y GUAY
// Lo que vamos a hacer es conectar ese componente a REDUX

// mapStateToProps
// Datos que quiero que cuando cambien en REDUX, mi componente sea notificado
// y se le inyecten como nuevos valores de properties
const estado = (estado_global_redux) => {
  return {
      // Props que quiero vincular a Valores del Estado global
      valorPorDefecto: estado_global_redux.datos1.elTexto
  }                                       // El reductor que guarda el dato (elTexto) tiene asignado el "Compartimento" datos1
}       // No hay datos que queramos MONITORIZAR del estado, ni recibir

// mapDispatchToProps
// Funciones de despacho de acciones para cambiar el estado y que quiero vincular como propiedades
const acciones = (dispatch) => ({          // Queremos que al crear el componente se me inyecte desde REDUX 
  funcionDeEstablecimientoEnEstado: (texto) => dispatch(establecerTexto(texto))
                                                // Que se solicite al store de Redux, 
                                                // que ejecute una acción, a través de los reducers.
})

const ComponenteAConectado = connect(  estado, acciones  )(ComponenteA)

export default ComponenteAConectado