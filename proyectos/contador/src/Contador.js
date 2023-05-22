import './Contador.css';
import React from "react";
import PropTypes from "prop-types";
/*
function App() {    // render (JSX)
  return (
    <div>
      Hola, soy el contador
    </div>
  );
}
*/
class Contador extends React.Component{

  // Aquí podemos definir: 
  // - Nuestras propias funciones... con nuestra lógica
  // - Sobreescribir (override) de las funciones que vienen definidas en React.Component

  constructor(props){
    super(props) // Dentro eso hace this.props=props
    console.log("Componente creado: ", props)
  }

  componentDidMount(){
    // Me llaman a esta función cuando el componente ha sido pinchado en el DOM
    console.log("Componente montado:")
    // Aqui va a estar la magia
  }

  render() {
    console.log("Componente renderizado:")
           // Escribo JSX
    return (
      <div>
        Hola, soy el contador { this.props.nombre }
      </div>
    );
  }
}

// Atributos de la marca HTML
Contador.propTypes = {
  nombre: PropTypes.string //.isRequired
}
export default Contador;
