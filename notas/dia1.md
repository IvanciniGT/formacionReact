
# React

Librería JS que nos sirve o nos ayuda a generar componentes WEB

## Librería vs Framework

Librería nos empaqueta un conjunto de clases, funciones... código, que podemos invocar y reutilizar dentro de nuestros proyectos.

Framework puede contener 1 o más librerías... pero para usar esas librerías debemos seguir un determinado flujo / formato de trabajo particular que impone el framework.

## Componente WEB

Un componente es una "marca HTML" personalizada, con su propia representación gráfica y lógica asociada.

### Por qué me interesa trabajar con componentes WEB?

Reutilizar código (reutilizar esos componentes)

Es necesario en JS y los navegadores usar estas librerías / frameworks para crear nuestros propios componentes WEB? NO

Originalmente cuando estas herramientas salen al mercado buscan cubrir ese hueco.

HTML, CSS, XML <- W3C

---

# JS

Hoy en día deberíamos decir: ECMAScript

## Características

### Lenguajes compilados / lenguajes interpretados

#### Lenguajes compilados        C, C++, C#, Fortran, ADA, Cobol, Visual Basic

    Al hacer la compilación (traducción al idioma del SO/Arquitec. micro) tenemos la oportunidad de hacer una revisión del código.

#### Lenguajes interpretados     JS, Python, Bash, Ps1

### Tipado estático / tipado dinámico

- Tipado estático: El lenguaje obliga a que las variables tengan asignado un tipo de datos
- Tipado dinámico: El lenguaje no asigna tipos de datos a las variables... Las variables pueden apuntar a datos de cualquier tipo.

var numero = 7;
numero = "hola";    // Esto funciona en JS? SI               Esto funciona en JAVA? NI DE COÑA !


#### Variables? 

Es una referencia a un dato que tengo en memoria


### Paradigmas que soportan

Formas de usar un lenguaje para expresar una idea, un concepto.

- Imperativa
    Ordenes que se ejecutan de forma secuencial... podemos controlar un poco el flujo (la secuencia): if, else, for, while, ...

- Procedural
    Cuando el lenguaje me da la posibilidad de definir e invocar funciones/procedimientos/métodos reutilizables

- Funcional 
    Cuando el lenguaje me permite que una variable apunte a una función.... tratamos las funciones como un dato más!
    Y posteriormente ejecutar esa función desde la variable.
    POR SUPUESTO !!!!!
    Puedo pasar funciones como argumentos a otras funciones:
        - Patrón listener/eventos
        - Callback
    Puedo tener funciones que devuelvan otras funciones.

- Orientación a objetos
    Cuando el lenguaje me ofrece la posibilidad de crear mis propios tipos de datos, con sus valores, funciones.
        4       Number      4               abs()
        "hola"  String      "hola"          upper()
        [1,2,3] List        1 2 3           length()
                Usuario
                ComponenteWebParaUsuarios
---

# Node

Es el antiguo interprete de JS que se montaba dentro del proyecto Chromium -> Chrome, Edge, Safari, Opera...... FirefoX !!!!!
                                                                    ^^^
                                                                   Google

## Para trabajar con React necesitamos Node? NO 

Nos es cómodo al desarrollar... Usamos Node para montar un servidor web de desarrollo que sirva los js que vamos generando.
Las tareas de revisión.. se ejecutan en node.


----


Con react vamos a a crear componentes web.... que querremos comunicar entre si!

    Componente A                        |    Componente A           Componente B
        |   v         ^                 |
        |   props   función             |                  REDUX 
        |   v         ^                 |
        |- Componente B                 |
