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
// Al store le podria pedir el estado global, que sería:
/*
{
    //user
    //errores
    //datos
    datos1: Estado Inicial del "miReductor"
}
En paralelo al store le puedo pedir que despache acciones
Y me puedo suscribir al store... para que me avise si cambia algo en el estado global.
*/
