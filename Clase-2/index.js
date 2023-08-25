//ARROW FUNCTIONS
//Forma1: Si voy a escribir todo en una sola linea de codigo no necesito poner { }
const decirHolaUno=()=>console.log('hola');
decirHolaUno(); 
//Con un solo paremetro seria asi:
const decirHolaDos=nombre=>console.log(`hola ${nombre}?`);

//Forma2: En el momento que uso mas de dos lineas con dos parametros:
const hacerHola = (nombre, apellido)=>{
    console.log(`hola ${nombre} ${apellido}`)
};
hacerHola('Lionel', 'Messi');

//Forma3
const decirBienvenido = (nombre, apellido)=> `hola ${nombre} ${apellido}`
    let messi = decirBienvenido('Lionel','Messi'); 
    console.log(messi);

//Forma4
const decirBuenDia =(nombre, apellido) =>{
    return `hola ${nombre} ${apellido}`;
};
let lio = decirBuenDia('Lionel', 'Messi');
console.log(lio);

//ARRAYS
//ctl+alt+L turno console.log
const array = [1,2,3,4,{},[]];
console.log("🚀 ~ file: index.js:29 ~ array:", array)

// Slice
const lista = ['fideos', 'chocolatada', 'queso'];
console.log("🚀 ~ file: index.js:33 ~ lista:", lista)
const sliceCopy = lista.slice(1);
console.log("🚀 ~ file: index.js:35 ~ sliceCopy:", sliceCopy)

// Spread
const listaCopia = {...lista,...sliceCopy}; // spread operator
console.log("🚀 ~ file: index.js:39 ~ listaCopia:", listaCopia)

//Array Profundo
const arrayProfundo = [{nombre:'carlos'},{nombre:'pedro'}];
const copyArrayProfundoSpread = [...arrayProfundo];
console.log("🚀 ~ file: index.js:44 ~ copyArrayProfundoSpread:", copyArrayProfundoSpread)
copyArrayProfundoSpread[0].nombre = 'Juanito';
console.log("🚀 ~ file: index.js:46 ~ copyArrayProfundoSpread:", copyArrayProfundoSpread)


//Copia de JSON
//Convertimos en el JSON en un String:
const JSONStringify = JSON.stringify(arrayProfundo);
console.log("🚀 ~ file: index.js:51 ~ JSONStringify:", JSONStringify)
//Recovertir el string a un Array
const parseJSONStringify = JSON.parse(JSONStringify)
console.log("🚀 ~ file: index.js:55 ~ parseJSONStringify:", parseJSONStringify)
//Cambiar el nombre del array en la posicion 0
parseJSONStringify[0].nombre = 'Roberto';
console.log("🚀 ~ file: index.js:58 ~ parseJSONStringify:", parseJSONStringify)
console.log("🚀 ~ file: index.js:52 ~ arrayProfundo:", arrayProfundo)

// Copia con Structured Clone
const copiaStructuredClone = structuredClone(arrayProfundo);
copiaStructuredClone[0].nombre='Pepe';
console.log("🚀 ~ file: index.js:63 ~ copiaStructuredClone:", copiaStructuredClone)
console.log("🚀 ~ file: index.js:52 ~ arrayProfundo:", arrayProfundo)








