const promise1 = new Promise((resolve, reject) => reject("Rechazado")); // una promesa con AAF  en una constante llamada promise1 y retorna un reject
const promise2 = new Promise((resolve, reject) => resolve("Resolve")); // una promesa con AAF  en una constante llamada promise1 y retorna un reject
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2")); // una promesa con AAF  en una constante llamada promise1 y retorna un reject

//any retronara la primera que sea satisfactoria o cumpla
Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));