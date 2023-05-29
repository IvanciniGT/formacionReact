
# Redux

Manejar un estado global de una aplicación.
Es estado que és en definitiva? Object de JS

    Estado: Datos, información
    Esos datos los representamos / almacenamos según una estructura de datos.

Qué guardo en ese estado? Los datos que quiera poder usar (lectura/escritura) desde más de 1 componente simultaneamente.

    ESTADO GLOBAL 
    | Propiedades       | Valores       |
    | ----------------- | ------------- |
    | PROP1             | valor1        |
    | PROP2             | valor2        |

A su vez, esos valores, pueden ser lo que me de la gana: Objects, listas, bool, number, ...

# Action

Este concepto:
1. No debería llamarse Acción... más bien TIPO DE ACCION
2. Y ni siquiera TIPO_DE_ACCION... sino más bien: DATOS_PARA_PODER_EJECUTAR_UN_TIPO_DE_ACCION

Un action es una función que genera un Object de JS... ese object siempre tendrá un TYPE... que habitualmente le llamamos 'type'
Porque todo el mundo lo llama así... lo puedo llamar como me de la gana.

Ese type, sería un tipo de acción que quiero realizar sobre el estado.
Adicionalmente un Action lleva el resto de datos que sean necesarios para realizar esa acción.

---

Ejemplo: App web para gestionar solicitudes de vacaciones

ESTADO de esa app:
- usuario: undefined | {nombre: apellidos: idioma: email: ....} que está usando la app.

ACCIONES que puedo ejecutar para modificar ese estado:
- sesionIniciada -> añadir el usuario al estado. Qué datos os hacen falta? Todo lo que quiera guardar del usaurio 
- sesionAcabada <- Borrar el usuario que se hubiera apuntado en el estado. Qué datos hacen falta? No hace falta nada 

http//miempresa.com/vacaciones
--------------------------------------------------------------------------------
BIENVENIDO                                                              Iván v     [Desconectar, Settings]
--------------------------------------------------------------------------------
 Pendientes  |  Formulario:
 Nueva       |      Solicitante: Iván
 Historial   |      Aprobador: 
             |      Fechas.....
--------------------------------------------------------------------------------

// Lo que en redux llamamos una ACCION
sesionIniciada ?? Que es en código ? Qué habrá aquí dentro? Al menos a nivel conceptual
    // Aqui dento NO HABRA NI PIZCA DE CODIGO QUE TENGA QUE VER CON LA ACTUALIZACION DEL ESTADO
    // DE HECHO NO HAY CODIGO AQUI DENTRO
    // Son datos, describriendo la ACCION que quiero ejecutar. No el Código, comportamiento de la acción.

// SESSION ACABADA
const sesionAcabada = () => {
    return {
        'type': 'SESION_ACABADA'
    }
}

function sesionAcabada(){
    return {
        'type': 'SESION_ACABADA'
    }
}

// SESSION INICIADA
const sesionIniciada = (datosUsuario) => {
    return {
        'type': 'SESION_INICIADA' // Qué significado como humanos, nosotros le asignamos a este valor? UN tipo de acción
        'usuario': datosUsuario  // Qué significado como humanos, nosotros le asignamos a este valor? Los datos necesarios
    }
}

function sesionIniciada(datosUsuario) {
    return {
        'type': 'SESION_INICIADA'
        'usuario': datosUsuario
    }
}

const ESTADO_GLOBAL_INICIAL = { // De donde quiero que se parta
    usuario: undefined
}

function establecerUsuario(datosUsuario = undefined) {
    return {
        'type': 'ESTABLECER_USUARIO'
        'usuario': datosUsuario
    }
}

Nos falta aqui el CODIGO que realmente cambia el estado en base a los datos definidos en esa cosa que Redux llama Action.

En Redux eso se define en UN REDUCER!!!!

Un reducer es una función que:
- RECIBE: estado Antes de procesar la acción + Acción a procesar/ejecutar
- DEVUELVE: estado después de procesar(que no ejecutarla) la acción

                    ESTE DATO (ESTADO GLOBAL) Es algo que gestiona internamente REDUX
function miReducer(estadoActual = ESTADO_GLOBAL_INICIAL, action){
    switch(action.type){
                                                                        case 'SESION_INICIADA':
                                                                            // Si cambio, devuelvo una COPIA modificada del original
                                                                            return { ...estadoActual, usuario: action.usuario}
                                                                        case 'SESION_ACABADA':
                                                                            // Si cambio, devuelvo una COPIA modificada del original
                                                                            return { ...estadoActual, usuario: undefined}
        case 'ESTABLECER_USUARIO':
            // Si cambio, devuelvo una COPIA modificada del original
            return { ...estadoActual, usuario: action.usuario}
        default:
            return estadoActual // Si no cambio nada, devuelvo el original
    }
}

La gracia es que podremos definir MUCHOS REDUCERS.... en nuestra app
Y cada reducer solo se ocupará de un conjunto limitado de TIPOS DE ACCIONES

Los reducers serán invocados en modo PIPE cuando haya que despachar una ACCION




function sesionAcabada(){
    return {
        'type': 'ESTABLECER_USUARIO'
        'usuario': undefined
    }
}

const sesionIniciada = (datosUsuario) => {
    return {
        'type': 'ESTABLECER_USUARIO'
        'usuario': datosUsuario 
    }
}


# Store en Redux

Un store es un almacenamiento en redux, donde tenemos un establo global gestionado.
Lo primero es crearnos un Store de Redux... es una colección de Reducers....
Podremos pedirle a ese store: 
- que ejecute una acción dispatch(action):
    Internamente en código REDUX, llama a todos los reducers y genera una nueva versión del estado_global_Actual del sistema... asociado a ese store... que puedo tener 15 stores...

- al store me voy a poder subscribir... De forma que si hay algún cambio, se me notifique con una función de callback

Eso es COMO FUNCIONA REDUX... a secas !

En nuestro caso, tendremos una ligera variación, por usar React, puesto que hay una librería llamada: react-redux
que me permite vincular propiedades de componentes a:
- Acciones que dene ejecutarse
- Datos del estado global que sean de nuestro interés.


---

ComponenteA
    INPUT texto
    BOTON (cuando se apriete el botón) => Solicitar el despacho de una acción a quién? store.
                                          Acción que tendré que crear... De un tipo... y con los datos necesarios.

                                            El store solicitar el despacho de la acción a todos lo reducer que haya configurado YO para ese store.

                                            Y el reducer correspondientes, modificará el estado global de la app.

                                Estado global en Redux : "textoAMostrar"
ComponenteB
    DIV Aquí tengo que ver el nuevo texto
        Vincularé una property del componente B: texto a un valor del estado global.