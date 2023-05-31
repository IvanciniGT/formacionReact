// Componente Web de React

import ListadoUsuarios from '../listado-usuarios/ListadoUsuarios';
import './GestionExpedientes.css';
import {connect} from 'react-redux';
import {setCurrentWorkingListAction, unsetCurrentWorkingListAction} from '../../store/actions/gestion.solicitudes.actions'
import React from "react";
import PropTypes from "prop-types";


class GestionExpedientesBase extends React.Component {

  constructor(props){
    super(props)
    this.state = { listadoEnUso: this.props.listadoEnUso}
  }

  operacionIniciadaEnUnaLista(listaId){
    this.props.operacionIniciadaEnUnaLista(listaId)
  }
  operacionFinalizadaEnUnaLista(listaId){
    this.props.operacionFinalizadaEnUnaLista(listaId)
  }

  render(){
    return (
      <div>
        <div className="izquierda">
        <ListadoUsuarios borrables={! this.state.listadoEnUso || this.state.listadoEnUso === 'aprobadores' } modificables={false} seleccionables={true} id={"aprobadores"}
          onOperacionEnMarcha={ this.operacionIniciadaEnUnaLista.bind(this)}
          onOperacionAcabada={ this.operacionFinalizadaEnUnaLista.bind(this)}
        ></ListadoUsuarios>
        </div>
         <div className="izquierda">
        <ListadoUsuarios borrables={! this.state.listadoEnUso || this.state.listadoEnUso === 'revisores' } modificables={false} seleccionables={true} id={"revisores"}
          onOperacionEnMarcha={ this.operacionIniciadaEnUnaLista.bind(this) }
          onOperacionAcabada={ (listaId) => this.operacionFinalizadaEnUnaLista(listaId) }
        ></ListadoUsuarios>
        </div>
      </div>
    )
  }
  componentDidUpdate(prevProps){
      if (prevProps.listadoEnUso !== this.props.listadoEnUso ){
        this.setState( { listadoEnUso: this.props.listadoEnUso } )
      }
  }
}

GestionExpedientesBase.propTypes = {
  operacionIniciadaEnUnaLista: PropTypes.func,
  operacionFinalizadaEnUnaLista: PropTypes.func,
  listadoEnUso: PropTypes.string
}


const estado = (estado_global_redux) => {
  return {
    listadoEnUso: estado_global_redux.gestionSolicitudes.currentWorkingList,
  } 
}  

const acciones = (dispatch) => ({
  operacionIniciadaEnUnaLista: (listId) => dispatch(setCurrentWorkingListAction(listId)), 
  operacionFinalizadaEnUnaLista: () => dispatch(unsetCurrentWorkingListAction()), 
})

const GestionExpedientes = connect(  estado, acciones  )(GestionExpedientesBase)

export default GestionExpedientes

