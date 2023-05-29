import {ACTIONS} from '../reducers/miReductor'

export function establecerTexto (elQueMeDen){
    return {
        type: ACTIONS.ESTABLECER_EL_TEXTO,
        nuevoTexto: elQueMeDen
    }
}
export function restablecerTexto (){
    return {
        type: ACTIONS.REESTABLECER_EL_TEXTO,
    }
}