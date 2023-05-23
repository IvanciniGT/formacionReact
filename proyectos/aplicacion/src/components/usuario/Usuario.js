// Componente Web de React

import './Usuario.css';
import UsuarioState from './UsuarioState';
import React from "react";
import PropTypes from "prop-types";

class Usuario extends React.Component {

  constructor(props){
    super(props)
    this.state = new UsuarioState();
  }

  componentDidMount(){

  }
  componentWillUnmount(){
  }
  toogleSelecionado(){
    this.setState( this.state.alternarSeleccionado() ) 
    // Lanzar los eventos
    if(this.state.estaSeleccionado()){
        this.props.onSeleccionado && this.props.onSeleccionado()
    }else{
        this.props.onDeseleccionado && this.props.onDeseleccionado()
    }
  }
  iniciarBorrado(){
    this.setState( this.state.setEstadoBorrado() )         // Cambio mi estado
    this.props.onBorrado && this.props.onBorrado()         // Lanzo el evento
  }
  cancelarModificacion(){
    this.setState( this.state.setEstadoNormal() )         // Cambio mi estado
    this.props.onModificacionCancelada && this.props.onModificacionCancelada()         // Lanzo el evento
  }
  confirmarModificacion(){
    this.setState( this.state.setEstadoNormal() )         // Cambio mi estado
    this.props.onModificado && this.props.onModificado()  // Lanzo el evento
  }


  render() {            // Interpolacion de textos
    // Calculo de los botones que hay que mostrar
    if (this.state.estaEnEstadoNormal()){
        botones = ( <div className="botones">
                        { this.props.onModificado && <button onClick={()=>this.iniciarModificacion()} >Modificar</button>}
                        { this.props.onBorradoConfirmado && <button onClick={()=>this.iniciarBorrado()} >Borrar</button>}
                    </div> )
    } else if ( this.state.estaEnEstadoModificacion() ){
        botones = ( <div className="botones">
                        <button onClick={() => cancelarModificacion() }>Cancelar</button>
                        <button onClick={() => confirmarModificacion() }>Guardar</button>
                    </div> )
    } else { // Estoy en borrado
        botones = ( <div className="botones">
                        <button>Cancelar</button>
                        <button>Confirmar</button>
                    </div> )
    }
    // Junto todo y devuelvo
    return (
        <div 
            className={`usuario ${ this.state.estaSeleccionado() && "seleccionado"}`}
            onClick={ this.toogleSelecionado().bind(this) }
        >
            <div className="avatar">
                <img src={`http://servidor/usuarios/{$this.props.id}/pic`}/>
            </div>
            { botones }
        </div>
    );
  }
  renderDatosNoModificables(){

  }
  renderDatosModificables()
}

Usuario.propTypes = {
    id: PropTypes.number.isRequired,
    data: PropTypes.object,
    modo: PropTypes.string, //NORMAL | EXTENSIBLE | COMPACTO
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
    modo: "NORMAL",
    seleccionado: false,
}