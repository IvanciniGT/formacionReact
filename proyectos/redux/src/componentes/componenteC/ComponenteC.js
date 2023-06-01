import './ComponenteC.css';
import {useState, useEffect} from "react"

const ComponenteC = (props) => {          
  // VARIABLE ,  SETTER              //HOOK  VALOR INICIAL
  const [seleccionado, setSeleccionado] = useState(false)
  const [numero, setNumero] = useState(0)
  const toogleSeleccionado = ()=> setSeleccionado(!seleccionado)
        // FUNCION 
        //   Sería un equivalente a DidMount y DidUpdate
        // .... y quizás más ... yo lo voy a elegir
  useEffect( () => { //DidMount
    const intervalo = setInterval( () => {
      setNumero( (numero) => numero + 1 )
    }, 1000)
           // Esta función que defino aqui es el willUnmount
    return () => { // WillUnmount
      clearInterval(intervalo)
      alert("Me quitan")
    }
  } , 
   /*
   SEGUNDO PARAMETRO: Le indicamos que datos deben monitorizarse
   para que si cambian se ejecute de nuevo
   Por defecto, se ejecuta siemrpe que hay un render... 
   pero puedo pedirle que solo se ejecute cuando cambie lo que le ponga aqui
   */ [props] // DidUpdate
   )
   useEffect( () => { // DidMount
      alert("Componente cargado")
   }, [])
  return (
    <div onClick={()=> toogleSeleccionado()} className={ seleccionado ?"seleccionado": "deseleccionado"}>
      <div><span>Nombre: </span>{props.data.nombre}</div>
      <div><span>Apellidos: </span>{props.data.apellidos}</div>
      <div><span>Edad: </span>{props.data.edad}</div>
      <hr/>
      <div>Voy contando por el: {numero} </div>
      <hr/>
    </div>
  )
}

export default ComponenteC

/*

state = {
  data: { nombre...},
  seleccionado: true
}
*/