class ListadoUsuariosState {

    constructor(props){
        this.props = props // Me las quedo para comprobaciones / Chequeos
        this.usuarios = [];
        this.elementoEnBorrado = undefined;
        this.elementoEnModificacion = undefined;
        this.seleccionados = [];
        this.enBorradoTodos = false;
    }

    establecerElementoEnBorrado=(cual=undefined) => {
        this.elementoEnBorrado = cual
        this.elementoEnModificacion = undefined;
        return this
    }
    establecerElementoEnModificacion(cual=undefined){
        this.elementoEnModificacion = cual
        this.elementoEnBorrado = undefined;
    }
    borradoSolicitadoTodos(){
        this.enBorradoTodos = true;
        this.elementoEnModificacion = undefined;
        this.elementoEnBorrado = undefined;
    }
    yaNoEnBorradoTodos(){
        this.enBorradoTodos = false;
    }
    seleccionarTodos(){
        this.seleccionados = this.usuarios.map( usuario => usuario.id )
    }
    deseleccionarTodos(){
        this.seleccionados = []
    }
    seleccionar(cual){
        if ( !this.seleccionados.includes(cual) ) 
            this.seleccionados.push(cual)
    }
    deseleccionar(cual){
        const posicion = this.seleccionados.indexOf(cual)
        if(posicion >=0 )
            this.seleccionados.splice(posicion, 1)
    }
    asignarUsuarios(usuarios){
        this.usuarios = usuarios;
    }

}

export default ListadoUsuariosState;