import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import ComponenteA from './componentes/componenteA/ComponenteA';
//import ComponenteB from './componentes/componenteB/ComponenteB';
import ComponenteC from './componentes/componenteC/ComponenteC';
import {Provider} from 'react-redux';
import {miStore} from './store/miStore';
import Usuario from './componentes/usuario/Usuario'
const App = () => {
  const [quitar, setQuitar] = useState(false)
  return (
    <div>

    <Usuario id={4} 
      datosModificables={ ["nombre", "edad" ] }
      onSeleccionado={(id)=>console.log("Usuario seleccionado",id )}  onDeseleccionado={(id)=>console.log("Usuario deseleccionado",id )}
                onBorrado={(id)=>console.log("Estamn pensando en borrar al usuario", id)}
                onBorradoConfirmado={(id)=>console.log("Pues si, lo borraron", id)}
                onBorradoCancelado={(id)=>console.log("Parece que no", id)}
                onModificacion={(id)=>console.log("Estamn pensando en modificar al usuario", id)}
                onModificado={(id)=>console.log("Pues si, lo modificaron", id)}
                onModificacionCancelada={(id)=>console.log("Parece que no", id)}/>



      <button onClick={()=>setQuitar( (quitar) => !quitar )}>Quitar</button>
      { ! quitar &&
      <ComponenteC data={ ({nombre: "Ivan", apellidos: "Osuna", edad: 44}) }/>
      }
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={miStore}>
    <App></App>
    
  </Provider>
);

/*
<hr/>
    <ComponenteB />
    <ComponenteA />

    */