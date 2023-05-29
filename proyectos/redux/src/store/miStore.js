import {configureStore} from '@reduxjs/toolkit'
import {miReductor} from './reducers/miReductor'


export const miStore = configureStore({
    reducer:{
        //user
        //errores
        //datos
        datos1: miReductor
    }
})