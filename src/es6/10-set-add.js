//Nota: EcmaScript sale en Junio del 2015
//Crear un objeto llamado y agregarla a set-add y despues agregar mas cosas para luego mostrarlos

//crear una constante llamdo list instanciando el metodo Set
const list = new Set();

list.add('item 1'); //Agregar un item
list.add('item 2').add('item 3'); //encadenando varios add

console.log(list); //Mostrar como se ve