//iteraciones asincronas
//crear un generator en una funcion asincrona
async function* anotherGenerator() {
    //usar palbra reservada yield para crear un un algoritmo u logica
    yield await Promise.resolve(1); //que retorne un valor numerico
    yield await Promise.resolve(2); //que retorne un valor numerico
    yield await Promise.resolve(3); //que retorne un valor numerico
}

//Generar una instancia del generator en una constante llamada "other"
const other = anotherGenerator();
other.next().then(response => console.log(response.value)); //pedimos el response.value con la funcion next por la respuesta de la promesa 
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello!'); //comentario para ver cuando sucede


//Concepto del async dentro de un for

//Crear una funcion asincrona con el nombre array "arrayOfNames" que reciba como parametro un array
async function arrayOfNames(array) {
    //creamos un  for que imprima el valor que contiene el array que le pasamos a la funcion
    for await (let value of array) {
        console.log(value);
    }
}

//creamos una instancia de la funcion que creamos en una constante llamada "names" y le pasamos un array de valores
const names = arrayOfNames(['Frank', 'Beto', 'Hugo']);
console.log('After'); //Comentario para ver en que momento o paso sucede