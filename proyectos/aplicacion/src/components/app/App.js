import './App.css';
import Usuario from '../usuario/Usuario';
import ListadoUsuarios from '../listado-usuarios/ListadoUsuarios';
import GestionExpedientes from '../gestion-expedientes/GestionExpedientes';
import UsuarioLogueado from '../usuario-logueado/UsuarioLogueado';

function App() {
  // Quiero montar la pantall de la app... que por defecto... no entiendo por que...
  // A alguien se le ha ocurrido que al arrancar muestre:
  // Boton ded login
  // Boton de logout
  // Input para ver el usuario conectado
  // Un bloque para gestionar un expediente que se ha abierto por defecto
  //  dentro de ese bloque tengo 2 listados de usuarios que sincronizar
  return (


    <div>

      <GestionExpedientes/>
      <hr/>
      <UsuarioLogueado/>
      <UsuarioLogueado/>

      <ListadoUsuarios 
      borrables={true}
      modificables={true}
      seleccionables={true}
      modo={"EXTENSIBLE"}
      />

      <ListadoUsuarios 
      borrables={true}
      modificables={true}
      seleccionables={true}
      modo={"EXTENSIBLE"}
      />


      <hr/>




      <Usuario id={2} modoDeVisualizacion={"EXTENSIBLE"}/>
      <hr/>
      <Usuario id={3} modoDeVisualizacion={"COMPACTO"} />
      <hr/>
      <Usuario id={4} onSeleccionado={(id)=>console.log("Usuario seleccionado",id )}  onDeseleccionado={(id)=>console.log("Usuario deseleccionado",id )}
                onBorrado={(id)=>console.log("Estamn pensando en borrar al usuario", id)}
                onBorradoConfirmado={(id)=>console.log("Pues si, lo borraron", id)}
                onBorradoCancelado={(id)=>console.log("Parece que no", id)}
                onModificacion={(id)=>console.log("Estamn pensando en modificar al usuario", id)}
                onModificado={(id)=>console.log("Pues si, lo modificaron", id)}
                onModificacionCancelada={(id)=>console.log("Parece que no", id)}/>
      
    </div>
  );
}

export default App;
