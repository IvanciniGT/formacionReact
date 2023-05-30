import {GESTION_SOLICITUDES_REDUCER_ACTION_TYPES} from '../reducers/gestion.solicitudes.reducer'

export const setCurrentWorkingListAction = (listId) => {
    return {
        type: GESTION_SOLICITUDES_REDUCER_ACTION_TYPES.SET_CURRENT_WORKING_LIST,
        listId: listId
    }
}

export const unsetCurrentWorkingListAction = () => {
    return {
        type: GESTION_SOLICITUDES_REDUCER_ACTION_TYPES.UNSET_CURRENT_WORKING_LIST,
    }
}