
# Componente Usuario

<listado-usuario datos="???"/> -> servicio que da usuarios a tocomocho !!!
        datos???
        paginacion x
        borrables=?
        modificables=[]
        seleccionables=?
        modo={ NORMAL | EXTENSIBLE | COMPACTO } 


    Los usuarios son borrables
        - A cada usuario se le indica que es borrable... siempre?   
          Si estoy borrando alguno de los usaurios el boton de borrar del resto: Desaparecer 
    y los usuarios son modificables
        - A cada usuario se le indica que es modificable... siempre?   
          Si estoy modificando alguno de los usaurios el boton de modificar del resto: Desaparecer 
          Si estoy borrando alguno de los usaurios el boton de modificar del resto: Desaparecer 
    Y cómo se si se esta modificando otro usuario o borrando? 
    - Como yo listado!!!!! me enteraría de que algun usuario (hijo imo) está siendo modificado?
      - BIEN FACIL !!!Gracias a que mi hiijo (usuario) cortesmente me avisa a la funcion que le paso en: onModificacion

    Que datos he de guardar a nivel de estado del componente listado-usuarios?
        - datos de los usuarios
        - si alguno está en modificacion
        - si alguno está en borrado


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


// 

Sistema de gestión de solicitudes de vacaciones

    FRONTEND                                                        BACKEND
                                                                    http://servidor:8080/api/v3/vacaciones/19284372/solicitante
       Pantalla                                                         {
          <Usuario id="19284372">                                           "id": 1209347827,
                                                                            "name": "Ivan",
                                                                            "lastName": "osuna",
                                                                            "age": 44
                                                                        }

    proyecto
        src
            componentes
                usuario.js
                    import ServicioUsuarios from ../servicios/ServicioUsuarios
            servicios
                ServicioUsuariosV2.js
                    llamada al api: http://servidor:8080/api/v2/vacaciones/19284372/solicitante
                ServicioUsuariosV3.js
                    llamada al api: http://servidor:8080/api/v2/vacaciones/19284372/solicitante                    




ESTADO 1:

    Ivan            MODIFICAR   BORRAR
    Menchu          MODIFICAR   BORRAR
    Felipe          MODIFICAR   BORRAR
    Patricia        MODIFICAR   BORRAR
    Antonio         MODIFICAR   BORRAR

ESTADO 2: Tras hacer click en Menchu: BORRAR

    Ivan            
    Menchu          CONFIRMAR CANCELAR
    Felipe          
    Patricia        
    Antonio         

ESTADO 2 alternativo: Tras hacer click en Menchu: MODIFICAR

    Ivan            
    Menchu          GUARDAR CANCELAR
    Felipe          
    Patricia        
    Antonio         


# Listados en React

ARRAY DE DATOS          DOM     key
A                   -> div1     A
B                   -> div2     B           EXTENDIDO
C                   -> div3     C           COMPRIMIDO
D                   -> div4     D


A                   -> div1
C                   -> div2         EXTENDIDO
D                   -> div3


A
B
D
C