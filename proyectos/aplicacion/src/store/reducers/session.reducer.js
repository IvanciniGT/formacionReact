
const sessionReducerInitialState = { loggedUser: undefined, settings: {} }

export const SESSION_REDUCER_ACTION_TYPES = {
    LOGIN: "Login",
    LOGOUT: "Logout"
}

export const sessionReducer = (state = sessionReducerInitialState, action) => {
    switch(action.type){
        case SESSION_REDUCER_ACTION_TYPES.LOGIN:
            return { ...state, loggedUser: action.user }
        case SESSION_REDUCER_ACTION_TYPES.LOGOUT:
            return { ...state, loggedUser: sessionReducerInitialState.loggedUser }
        default:
            return state
    }
}
