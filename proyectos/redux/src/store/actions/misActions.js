import {ACTIONS} from '../reducers/miReductor'

export function establecerTexto (elQueMeDen){
    return {
        type: ACTIONS.ESTABLECER_EL_TEXTO,
        nuevoTexto: elQueMeDen
    }
}