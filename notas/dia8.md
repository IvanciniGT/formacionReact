
Componente1     --->
                            ServicioUsuariosEmpleados
Componente2     --->            llamada a API v2
                                    http://mybackend:8080/api/v1/empleados?id={id}
                                Capturar la respuesta
                                    {
                                        firstName: "Ivan",
                                        lastName: Osuna",
                                        age: 44
                                    }
                                    acomodar los datos que devuelve el API en backend a lo que necesito en frontend: MAPEADOR { ...datos }
                                Gestionar errores


ComponenteUsuario
    Nombre: this.state.usuario.nombre
    Apellidos: this.state.usuario.apellido
    Edad: this.state.usuario.edad


                            ServicioUsuariosClientes
                               llamada a API v2
                                    http://mybackend:8080/api/v1/clientes?id={id}
                                Capturar la respuesta
                                    {
                                        firstName: "Ivan",
                                        lastName: Osuna",
                                        age: 44
                                    }
                                    acomodar los datos que devuelve el API en backend a lo que necesito en frontend: MAPEADOR { ...datos }
                                Gestionar errores

El contexto de react me permite INYECTAR valores a los componentes (hacerle objetos o funciones o meros datos) 
disponibles sin necesidad de ir pasándolos en la jerarquía de componentes

Estrategias para la inyección de dependencias:
- Pasarlo como propiedad
- Establecer un valor en un contexto. Ventaja: No hay que ir arrastrando en la jerarquía el valor
- REDUX, tenerla en un estado global. Ventajas: 
  - No necesito ir arrastrando eso en la jerarquía
  - Puedo usar los que me de la gana en cualquier función del ciclo de vida
  - El componente no tengo que tocarlo. Le conecto al STORE y se le inyectan las props.

El contexto de React es para inyecciones muy sencillas (3 datos que quiero mandar a todo el mundo)
Con REDUX hago lo que quiero

Componente a
Contexto Clientes
    Componente b
        Su contexto Clientes
            Componente c -> Clientes Esto se creo hace 2 años y se usa en 50 proyectos... y no lo toco a mi antojo
        Su contexto
            Componente d -> Proveedores
    Componente e
        Su contexto
            Componente f -> Empleados
        Su contexto Clientes
            Componente g -> Clientes

Y todos representan usuario y necesitan sacar ServicioUsuariosClientes

Estado global:
    Servicio Clientes
    Servicio Empleados
    Servicio Proveedores

Componente a
    Componente b
            Componente c -> Clientes  --->  Servicio Clientes
            Componente d -> Proveedores --> Servicio Proveedores
    Componente e
            Componente f -> Empleados
            Componente g -> Clientes --->  Servicio Clientes






Portal corporativo
    Los más queridos
        Proveedores
            <UserService.Provider value={ProveedoresService}>
                <UserList>
            </UserService>
        Clientes
            <UserService.Provider value={ClientesService}>
                <UserList>
            </UserService>
        Usuario
            <UserService.Provider value={UsuariosService}>
                <UserList>
            </UserService>
        Empleados
            <UserService.Provider value={EmpleadosService}>
                <UserList>
            </UserService>

Componente <UserList>  
    Pide al ServicioDeUsuarios? A cual? Y yo que sé ... al que sea... al que toque... al que me digan
    Cómo me lo dicen: por el contexto: UserService
    Hago la query al Servicio de UsuariosContext
    Pinto los datos. ESA ES MI RESPONSABILIDAD . MI UNICA RESPONSABILIDAD
