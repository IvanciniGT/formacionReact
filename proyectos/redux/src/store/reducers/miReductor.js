const estado_global_inicial = {
    elTexto: "Sin establecer"
}

export const ACTIONS = {
    ESTABLECER_EL_TEXTO: 'ESTABLECER_EL_TEXTO'
}

export function miReductor(state = estado_global_inicial, accion){
    switch(accion.type){
        case ACTIONS.ESTABLECER_EL_TEXTO:
            return {...state, elTexto: accion.nuevoTexto}
        default:
            return state
    }
} 