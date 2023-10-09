//Declarar el boton
const button = document.getElementById('btn');

//Agregamos una accion de click al boton que creamso y pasamos la funcion 
// no olvides porner asyn para poder utilizar await
button.addEventListener("click", async function () {
    const module = await import('./module.js');//creamos una constante para cargar module
    console.log(module); //mostrar en consola lo que nos va a cargar
    module.hello(); //ejecutar la funcion
});
