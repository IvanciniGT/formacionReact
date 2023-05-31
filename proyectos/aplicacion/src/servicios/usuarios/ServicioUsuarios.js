

class ServicioUsuarios {
     usuarios = {
        1: {
            "id": 1,
            "nombre": "Ivan",
            "apellidos": "Osuna",
            "edad": 44
          },
        2:{
            "id": 2,
            "nombre": "Menchu",
            "apellidos": "García",
            "edad": 27
          },
        3: {
            "id": 3,
            "nombre": "Federico",
            "apellidos": "Ramirez",
            "edad": 33
          }
        }
        
    getUsuarios(){

    }

    async getUsuario(id, callback = undefined){
        // Llamar a un backend asincronamente y ...
        // devolver una promesa que un futuro quizas contenga los datos del usuario ... o no ...
        // llamo al callback
        //if(callback) callback(datos)
    }

}
export default ServicioUsuarios;
