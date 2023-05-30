
const gestionSolicitudesReducerInitialState = { currentWorkingList: undefined }

export const GESTION_SOLICITUDES_REDUCER_ACTION_TYPES = {
    SET_CURRENT_WORKING_LIST: "SetCurrentWorkingList",
    UNSET_CURRENT_WORKING_LIST: "UnsetCurrentWorkingList"
}

export const gestionSolicitudesReducer = (state = gestionSolicitudesReducerInitialState, action) => {
    switch(action.type){
        case GESTION_SOLICITUDES_REDUCER_ACTION_TYPES.SET_CURRENT_WORKING_LIST:
            return { ...state, currentWorkingList: action.listId }
        case GESTION_SOLICITUDES_REDUCER_ACTION_TYPES.UNSET_CURRENT_WORKING_LIST:
            return { ...state, currentWorkingList: gestionSolicitudesReducerInitialState.currentWorkingList }
        default:
            return state
    }
}
