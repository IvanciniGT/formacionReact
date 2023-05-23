
# Componente Usuario

<listado-usuario datos="???"/> -> servicio que da usuarios a tocomocho !!!

# Componente Usuario

    <usuario                                            Valor por defecto
        id={ identificador } 
        data={ object_con_to_los_datos } 
        modo={ NORMAL | EXTENSIBLE | COMPACTO } 
        datosModificables={ [] }

        onSeleccionado={ callback }                     v De aqui para abajo es una MIERDA GIGANTE !!!!! 
        onDeseleccionado={ callback }                     Pero... ya lo cambiaremos la semana que viene
        onModificado={ callback }                                               Redux
        onModificacion={ callback }
        onModificacionCancelada={ callback }
        onBorrado={ callback }
        onBorradoConfirmado={ callback }
        onBorradoCancelado={ callback }
    />

|-------|-----------------------------------------------|
|       |   Nombre:                                  ^  |
|       |   Apellidos:                                  |
|       |   Email:                                      |
|       |   Telefono:                                   |
|-------|-----------------------------------------------|

|-------|-----------------------------------------------|
|   🐱  |   Ivan Osuna Ayuste:                        v |
|-------|-----------------------------------------------|

## App para solicitar vacaciones un empleado

- Para mostrar mis datos                                 Llamaré a un API http://servidor:puerto/api/v?/usuarios/1928462
- Para mostrar los datos de mi jefe que me aprueba       Llamaré a un API http://servidor:puerto/api/v?/usuarios/666

## App de gestion de expedientes de ????

- Para a mostrar los datos de los 87 que participan en el expediente
                                                        Llamaré a un API http://servidor:puerto/api/v?/expedientes/1928367/participantes

- Y Si quiero quitar a un polluelo de un expediente?

## De donde saco los datos?

- Llamaré a un API http


# Vacaciones Santillana

Solicitud para las candongas

QUIEN 

 OO  Nombre YO                               OO  Nombre El cabrón
 __  Apellidos: LOS MIOS                     ^^  Apellidos: de mi jefe (que me va a decir que no)

# Gestión de expedientes

Expediente: 1928362824
Parcicipantes [Marcar todos] [BORRAR] => Codigo ****

 OO  YO          99987999        [Modificar]   [BORRAR]   ->  Confirme: [SI] [NO]      189272371
 ··  El cabrón   66666666        [Modificar]   [BORRAR]                                 1209212190
 oo  Menchu      22222222        [Modificar]   [BORRAR]                                 2023902390


Codigo****
    // Necesita saber Los que están seleccionados
    // Los meto en un JSON -> API !

## FOLLON ! 

Comunicaciones!


class ListadoUsuarios{
    constructor(){
        this.state = {usuariosSeleccionados: []}
    }
    usuarioSeleccionado(usuarioId){
        this.state.usuariosSeleccionados.push(usuarioId)
        this.setState(this.state);
    }
    borrar(){
        // Llamar a la api con que datos? this.usuariosSeleccionados
    }
    seleccionarTodos(){
        // Push de todos en la lista
        
    }
    render(){
        <div>
            <button onClick="()=>this.seleccionarTodos()">SeleccionarTodos</button>
            <button onClick="()=>this.borrar()">Borrar</button>
            <ul>
                                // que los hijos (usuarios) avisen al listado (padre) de que han sido seleccionados
                <Usuario id="1" onSeleccionado={()=>this.usuarioSeleccionado(1)} seleccionado={this.usuariosSeleccionados.contains(1)}/>
                                                                                 // Avisar a los hijos que han sido seleccionados. (Comunicación de padre a hijos)
                <Usuario id="2"/>
                <Usuario id="3"/>
            </ul>
        </div>);
    }
}