/*Para comentar varias líneas en Visual Studio Code, basta con seleccionar 
las líneas que se desean comentar y presionar las teclas Ctrl + K + C en Windows 
o Linux. Por otro lado, para descomentarlas, se debe presionar Ctrl + K + U 
en Windows o Linux*/


/*VARIABLES: Espacio en memoria para guardar informacion*/
//var nombre = 'Osvaldito' // Esto es una mala practica no se deben declarar variables con var
let nombre = 'Lionel'; // Si no le agrego el valor a la variable se va a definir como undefined
let apellido = 'Messi';

// Ctrl + alt + L  para hacer el Turbo Controle log
console.log("🚀 ~ file: index.js:5 ~ apellido:", apellido);

let edad = 37;
//Asi puedo reasignar el valor a la variable edad
edad = 38;
console.log("🚀 ~ file: index.js:9 ~ edad:", edad);

/*Constantes*/
const pi = 3.14;
console.log("🚀 ~ file: index.js:16 ~ pi:", pi);

/*TIPOS DE DATOS*/
//Datos Primitivos: String, Number, Bigint, Boolean, Undefined, Symbol
let string = 'Soy un string';
console.log("🚀 ~ file: index.js:21 ~ string:", string)
// Para saber el tipo de dato de una variable usamos typeof
console.log(typeof string);

let number = 2;
console.log("🚀 ~ file: index.js:26 ~ number:", number);
console.log(typeof number);

let bigIntNumber = 20n;
console.log("🚀 ~ file: index.js:30 ~ bigIntNumber:", bigIntNumber)
console.log(typeof bigIntNumber);

let boolean = true;
console.log("🚀 ~ file: index.js:34 ~ boolean:", boolean);
console.log(typeof boolean);

let undefined;
console.log("🚀 ~ file: index.js:38 ~ undefined:", undefined)
console.log(typeof undefined);

let nulo = null;
console.log("🚀 ~ file: index.js:42 ~ nulo:", nulo);
//Los nulos los toma como tipo de dato objeto y esto es un bug en ECMAScript, deberia de ser null)
console.log(typeof nulo);

//Datos Complejos: Todos los tipos de datos que son completos las vamos a manejar con conts
//Arrays
const array = [1, 'a', 'b', 3, 'd', 5, [1, 2, 3, 4, 5]];
console.log("🚀 ~ file: index.js:54 ~ array:", array)
console.log(typeof array); // Los arrays tambien son de tipo objeto pero no es un objeto literal

//Objetos u objeto literal: Se parecen mas a un diccionario
const objeto = {
    nombre: 'Lionel',
    apellido: 'Messi',
    nacionalidad: 'Argentina',
    edad: '35'
};
//Aqui le agrego la propiedad profesion al objeto
objeto.profesion = 'Futbolista';

console.log("🚀 ~ file: index.js:65 ~ objeto:", objeto)
console.log(typeof objeto);

// Date: Tambien es un tipo de objeto de la clase fecha.
//Trae la fecha en la que se esta ejecutando:
const date = Date() // Aqui lo devuelte en formato de String
console.log("🚀 ~ file: index.js:73 ~ date:", date);
console.log(typeof date);

const newDate = new Date(); // Aqui lo devuelve en formato de objeto
console.log("🚀 ~ file: index.js:78 ~ newDate:", newDate);
console.log(typeof newDate);


/*CLASES*/
//Esto es una forma de crear una clase
class Auto {
    constructor(modelo, marca) {
        this.modelo = modelo;
        this.marca = marca;
    }
}

/*FUNCIONES*/
//Cuando sea una funcion constructora la primera letra va en mayuscula:
function Motor() {
    console.log('Esto es una funcion constructora');
}

//Cuando es una funcion normal va toda en minusculas:
function acelerar() {
    console.log('Acelerar hasta el fondo')
};

//LLamando la funcion acelerar
acelerar();


//Puedo guardar una funcion dentro de una variable
const acelerarRapido = function acelerar() {
    console.log('A 200 Km por hora')
};
console.log(acelerarRapido);

//Funciones Anonimas:
const saludar = function () {
    console.log('hola')
};

console.log(saludar);

// Arrow Funtions
const arrow = () => {
    console.log(arrow)
};










