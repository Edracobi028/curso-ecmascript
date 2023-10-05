//ES10 Enero 2019

//Flat-Map: Devuelve una matriz de cualquier sub-matriz

//Ejemplo de map
//crear una matriz con matrices anidadas en una constante llamda array
const array = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]];
console.log(array.flat(1)); //utilizar el metodo flat pasandole la profundidad o niveles

//Ejemplo de flatmap
// flatmap: mapea cada uno de los elementos basados en una funcion de mapeo y luego aplana el resultado
//con flatmap en una arrow function multiplicar el valor x 2
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v => [v, v * 2]));