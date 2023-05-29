import {configureStore} from '@reduxjs/toolkit'
//import {createStore} from 'redux'
import {miReductor} from './reducers/miReductor'

//const miOtroStore = createStore(miReductor)
export const miStore = configureStore({
    reducer:{
        //user
        //errores
        //datos
        datos1: miReductor
    }
})