import './App.css';
import React, { useContext } from "react";

const Transformador = React.createContext();

/////////////////////////////////////////////////////////////////////////////
class Menu extends React.Component {

  render () {
    // Obtener el contecto de transformacion desde la clase
    const funcion= this.context; // La puedo usar en cualquier función del ciclo de vida del componente
    return (
      <div>(SOY LA MENU:) { funcion("HOLA") } </div>
      )
  }
  
}
Menu.contextType = Transformador;
// Y es que solo puedo asociar UN UNICO contexto a un class component con esta sintaxis
/////////////////////////////////////////////////////////////////////////////
// Con esta otra puedo usar varios contextos... aunque Tiene otra limitación... solo funciona en el render
class Menu2 extends React.Component {

  render () {
    return (
      <Transformador.Consumer>
        { (transformador) => 
            <div>(SOY LA MENU2:) { transformador("HOLA") } </div>
        }
      </Transformador.Consumer>
      )
  }
  
}
/////////////////////////////////////////////////////////////////////////////
const Cabecera = () => {
  const funcion= useContext(Transformador)
  return (
    <div>(SOY LA CABECERA:) { funcion("HOLA") } </div>
  )
}
/////////////////////////////////////////////////////////////////////////////
function Pie(){
  const funcion= useContext(Transformador)
  return (
    <div>(SOY LA PIE:) { funcion("HOLA") } </div>
  )
}
/////////////////////////////////////////////////////////////////////////////
function App() {

 const funcion1 = (palabra) => palabra + "__"
  const funcion2 = (palabra) => "__" + palabra
  var funcionElegida = funcion2;
  return (
    <div>
    <Transformador.Provider value={funcionElegida}>
        <Cabecera/>
        <Menu/>
    </Transformador.Provider>
    <Transformador.Provider value={funcion1}>
        <Menu2/>
        <Transformador.Provider value={funcionElegida}>
          <Pie/>
        </Transformador.Provider>
    </Transformador.Provider>
    </div>
    );
}
/////////////////////////////////////////////////////////////////////////////



export default App;
