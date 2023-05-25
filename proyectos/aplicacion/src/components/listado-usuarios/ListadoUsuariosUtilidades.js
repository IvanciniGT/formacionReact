
export function algunaOperacionEnMarcha(estado){
    return {
        "operacionEnMarcha": estado.enBorradoTodos || estado.elementoEnBorrado || estado.elementoEnModificacion,
        "sobreQuien": estado.elementoEnBorrado ? estado.elementoEnBorrado : estado.elementoEnModificacion
    }
}

export const mostrarSeleccionarTodos = (props, estado) => {
    props.borrables && props.seleccionables && 
    !algunaOperacionEnMarcha(estado).operacionEnMarcha && 
    estado.usuarios.length() == estado.seleccionados.length()
} 
export const mostrarDeseleccionarTodos = (estado) => {
    props.borrables && props.seleccionables && 
    !algunaOperacionEnMarcha(estado).operacionEnMarcha && 
    estado.seleccionados.length() > 0
} 

export const mostrarBorrar = mostrarDeseleccionarTodos

export const mostrarBotonBorrarUsuario = (estado, usuario) => {
    props.borrables && (
    !algunaOperacionEnMarcha(estado).operacionEnMarcha ||
    estado.elementoEnBorrado === usuario )
} 

export const mostrarBotonModificarUsuario = (estado, usuario) => {
    props.modificables && (
    !algunaOperacionEnMarcha(estado).operacionEnMarcha ||
    estado.elementoEnModificacion === usuario )
} 
