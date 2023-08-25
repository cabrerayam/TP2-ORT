//ARROW FUNCTIONS
//Forma1: Si voy a escribir todo en una sola linea de codigo no necesito poner { }
//const decirHola=()=>console.log('hola');
decirHola(); 
//Con un solo paremetro seria asi:
const decirHola=nombre=>console.log(`hola ${nombre}?`);

//Forma2: En el momento que uso mas de dos lineas con dos parametros:
const hacerHola = (nombre, apellido)=>{
    console.log(`hola ${nombre} ${apellido}`)
};
decirHola('Lionel', 'Messi');

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

//ARRAY
//ctl+alt+L turno console.log
const array = [1,2,3,4,{},[]];
console.log("🚀 ~ file: index.js:29 ~ array:", array)
