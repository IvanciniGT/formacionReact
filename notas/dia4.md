
Listado inicial- Listado Usuarios
Ivan
Menchu
Federico
                        PROPERTY            RENDERIZACION
            Usuario1 key=Ivan data=Ivan      -> state.data=Ivan
            Usuario2 key=Menchu data=Menchu    -> state.data=Menchu            CERRAO
            Usuario3 key=Federico data=Federico  -> state.data=Federico          DESPLEGAO

        vvvvvv

Ivan
Federico
                        PROPERTY            RENDERIZACION
            Usuario1 key=Ivan data=Ivan      -> state.data=Ivan
            Usuario3 key=Federico data=Federico  -> state.data=Federico          DESPLEGAO

---

REDUX

Cómo funciona redux:

    COMPONENTE1                                                             COMPONENTE2
                                            ESTADO GLOBAL
                                                datos {
       datos >>>>>       reducer                  idioma          <<< Suscribirnos a todos los datos
                                                }

dispatch(Actions)         lleva la lógica para precesar esos datos y cambiar el estado
            tipo