// ES9 Junio 2018
//Regex: expresiones regulares  son patrones de búsqueda y manipulación de cadenas de caracteres
//crear una constante llamada regex con una regla de estructura
const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/; //manejo de fechas 4 carcteres (año), 2 mes y 2 caracteres (dia)
//validar para ver si cumple
const matchers = regex.exec('2022-01-01'); //ejecutarla sobre un string
console.table(matchers);