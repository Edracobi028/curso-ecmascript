//Promises (cosas que en algún momento tendrán que pasar, hoy mañana o nunca)

//Hacer una constante con arrow function que retorne una promesa
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Yeah!!');
        } else {
            reject('Whooops!');
        }
    }) //retornar una Arrow function anonima pasandole 2 parametros 
}

anotherFunction()
    .then(response => console.log(response)) //.then nos retornamos un response y returnaremos directo un console log de la respuesta
    .catch(err => console.log("error = " + err)) //catch es por si no logra resolverse de forma exitosa la promesa, nos retorna un error y retornamos directo para ver el error en consola 
    .finally(() => console.log('Finally')); //con Arrow function nos permite hacer algo cuando ya termino como mostrar un msj o ejecutar una función