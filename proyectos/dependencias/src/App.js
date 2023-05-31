import './App.css';
import React, { useContext } from "react";

const Transformador = React.createContext();

class Menu extends React.Component {

  render () {
    return (
      <div>(SOY EL MENU:) HOLA </div>
    )
  }
}

const Cabecera = () => {
  const funcion= useContext(Transformador)
  return (
    <div>(SOY LA CABECERA:) { funcion("HOLA") } </div>
  )
}

const Pie = () => {
  return (
    <div>(SOY EL PIE:) HOLA </div>
  )
}

function App() {

 //const funcion1 = (palabra) => palabra + "__"
  const funcion2 = (palabra) => "__" + palabra
  var funcionElegida = funcion2;
  return (
    <Transformador.Provider value={funcionElegida}>
      <div>
        <Cabecera/>
        <Menu/>
        <Pie/>
      </div>
    </Transformador.Provider>
    );
}




export default App;
