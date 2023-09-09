//variables: la fortma en la que podemos asignar un valor de string, nuemrico o booleano, con ello poder trabajar y hacer referencia a estas mismas
// Originalmente solo se utilizaba var, ahora disponemos de let y const

// var (global)
var lastName = 'David'; //Declarar y asignar
lastName = 'Oscar'; //Reasignar
console.log(lastName);

//Const
const animal = 'Dog';
animal = 'Cat'; //No podemos reasignar const
console.log(animal);

//Crear una funcion aon un bloque y sus variables
const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; //function scope (disponible)
        let fruit2 = 'Kiwi'; //block scope (no disponible fuera)
        const fruit3 = 'Banana'; //block scope (no disponible fuera)
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();