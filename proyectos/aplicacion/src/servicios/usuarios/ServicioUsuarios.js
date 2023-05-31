

class ServicioUsuarios {
     usuarios = {
        "1": {
            "id": 1,
            "nombre": "Ivan",
            "apellidos": "Osuna",
            "edad": 44
          },
        "2":{
            "id": 2,
            "nombre": "Menchu",
            "apellidos": "García",
            "edad": 27
          },
        "3": {
            "id": 3,
            "nombre": "Federico",
            "apellidos": "Ramirez",
            "edad": 33
          }
        }

    getUsuarios(callback = undefined){
        return Object.keys(usuarios).map(id => usuarios[id] )
    }

    getUsuario(id, callback = undefined){
        // Llamar a un backend asincronamente y ...
        // devolver una promesa que un futuro quizas contenga los datos del usuario ... o no ...
        // llamo al callback
        //if(callback) callback(datos)
        const promesa = new Promise( (resolve, reject) => {
            setTimeout(()=>{
                const usuarioADevolver = usuarios[id]
                resolve(usuarioADevolver)
            }, 2000)
        } )
        if(callback){
            promesa.then( (usuario) => callback(usuario) )
        }else{
            return promesa
        }
    }

}
export default ServicioUsuarios;
