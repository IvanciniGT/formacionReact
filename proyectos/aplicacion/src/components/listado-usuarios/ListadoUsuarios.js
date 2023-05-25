// Componente Web de React

import './ListadoUsuarios.css';
import ListadoUsuariosState from './ListadoUsuariosState';
import Usuario from './usuario/Usuario';
import React from "react";
import PropTypes from "prop-types";
import {algunaOperacionEnMarcha,
        mostrarSeleccionarTodos, 
        mostrarDeseleccionarTodos,
        mostrarBorrar,
        mostrarBotonBorrarUsuario,
        mostrarBotonModificarUsuario} from "./ListadoUsuariosUtilidades"
class ListadoUsuarios extends React.Component {

  constructor(props){
    super(props)
    this.state = new ListadoUsuariosState(props);
  }

  componentDidMount(){
  }
  confirmarBorradoTodos(){
    // Cierta lógica:
    // this.state.asignarUsuarios([])
    this.setState(this.state.yaNoEnBorradoTodos())
  }
  render(){
    <div>
      {this.renderBotones()}
      {this.renderUsuarios()}
    </div>
  }
  renderUsuarios(){
    return this.state.usuarios?.length() == 0 ? this.renderCargando() : (
      <ol>
        {
          this.state.usuarios.map( datosUsuario => 
            <Usuario 
              id={4} 
              data={}
              modoDeVisualizacion={}
              onSeleccionado={}  
              onDeseleccionado={}
              onBorrado={}
              onBorradoConfirmado={}
              onBorradoCancelado={}
              onModificacion={}
              onModificado={}
              onModificacionCancelada={}
            ></Usuario>
          )
        }
      </ol>
    )
  }
  renderCargando(){
    <div> Estamos trabajando en ello... </div>
  }
  renderBotones(){
    return (
      <div className="botones">
        { mostrarSeleccionarTodos(this.state) && <button onClick={ this.setState(this.state.seleccionarTodos()) }>Seleccionar todos</button> }
        { mostrarDeseleccionarTodos(this.state) && <button onClick={ this.setState(this.state.deseleccionarTodos()) }>Deseleccionar todos</button> }
        { mostrarBorrar(this.state) && <button onClick={ this.setState(this.state.borradoSolicitadoTodos()) }>Borrar</button> }
        { this.state.enBorradoTodos && <button onClick={ this.confirmarBorradoTodos.bind(this) }>Confirmar</button> }
        { this.state.enBorradoTodos && <button onClick={ this.setState(this.state.yaNoEnBorradoTodos()) }>Cancelar</button> }
      </div>
    )
  }
}
ListadoUsuarios.propTypes = {
    borrables: PropTypes.boolean.isRequired,
    modificables: PropTypes.boolean.isRequired,
    seleccionables: PropTypes.boolean.isRequired,
    modo: PropTypes.string.isRequired
}
ListadoUsuarios.defaultProps={
  borrables: false,
  modificables: false,
  seleccionables: false,
  datosModificables: "COMPACTO"
}

export default ListadoUsuarios;