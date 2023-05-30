import {configureStore} from '@reduxjs/toolkit'
import {sessionReducer} from './reducers/session.reducer'
import {gestionSolicitudesReducer} from './reducers/gestion.solicitudes.reducer'

export const store = configureStore({
    reducer:{
        session: sessionReducer,
        gestionSolicitudes: gestionSolicitudesReducer

    }
})