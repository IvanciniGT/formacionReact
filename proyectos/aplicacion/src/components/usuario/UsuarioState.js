class UsuarioState {

    static  Estado={
        NORMAL: 0,
        EN_MODIFICACION: 1,
        EN_BORRADO: 2,
    }

    constructor(props){
        this.data = props.data                              // Inicialmente los datos no los tengo... habeis llamado a la API?
                                                            // Tendre que llamar a la API. La llamo sincrona o asincronamente? ASINCRONAMENTE
                                                            // Cuando los tenga, que quiero hacer? REPINTAR
        this.modo = props.modo                              // Para REPINTAR si cambia el modo
        this.estado = UsuarioState.Estado.NORMAL                         // Para REPINTAR si cambia el estado en el que se encuentra en componente
        this.seleccionado = props.seleccionado              // Para REPINTAR si cambia el seleccionado
    }

    setData(data){
        this.data=data
        return this;
    }
    setModo(modo){
        this.modo=modo
        return this;
    }
    setEstadoNormal(){
        this.estado=UsuarioState.Estado.NORMAL
        return this;
    }
    setEstadoBorrado(){
        this.estado=UsuarioState.Estado.EN_BORRADO
        return this;
    }
    setEstadoModificacion(){
        this.estado=UsuarioState.Estado.EN_MODIFICACION
        this.modo = "NORMAL"    // Logica
        return this;
    }


    estaEnEstadoNormal(){
        return this.estado===UsuarioState.Estado.NORMAL
    }
    estaEnEstadoBorrado(){
        return this.estado===UsuarioState.Estado.EN_BORRADO
    }
    estaEnEstadoModificacion(){
        return this.estado===UsuarioState.Estado.EN_MODIFICACION
    }

    setSeleccionado(seleccionado=true){
        this.seleccionado=seleccionado
        return this;
    }
    alternarSeleccionado(){
        this.seleccionado= ! this.seleccionado
        return this
    }
    estaSeleccionado(){
        return this.seleccionado
    }
}

export default UsuarioState;