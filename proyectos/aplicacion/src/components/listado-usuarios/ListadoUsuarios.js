// Componente Web de React

import './ListadoUsuarios.css';
import ListadoUsuariosState from './ListadoUsuariosState';
import Usuario from '../usuario/Usuario';
import React from "react";
import PropTypes from "prop-types";
import {mostrarSeleccionarTodos, 
        mostrarDeseleccionarTodos,
        mostrarBorrar,
        mostrarBotonBorrarUsuario,
        mostrarBotonModificarUsuario,
        usuariosPrueba} from "./ListadoUsuariosUtilidades"
class ListadoUsuarios extends React.Component {

  constructor(props){
    super(props)
    this.state = new ListadoUsuariosState(props);
  }

  componentDidMount(){

    this.setState(this.state.asignarUsuarios(usuariosPrueba));
  }
  confirmarBorradoTodos(){
    // Cierta lógica:
    // this.state.asignarUsuarios([])
    this.setState(this.state.yaNoEnBorradoTodos())
  }
  confirmadoBorradoUsuario(id){
    // TODO: Habrá que quitarlo de la lista
    this.setState(this.state.establecerElementoEnBorrado())
  }
  confirmadaModificacionUsuario(id, nuevosDatos){
    // Actualizar en la lista
    this.setState(this.state.establecerElementoEnModificacion())
  } // ????
  render(){
    return (
      <div>
        {this.renderBotones()}
        {this.renderUsuarios()}
      </div>
    )
  }
  renderUsuarios(){
    return this.state.usuarios?.length === 0 ? this.renderCargando() : (
      <ol>
        {
          this.state.usuarios.map( datosUsuario => 
            <Usuario 
              key={datosUsuario.id} 
              id={datosUsuario.id} 
              data={datosUsuario}
              modoDeVisualizacion={this.props.modo}
              onSeleccionado={()=>this.setState(this.state.seleccionar(datosUsuario.id))}  
              onDeseleccionado={()=>this.setState(this.state.deseleccionar(datosUsuario.id))}
              onBorrado={mostrarBotonBorrarUsuario(this.props,this.state,datosUsuario.id) ? 
                        (()=>this.setState(this.state.establecerElementoEnBorrado(datosUsuario.id))): undefined}
              onBorradoConfirmado={mostrarBotonBorrarUsuario(this.props,this.state,datosUsuario.id) ? 
                        (()=>this.confirmadoBorradoUsuario(datosUsuario.id)):undefined}
              onBorradoCancelado={mostrarBotonBorrarUsuario(this.props,this.state,datosUsuario.id) ? 
                        (()=>this.setState(this.state.establecerElementoEnBorrado())):undefined}
              onModificacion={mostrarBotonModificarUsuario(this.props,this.state,datosUsuario.id) ? 
                        (()=>this.setState(this.state.establecerElementoEnModificacion(datosUsuario.id))):undefined}
              onModificado={mostrarBotonModificarUsuario(this.props,this.state,datosUsuario.id) ?
                        ((id, nuevosDatos)=> this.confirmadaModificacionUsuario(id, nuevosDatos)) :undefined}
              onModificacionCancelada={mostrarBotonModificarUsuario(this.props,this.state,datosUsuario.id) ? 
                        (()=>this.setState(this.state.establecerElementoEnModificacion())):undefined}
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
        { mostrarSeleccionarTodos(this.props,this.state) && <button onClick={ this.setState(this.state.seleccionarTodos()) }>Seleccionar todos</button> }
        { mostrarDeseleccionarTodos(this.props,this.state) && <button onClick={ this.setState(this.state.deseleccionarTodos()) }>Deseleccionar todos</button> }
        { mostrarBorrar(this.state) && <button onClick={ this.setState(this.state.borradoSolicitadoTodos()) }>Borrar</button> }
        { this.state.enBorradoTodos && <button onClick={ this.confirmarBorradoTodos.bind(this) }>Confirmar</button> }
        { this.state.enBorradoTodos && <button onClick={ this.setState(this.state.yaNoEnBorradoTodos()) }>Cancelar</button> }
      </div>
    )
  }
}
ListadoUsuarios.propTypes = {
    borrables: PropTypes.bool.isRequired,
    modificables: PropTypes.bool.isRequired,
    seleccionables: PropTypes.bool.isRequired,
    modo: PropTypes.string.isRequired
}
ListadoUsuarios.defaultProps={
  borrables: false,
  modificables: false,
  seleccionables: false,
  modo: "COMPACTO"
}

export default ListadoUsuarios;