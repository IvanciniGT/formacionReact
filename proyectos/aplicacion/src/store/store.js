import {configureStore} from '@reduxjs/toolkit'
import {sessionReducer} from './reducers/session.reducer'

export const store = configureStore({
    reducer:{
        session: sessionReducer
    }
})