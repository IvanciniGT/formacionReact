import {SESSION_REDUCER_ACTION_TYPES} from '../reducers/session.reducer'

export const loginAction = (user) => {
    return {
        type: SESSION_REDUCER_ACTION_TYPES.LOGIN,
        user: user
    }
}

export const logoutAction = () => {
    return {
        type: SESSION_REDUCER_ACTION_TYPES.LOGOUT,
    }
}