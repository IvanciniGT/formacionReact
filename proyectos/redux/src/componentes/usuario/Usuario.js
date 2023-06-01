import './Usuario.css';
import {useState, useEffect, useRef, useContext} from "react"
import UsuarioState from './UsuarioState';

const RenderizarAvatar=(props)=>{
  return ( <div className="avatar">
              <img alt="foto-pringao" src={`http://servidor/usuarios/${props.id}/pic`}/>
           </div> )
}

const Usuario = (props) => {
  const [estado, setEstado] = useState(new UsuarioState(props))
  const campos = {}
  //for (var campo in props.datosModificables)
  campos["nombre"] = useRef() 
  campos["apellidos"] = useRef() 
  campos["edad"] = useRef() 

  var recienLlegadoAModificado = false;

  const datosRecibidos=(datosRecibidos)=> {
    setEstado( estado.setData(datosRecibidos) )
  }

  const toogleSelecionado=()=>{
    setEstado( estado.alternarSeleccionado() ) 
    // Lanzar los eventos
    estado.estaSeleccionado() ? notificarEvento(props.onSeleccionado) : notificarEvento(props.onDeseleccionado)
  }
  const iniciarBorrado=()=>{
    setEstado( estado.setEstadoBorrado() )         // Cambio mi estado
    notificarEvento(props.onBorrado)         // Lanzo el evento
  }
  const iniciarModificacion=()=>{
    recienLlegadoAModificado = true;
    setEstado( estado.setEstadoModificacion() )         // Cambio mi estado
    notificarEvento(props.onModificacion)    // Lanzo el evento
  }
  const cancelarModificacion=()=>{
    setEstado( estado.setEstadoNormal() )         // Cambio mi estado
    notificarEvento(props.onModificacionCancelada)         // Lanzo el evento
  }
  const confirmarModificacion=()=>{
    var nuevosDatos = {...estado.data }
    props.datosModificables.forEach( campo => nuevosDatos[campo]=campos[campo].current.value )
    setEstado( estado.setData(nuevosDatos).setEstadoNormal() )         // Cambio mi estado
    notificarEvento(props.onModificado)  // Lanzo el evento
     // TODO: Dependiendo del backend
  }
  const cancelarBorrado=()=>{
    setEstado( estado.setEstadoNormal() )         // Cambio mi estado
    notificarEvento(props.onBorradoCancelado)         // Lanzo el evento
  }
  const confirmarBorrado=()=>{
    setEstado( estado.setEstadoNormal() )         // Cambio mi estado
    notificarEvento(props.onBorradoConfirmado)                    // Lanzo el evento
  }
  const notificarEvento=(funcionDeNotificacion)=>{
    funcionDeNotificacion && funcionDeNotificacion(props.id, estado.data)
  }
  const alternarExtendido=()=>{
    setEstado(estado.alternarExtendido())
  }


  useEffect( ()=>{
    if(! estado.data ){  // TODO: Dependiendo del backend
      datosRecibidos({
        "nombre": "Ivan",
        "apellidos": "Osuna",
        "edad": 44
      })
    }
  }, [])
  useEffect( ()=>{
    setEstado(estado.setSeleccionado(props.seleccionado))    
  }, [props])
  

  const renderizarCargando=()=>{
    return ( <div className="cargando">Cargando...</div> )
  }
  const RenderizarDatos=()=>{
    return estado.estaEnEstadoModificacion() ? renderizarFormularioDatos() : renderizarVisualizacionDatos()
  }
  const renderizarFormularioDatos=()=>{
    return (
      <div className="datos">
        
        { ! props.datosModificables || props.datosModificables.includes("nombre") ?
        <div>
            <span>Nombre(*):</span>
            <input type="text" ref={campos.nombre} name="nombre" defaultValue={estado.data.nombre}/> 
        </div> :
        <div><span>Nombre(*):</span> {estado.data.nombre} </div> }

        { ! props.datosModificables || props.datosModificables.includes("apellidos") ?
        <div>
            <span>Apellidos(*):</span> 
            <input type="text" name="apellidos" ref={campos.apellidos} defaultValue={estado.data.apellidos}/> 
        </div> :
        <div><span>Apellidos(*):</span> {estado.data.apellidos} </div> }

        { ! props.datosModificables || props.datosModificables.includes("edad") ?
        <div>
            <span>Edad(*):</span>
            <input type="text" name="edad"  ref={campos.edad} defaultValue={estado.data.edad}/>
        </div> :
        <div><span>Edad(*):</span> {estado.data.edad} </div> }

      </div>
   )  
  }
  const renderizarVisualizacionDatos=()=>{
    return (
              <div className="datos">
                <div><span>Nombre:</span> {estado.data.nombre} </div>
                <div><span>Apellidos:</span> {estado.data.apellidos} </div>
                { estado.estaExtendido() && 
                  <div><span>Edad:</span> {estado.data.edad} </div>
                }
                </div>
           )
  }
  const RenderizarCambioModoVisualizacion=()=>{
      var botonCambioModo = "";
      if( props.modoDeVisualizacion === "EXTENSIBLE" ){
         botonCambioModo = (   <div className={`cambio-modo ${estado.estaExtendido()? "extendido": "colapsado"}`}>
                                <button onClick={() => alternarExtendido() }>{estado.estaExtendido()? "^": "v"}</button>
                              </div> )
      }
      return botonCambioModo;
  }

  const RenderizarBotones=()=>{
    var botones = "";
    if (estado.estaEnEstadoNormal() && (props.onModificado || props.onBorradoConfirmado)){
        botones = ( <div className="botones">
                        { props.onModificado && <button onClick={()=>iniciarModificacion()} >Modificar</button>}
                        { props.onBorradoConfirmado && <button onClick={()=>iniciarBorrado()} >Borrar</button>}
                    </div> )
    } else if ( estado.estaEnEstadoModificacion() ){
        botones = ( <div className="botones">
                        <button onClick={() => cancelarModificacion() }>Cancelar</button>
                        <button onClick={() => confirmarModificacion() }>Guardar</button>
                    </div> )
    } else if ( estado.estaEnEstadoBorrado() ){
        botones = ( <div className="botones">
                        <button onClick={() => cancelarBorrado() }>Cancelar</button>
                        <button onClick={() => confirmarBorrado() }>Confirmar</button>
                    </div> )
    }
    return botones;
  }

  return !estado.data? renderizarCargando() :(
    <div 
        className={`usuario ${ estado.estaSeleccionado() ? "seleccionado" : ""} ${ estado.estaCompacto() ? "compacto" : "extendido" }`}
        onClick={ toogleSelecionado.bind(this) } >
        <RenderizarAvatar id={props.id}/>
        <RenderizarBotones/>
        <RenderizarCambioModoVisualizacion/>
        <RenderizarDatos/>
    </div>
);  
}

export default Usuario