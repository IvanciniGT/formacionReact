import './App.css';
import Usuario from '../usuario/Usuario';
import ListadoUsuarios from '../listado-usuarios/ListadoUsuarios';

function App() {
  return (
    <div>
      <ListadoUsuarios />


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
