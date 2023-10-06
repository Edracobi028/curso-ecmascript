//Promise: Ejecutar y saber cuando todas han terminado, independientemente si fueron correctas o no

const promise1 = new Promise((resolve, reject) => reject("Rechazado")); // una promesa con AAF  en una constante llamada promise1 y retorna un reject
const promise2 = new Promise((resolve, reject) => resolve("Resolve")); // una promesa con AAF  en una constante llamada promise1 y retorna un reject
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2")); // una promesa con AAF  en una constante llamada promise1 y retorna un reject

//Llamar al metodo allsettled del paquete Promise pasandole en un array las promesas
Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));

/*  Respuesta al ejerciciio
    [
        { status: 'rejected', reason: 'Rechazado' },
        { status: 'fulfilled', value: 'Resolve' },
        { status: 'fulfilled', value: 'Resolve 2' }
    ]

*/

