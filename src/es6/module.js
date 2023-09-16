//estructura pra trabajar con modulos
//Se le considera módulo a la logica necesaria segun el caso: una funcion, objetos, funciones que retornen objetos etc.  

//crear una constante con arrow function que retorna un consolelog
const hello = () => {
    console.log('Hello!');
}

//La palabra reservada "export default" + el nombre del modulo
export default hello;