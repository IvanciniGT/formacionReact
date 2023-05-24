// Componente Web de React

import './Usuario.css';
import UsuarioState from './UsuarioState';
// import ServicioUsuario from '../servicios/ServicioUsuario' LA MAYOR MIERDA POSIBLE EN EL MUNDO !
// Y NO LO HARIA EN LA VIDA.. ROMPE CON TODAS LAS BUENAS PRACTICAS
// Solución: Inyección de dependencias
import React from "react";
import PropTypes from "prop-types";

class Usuario extends React.Component {

  constructor(props){
    super(props)
    this.state = new UsuarioState();
  }

  componentDidMount(){
    // Solicitamos la carga asincrona de los datos
    // ! this.state.data && ServicioUsuarios.cargarDatosUsuario(this.props.id)
    // Nos falta en esa linea recibir la informacion. Tengo 2 opciones para enfrentarme a esto:
    // - Callback
    //      ServicioUsuarios.cargarDatosUsuario(this.props.id, this.datosRecibidos.bind(this))
    // - Promise
    //    ServicioUsuarios.cargarDatosUsuario(this.props.id).then(this.datosRecibidos.bind(this))

    // Pues me faltan 2 cosas:
    // - Tengo la función datosRecibidos()? SI !
    // - Tengo un ServicioUsuarios? NO
    // De donde lo saco una vez montado? Quiero decir.. He creado por ahí la clase: ServicioUsuarios
    // Cómo hago el import? 
    // Solución: Inyección de dependencias

    /*
     Si la petición fuera sincrona:

    if(! this.state.data ){
      this.setState( this.state.setData( ServicioUsuarios.cargarDatosUsuario(this.props.id) ) )
    }

    */
    this.datosRecibidos({
      "nombre": "Ivan",
      "apellidos": "Osuna",
      "edad": 44
    })
  }
  datosRecibidos(datosRecibidos){
      this.setState( this.state.setData(datosRecibidos) )
  }
  componentWillUnmount(){
  }

  // GESTION DE LOS BOTONES !
  toogleSelecionado(){
    this.setState( this.state.alternarSeleccionado() ) 
    // Lanzar los eventos
    this.state.estaSeleccionado() ? notificarEvento(this.props.onSeleccionado) : notificarEvento(this.props.onDeseleccionado)
  }
  iniciarBorrado(){
    this.setState( this.state.setEstadoBorrado() )         // Cambio mi estado
    notificarEvento(this.props.onBorrado)         // Lanzo el evento
  }
  iniciarModificacion(){
    this.setState( this.state.setEstadoModificacion() )         // Cambio mi estado
    notificarEvento(this.props.onModificacion)    // Lanzo el evento
  }
  cancelarModificacion(){
    this.setState( this.state.setEstadoNormal() )         // Cambio mi estado
    notificarEvento(this.props.onModificacionCancelada)         // Lanzo el evento
  }
  confirmarModificacion(){
    this.setState( this.state.setEstadoNormal() )         // Cambio mi estado
    notificarEvento(this.props.onModificado)  // Lanzo el evento
  }
  cancelarBorrado(){
    this.setState( this.state.setEstadoNormal() )         // Cambio mi estado
    notificarEvento(this.props.onBorradoCancelado)         // Lanzo el evento
  }
  confirmarBorrado(){
    this.setState( this.state.setEstadoNormal() )         // Cambio mi estado
    notificarEvento(this.props.onBorrado)                    // Lanzo el evento
  }
  notificarEvento(funcionDeNotificacion){
    funcionDeNotificacion && funcionDeNotificacion(this.props.id)
  }
  alternarExtendido(){
    this.setState(this.state.alternarExtendido())
  }
  // RENDERIZACION !
  render() {
    return !this.state.data? this.renderizarCargando() :(
        <div 
            className={`usuario ${ this.state.estaSeleccionado() && "seleccionado"}`}
            onClick={ this.toogleSelecionado().bind(this) } >
            { this.renderizarAvatar() }
            { this.renderizarBotones() }
            { this.renderizarCambioModoVisualizacion() }
            { this.renderizarDatos() }
        </div>
    );
  }
  renderizarCargando(){
    return ( <div className="cargando">Cargando...</div> )
  }
  renderizarDatos(){
    return this.state.estaEnEstadoModificacion() ? renderizarFormularioDatos() : renderizarVisualizacionDatos()
  }
  renderizarFormularioDatos(){
    return (
      <div className="datos">
        <div><span>Nombre(*):</span> {this.state.data.nombre} </div>
        <div><span>Apellidos(*):</span> {this.state.data.apellidos} </div>
        <div><span>Edad(*):</span> {this.state.data.edad} </div>
      </div>
   )  
  }
  renderizarVisualizacionDatos(){
    return (
              <div className="datos">
                <div><span>Nombre:</span> {this.state.data.nombre} </div>
                <div><span>Apellidos:</span> {this.state.data.apellidos} </div>
                <div><span>Edad:</span> {this.state.data.edad} </div>
              </div>
           )
  }
  renderizarCambioModoVisualizacion(){
      var botonCambioModo = "";
      if( this.props.modoDeVisualizacion === "EXTENSIBLE" ){
         botonCambioModo = (   <div className={`cambio-modo ${this.state.estaExtendido()? "extendido": "colapsado"}`}>
                                <button onClick={() => this.alternarExtendido() }>{this.state.estaExtendido()? "^": "v"}</button>
                              </div> )
      }
      return botonCambioModo;
  }

  renderizarBotones(){
    var botones = "";
    if (this.state.estaEnEstadoNormal() && (this.props.onModificado || this.props.onBorradoConfirmado)){
        botones = ( <div className="botones">
                        { this.props.onModificado && <button onClick={()=>this.iniciarModificacion()} >Modificar</button>}
                        { this.props.onBorradoConfirmado && <button onClick={()=>this.iniciarBorrado()} >Borrar</button>}
                    </div> )
    } else if ( this.state.estaEnEstadoModificacion() ){
        botones = ( <div className="botones">
                        <button onClick={() => cancelarModificacion() }>Cancelar</button>
                        <button onClick={() => confirmarModificacion() }>Guardar</button>
                    </div> )
    } else if ( this.state.estaEnEstadoBorrado() ){
        botones = ( <div className="botones">
                        <button onClick={() => cancelarBorrado() }>Cancelar</button>
                        <button onClick={() => confirmarBorrado() }>Confirmar</button>
                    </div> )
    }
    return botones;
  }

  renderizarAvatar(){
    return ( <div className="avatar">
                <img src={`http://servidor/usuarios/{$this.props.id}/pic`}/>
             </div> )
  }
}

Usuario.propTypes = {
    id: PropTypes.number.isRequired,
    data: PropTypes.object,
    modoDeVisualizacion: PropTypes.string, // EXTENDIDO | EXTENSIBLE | COMPACTO
    datosModificables: PropTypes.array,
    seleccionado: PropTypes.bool,
    onSeleccionado: PropTypes.func,
    onDeseleccionado: PropTypes.func,
    onModificado: PropTypes.func,
    onModificacion: PropTypes.func,
    onModificacionCancelada: PropTypes.func,
    onBorrado: PropTypes.func,
    onBorradoConfirmado: PropTypes.func,
    onBorradoCancelado: PropTypes.func
}
Usuario.defaultProps={
  modoDeVisualizacion: "EXTENDIDO",
    seleccionado: false,
}

export default Usuario;