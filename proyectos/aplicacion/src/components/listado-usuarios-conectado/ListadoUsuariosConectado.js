// Componente Web de React

import ListadoUsuarios from '../listado-usuarios/ListadoUsuarios';
import './UsuarioLogueado.css';
import {connect} from 'react-redux';

const estado = (estado_global_redux) => {
  return {
      borrables: ,
      modificables: ,
      seleccionables: ,
    } 
}  

const acciones = (dispatch) => ({
  onOperacionEnMarcha: , 
})

const ListadoUsuariosConectado = connect(  estado, acciones  )(ListadoUsuarios)

export default ListadoUsuariosConectado