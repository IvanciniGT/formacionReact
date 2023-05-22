var numero = 7

console.log(numero + 4)                     // Statement
            //////////                         Expresion

function saluda(nombre){                    // Statement
    console.log("Hola " + nombre)
}

var miFuncion = saluda                      // Statement

miFuncion("manolo")                         // Statement

// Funciones flecha.... Expresiones lambda
// Función anónima que generamos desde una expresión
// Expresión: Trozo (porción) de código que devuelve un valor

function doble(numero){
    return numero * 2
}

miFuncion = doble
console.log(miFuncion(7))


miFuncion = doble
miFuncion = (numero) => {
    return numero * 4
}
miFuncion = numero => {
    return numero * 5
}
miFuncion = numero => numero * 6

miNumero = 17
console.log(miFuncion(7))

var lista = [1,2,3,4,5]
for ( var valor in lista ){
    console.log(valor)
}
               // Una referencia a una función... De donde saco la referencia es mi problema
lista.forEach( valor => console.log(valor) )
                // Estoy definiendo una nueva función que recibe nu dato y lo imprime por pantalla
lista.forEach( console.log )

lista.forEach( (valor, indice, lista) => console.log("En la posición " +indice+ " de la lista: "+lista +" tengo el valor "+valor) )

// Las funciones flecha tienen una gracia, que no tienen las referencias normales a funciones pre-creadas
// Las funciones flecha no pierden el contexto de ejecución -> Esto implica que no pierden la referencia a "this"
// funcionQueRecibeFuncion( this.talFuncion.bind(this) )
// funcionQueRecibeFuncion( () => this.talFuncion )

// MapReduce

function esImpar(numero){
    return numero % 2 === 1 
}

lista = [1,2,3,4,5]                       // Una función que reciba cada dato del listado y que devuelva true si quiero que se mantenga el dato
lista.map(  numero => numero*3  )       
     .filter(  esImpar  )               
     .forEach( console.log )
     
lista.map(  numero => numero*3  ).filter(  (numero) => numero % 2 === 1   ).forEach( console.log )
      // Quiero que me generes otra lista donde cada valor sea el resultado de aplicar la funcion suministrada a cada dato de la lista original