// Componente Web de React

import './ListadoUsuarios.css';
import ListadoUsuariosState from './ListadoUsuariosState';
import Usuario from '../usuario/Usuario';
import React from "react";
import PropTypes from "prop-types";
import {estaSeleccionadoElUsuario,
        mostrarSeleccionarTodos, 
        mostrarDeseleccionarTodos,
        mostrarBorrar,
        mostrarBotonBorrarUsuario,
        mostrarBotonModificarUsuario
      } from "./ListadoUsuariosUtilidades"
import ContextoServicioUsuarios from '../app/app.usuarios.context';


class ListadoUsuarios extends React.Component {

  constructor(props){
    super(props)
    this.state = new ListadoUsuariosState(props);
  }

  componentDidMount(){
    this.context.getUsuarios().then( (usuarios) =>  this.setState(this.state.asignarUsuarios(usuarios)))
    // La inyección de dependencias me permite disfrutar de inversion de dependencias
    // inversion de dependencias.
    // Yo no quiero depender de implementaciones concretas de cosas... 
    // me vale con conocer cómo hablar con esas cosas
    
    /*
    console.log(this.props.funcionRecuperarUsuarios)
    this.props.funcionRecuperarUsuarios().then( 
      (usuarios)=> this.setState(this.state.asignarUsuarios(usuarios) 
    ))
    */
    //this.setState(this.state.asignarUsuarios(usuariosPrueba));  // TODO: Dependiendo del backend
  }
  confirmarBorradoTodos(){
    // Cierta lógica:
    // Tengo que llamar al backend
    this.setState(this.state.borrarUsuariosSelecionados()) // TODO: Dependiendo del backend
    this.setState(this.state.yaNoEnBorradoTodos())
    this.props.onOperacionAcabada(this.props.id)
  }
  confirmadoBorradoUsuario(id){
    // TODO: Habrá que quitarlo de la lista
    this.setState(this.state.borrarUsuario(id))
    this.setState(this.state.establecerElementoEnBorrado()) // TODO: Dependiendo del backend
    this.props.onOperacionAcabada(this.props.id)
  }
  confirmadaModificacionUsuario(id, nuevosDatos){
    // Actualizar en la lista
    this.setState(this.state.establecerElementoEnModificacion())
    this.props.onOperacionAcabada(this.props.id)
  } // ????

  seleccionar(usuario){
    this.setState(this.state.seleccionar(usuario))
    this.props.onOperacionEnMarcha(this.props.id)
  }
  deseleccionar(usuario){
    this.setState(this.state.deseleccionar(usuario))
    if(this.state.seleccionados.length === 0)
      this.props.onOperacionAcabada(this.props.id)
  }
  establecerElementoEnBorrado(usuario=undefined){
    this.setState(this.state.establecerElementoEnBorrado(usuario))
    this.props.onOperacionEnMarcha(this.props.id)
  }
  establecerElementoEnModificacion(usuario=undefined){
    this.setState(this.state.establecerElementoEnModificacion(usuario))
    this.props.onOperacionEnMarcha(this.props.id)
  }
  cancelarBorradoTodos(){
    this.setState(this.state.yaNoEnBorradoTodos()) 
    this.props.onOperacionAcabada(this.props.id)
  }
  seleccionarTodos(){
    this.setState(this.state.seleccionarTodos()) 
    this.props.onOperacionEnMarcha(this.props.id)
  }
  deseleccionarTodos(){
    this.setState(this.state.deseleccionarTodos()) 
    this.props.onOperacionAcabada(this.props.id)
  }
  borradoSolicitadoTodos(){
    this.setState(this.state.borradoSolicitadoTodos())
    this.props.onOperacionEnMarcha(this.props.id)
  }


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
              id={datosUsuario.id} 
              key={datosUsuario.id} 
              data={datosUsuario}
              seleccionado={estaSeleccionadoElUsuario(this.state, datosUsuario.id)}
              modoDeVisualizacion={this.props.modo}
              onSeleccionado={()=>this.seleccionar(datosUsuario.id)}  
              onDeseleccionado={()=>this.deseleccionar(datosUsuario.id)}
              onBorrado={mostrarBotonBorrarUsuario(this.props,this.state,datosUsuario.id) ? 
                        (()=>this.establecerElementoEnBorrado(datosUsuario.id)): undefined}
              onBorradoConfirmado={mostrarBotonBorrarUsuario(this.props,this.state,datosUsuario.id) ? 
                        (()=>this.confirmadoBorradoUsuario(datosUsuario.id)):undefined}
              onBorradoCancelado={mostrarBotonBorrarUsuario(this.props,this.state,datosUsuario.id) ? 
                        (()=>this.establecerElementoEnBorrado()):undefined}
              onModificacion={mostrarBotonModificarUsuario(this.props,this.state,datosUsuario.id) ? 
                        (()=>this.establecerElementoEnModificacion(datosUsuario.id)):undefined}
              onModificado={mostrarBotonModificarUsuario(this.props,this.state,datosUsuario.id) ?
                        ((id, nuevosDatos)=> this.confirmadaModificacionUsuario(id, nuevosDatos)) :undefined}
              onModificacionCancelada={mostrarBotonModificarUsuario(this.props,this.state,datosUsuario.id) ? 
                        (()=>this.establecerElementoEnModificacion()):undefined}
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
        { mostrarSeleccionarTodos(this.props,this.state) && <button onClick={ ()=>this.seleccionarTodos() }>Seleccionar todos</button> }
        { mostrarDeseleccionarTodos(this.props,this.state) && <button onClick={ ()=>this.deseleccionarTodos() }>Deseleccionar todos</button> }
        { mostrarBorrar(this.props,this.state) && <button onClick={ ()=>this.borradoSolicitadoTodos() }>Borrar</button> }
        { this.state.enBorradoTodos && <button onClick={ this.confirmarBorradoTodos.bind(this) }>Confirmar</button> }
        { this.state.enBorradoTodos && <button onClick={ ()=>this.cancelarBorradoTodos() }>Cancelar</button> }
      </div>
    )
  }
}
ListadoUsuarios.propTypes = {
//    ServicioUsuarios: PropTypes.object.isRequired,
    id: PropTypes.string,
    borrables: PropTypes.bool.isRequired,
    modificables: PropTypes.bool.isRequired,
    seleccionables: PropTypes.bool.isRequired,
    onOperacionEnMarcha: PropTypes.func, 
    onOperacionAcabada: PropTypes.func, 
    modo: PropTypes.string.isRequired
}
ListadoUsuarios.defaultProps={
  borrables: false,
  modificables: false,
  seleccionables: false,
  modo: "COMPACTO",
}
ListadoUsuarios.contextType=ContextoServicioUsuarios
export default ListadoUsuarios;