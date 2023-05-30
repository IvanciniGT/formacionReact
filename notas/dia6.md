
COMPONENTE                 |                                         ESTADO GLOBAL
 React                     |          STORE dispatch     >>>>  REDUCER    >>>>    datos
  ^v                       |                getState     <<<<<<<<<<<<<<<<<<<<<
 Properties                |
    - Entrada (que permitan inyectar datos al componente) > store.getState
    - Salida  (que permitan exportar datos al componente) > store.dispatch

---

# Que app estoy montando y que funcionalidad quiero que tenga esa app concreta
# que necesitará del uso de unos componentes y que guardará su estado (app) en redux
# y que necesitaré que esos componentes para esa funcionalidad lean o escriban datos en el estado global de la app

-------------------------------------------------------------------------------------
 Solcitud de vacaciones                                      😃 Iván Osuna       v MENU (logout, settings,...)
-------------------------------------------------------------------------------------
Nueva*         |   
Listado        |   Formulario de nueva solicitud
  Pendientes   |     Motivo 
  Historial    |     Fechas
Administración |                    Solicitar    Cancelar
  Conectados   |
               |
               |
-------------------------------------------------------------------------------------


-------------------------------------------------------------------------------------
 Solcitud de vacaciones                                      😃 Iván Osuna       v MENU (logout, settings,...)
-------------------------------------------------------------------------------------
Nueva          |   
Listado        |   Solicitudes pendientes
  Pendientes*  |     Motivo           Fecha       estado         Aprobador
  Historial    |     Vac. verano       xxxx       ppte           😃 El cabrón de mi jefe
Administración |     
  Conectados   |
               |
               |
-------------------------------------------------------------------------------------


-------------------------------------------------------------------------------------
 Solcitud de vacaciones                                      😃 Iván Osuna       v MENU (logout, settings,...)
-------------------------------------------------------------------------------------
Nueva          |   
Listado        |   Solicitud 1726372634
  Pendientes*  |     Motivo           Vac. verano   
  Historial    |     Fecha            xxxx     
Administración |     Estado           pte
  Conectados   |     Solicitante      😃 Iván Osuna v
               |     Aprobador:       😃 Yo
               |                             APROBAR      DENEGAR
-------------------------------------------------------------------------------------


-------------------------------------------------------------------------------------
 Solcitud de vacaciones                                      😃 Iván Osuna       v MENU (logout, settings,...)
-------------------------------------------------------------------------------------
Nueva          |   
Listado        |   Usuarios conectados      [Todos]  [Marcar todos]
  Pendientes   |     😃 Iván Osuna   ❌         Desconectar al usuario
  Historial    |     😃 Yo           ❌         
Administración |     😃 Felipe       ❌         
  Conectados*  |    
  Usuarios     |    
               |    
-------------------------------------------------------------------------------------



ESTADO GLOBAL
{
   session: {
    user: {
      id:
      firstName:
      lastName:
    }, 
    settings:{
    }
   },
   gestionSolicitud: {
      listaConOperacionesEnProceso: 0 | 1 | 2 
   }
}

---

Una solicitud tiene:
- Aprobadores -> Listado de usuarios
- Revisores   -> Listado de usuarios

ME gustaría que: 
- Pueda eliminar usuarios como aprobadores o como revisores
- Si estoy seleccionando usuarios en un listado, no quiero tener usuarios seleccionados en el otro
- Si estoy en medio de una operación de borrado en un listado, no quiero que en el otro tenga disponible la operación


-------------------------------------------------------------------------------------------

Aprobadores :                                   Revisores:
 [marcar todos] [borrar]                         [marcar todos] [borrar]
   Usuario1   ❌                                      UsuarioA   ❌
   Usuario2   ❌                                      UsuarioB   ❌
   Usuario3   ❌                                      UsuarioC   ❌
   Usuario4   ❌ 
-------------------------------------------------------------------------------------------
