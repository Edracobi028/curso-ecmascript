// Async :  Es una funcion que no bloquee el flujo

//Promesa: Crear una constante Arrow Function llamada "fnAsync" que retorne una promesa.
const fnAsync = () =>{
    return new Promise((resolve, reject) => { //funcion anomnima AF dentro de la promesa pasando como parametros resolve y reject
        //if ternario
        (true) 
        ? setTimeout(() => resolve('AsynC!'), 2000 ) //funcion anonima AF que retorne un mensaje "Async" a los dos segundos 
        :  reject(new Error('Error!!!'));//pasando una instancia de error
    });
}

// Implementación de Async/await
//Crear una constante llamada "anotherFn" con funcion ArrwFn asincrona  donde pasaremos el await

const anotherFn = async () => {
    //crear una constante llamada "something" donde usaremos la palabra reservada await
    const something = await fnAsync(); //await: esperara en lo que termina de resolverse la funcion
    console.log(something);  //Ver el resultado de la promesa
    console.log('Hello'); //Saludo 
}

console.log('Before'); //mensaje para ver el flujo 
anotherFn();//llamamos la implementacion de Async/await
console.log('After');