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
    establecerElementoEnModificacion=(cual=undefined)=>{
        this.elementoEnModificacion = cual
        this.elementoEnBorrado = undefined;
        return this
    }
    borradoSolicitadoTodos=()=>{
        this.enBorradoTodos = true;
        this.elementoEnModificacion = undefined;
        this.elementoEnBorrado = undefined;
        return this
    }
    yaNoEnBorradoTodos=()=>{
        this.enBorradoTodos = false;
        return this
    }
    seleccionarTodos=()=>{
        this.seleccionados = this.usuarios.map( usuario => usuario.id )
        return this
    }
    deseleccionarTodos=()=>{
        this.seleccionados = []
        return this
    }
    seleccionar=(cual)=>{
        if ( !this.seleccionados.includes(cual) ) 
            this.seleccionados.push(cual)
        return this
    }
    deseleccionar=(cual)=>{
        const posicion = this.seleccionados.indexOf(cual)
        if(posicion >=0 )
            this.seleccionados.splice(posicion, 1)
        return this
    }
    borrarUsuario=(cual)=>{
        var posicion = -1
        this.usuarios.forEach( (datosUsuario, indice) => {if (datosUsuario.id === cual) posicion=indice})
        if(posicion >=0 )
            this.usuarios.splice(posicion, 1)
        return this
    }
    asignarUsuarios=(usuarios)=>{
        this.usuarios = usuarios;
        return this
    }
    borrarUsuariosSelecionados=()=>{
        this.seleccionados.forEach( id => this.borrarUsuario(id) )
        this.seleccionados = []
        return this
    }
}

export default ListadoUsuariosState;