// Cuando trabajamos con numeros y regresar un valor por defecto cuando sea nulo
const anotherNumber = null;
const validate  = anotherNumber ?? 5; //validacion null (??) si es null  devuelve el valor que asignes despues de los signos
console.log(validate);
