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
    // La variable de instancia this.state es muy especial. Por qué? 
    // Si la cambio, se renderiza el componente... eso es cierto? NO
    // Cuando llamamos a this.setState():
    // - Por un lado, se cambia el valor al que apunta this.state... o no, depende lo que pase yo ahi
    // - Por otro lado, dentro de setState, se Mira si le hemos pasado otra cosa.... y se la hemos pasado... entonces es cuando se llama a render()
    this.state= { "cuenta": 0 } 
    this.propietario = "Ivan"
  }

  componentDidMount(){
    // Me llaman a esta función cuando el componente ha sido pinchado en el DOM
    console.log("Componente montado:")
    // Aqui va a estar la magia
  }
  componentWillUnmount(){
    // Me llaman a esta función cuando el componente se desmonta
    console.log("Componente desmontado")
  }

  comenzarContar() {
    
    // setTimeout( funcion, delay ) Deja una tarea programada para ejecutarse asincronamente con un retraso
    // setInterval( funcion, sleep ) Deja una tarea programada pàra ejecutarse asincronamente cada x tiempo
    this.referenciaFuncionProgramada= setInterval( () => { this.state.cuenta++; this.setState(this.state)}  , 500 )
  
  }

  paraDeContar() {
    clearInterval(this.referenciaFuncionProgramada)
  }

  render() {
    console.log("Componente renderizado:")
           // Escribo JSX
    var resultado =  (
      <div>
        Hola, soy el contador { this.props.nombre } de { this.propietario } y voy por el número { this.state.cuenta }
        <button onClick={ this.comenzarContar.bind(this) } >Comenzar</button>
        <button onClick={ () => this.paraDeContar() } >Parar</button>
      </div>
    );
    return resultado;
  }
}

// Atributos de la marca HTML
Contador.propTypes = {
  nombre: PropTypes.string //.isRequired
}
export default Contador;
