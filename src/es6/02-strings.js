//Nota: template literals nos van ayudar a concatenar strings mas fácil y jugar con variables y elementos, una mejor estructura
//Crear dos variables
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world + '!';
//console.log(epicPhrase);

// Template Literals (comillas francesas)
let epicPhrase2 = `${hello} ${world}!`

console.log(epicPhrase2);

//ES6 Multi-line, ya podemos hacer uso de las multilineas en los strings

//Construccion de frase multilinea sin template literal
let lorem = 'Esto es un string \n ' + 'Esto es otra linea';

//Construccion de frase multilinea con template literal
let lorem2 = `Esto es una frase epica
la continuacion de la frase epica.
`;

console.log(lorem);
console.log(lorem2);