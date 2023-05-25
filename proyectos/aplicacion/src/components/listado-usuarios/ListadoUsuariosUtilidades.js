
export function algunaOperacionEnMarcha(estado){
    return {
        "operacionEnMarcha": estado.enBorradoTodos || estado.elementoEnBorrado || estado.elementoEnModificacion,
        "sobreQuien": estado.elementoEnBorrado ? estado.elementoEnBorrado : estado.elementoEnModificacion
    }
}

export const mostrarSeleccionarTodos = (props, estado) => {
    return props.borrables && props.seleccionables && 
    !algunaOperacionEnMarcha(estado).operacionEnMarcha && 
    estado.usuarios.length !== estado.seleccionados.length
} 
export const mostrarDeseleccionarTodos = (props, estado) => {
    return props.borrables && props.seleccionables && 
    !algunaOperacionEnMarcha(estado).operacionEnMarcha && 
    estado.seleccionados.length > 0
} 

export const mostrarBorrar = mostrarDeseleccionarTodos

export const mostrarBotonBorrarUsuario = (props, estado, usuario) => {
    return props.borrables && (
    !algunaOperacionEnMarcha(estado).operacionEnMarcha ||
    estado.elementoEnBorrado === usuario )
} 

export const mostrarBotonModificarUsuario = (props, estado, usuario) => {
    return props.modificables && (
    !algunaOperacionEnMarcha(estado).operacionEnMarcha ||
    estado.elementoEnModificacion === usuario )
} 

export const usuariosPrueba = [
    {
        "id": 1,
        "nombre": "Ivan",
        "apellidos": "Osuna",
        "edad": 44
      },{
        "id": 2,
        "nombre": "Menchu",
        "apellidos": "García",
        "edad": 27
      },{
        "id": 3,
        "nombre": "Federico",
        "apellidos": "Ramirez",
        "edad": 33
      }
]