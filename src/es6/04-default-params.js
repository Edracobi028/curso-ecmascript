//Default params, entender como se hacia y ahora como se hace

//construimos una funcion y pasamos parametros para un nuevo usuario
function newUser(name, age, country) {
    //Podemos asignar variables con valores por defecto de estos 3 parametros
    var name = name || 'Razo'; //variable con valor por defecto
    var age = age || 33; //variable con valor por defecto
    var country = country || 'GDL'; //variable con valor por defecto
    console.log(name, age, country);
}

//Llamamos a la funcion sin pasarle valores para ver que usa los de defecto
newUser();
newUser('David', 23, 'MX');

//Ahora en ES6 mas compacto podemos asignar variables con valores por defecto desde los parametros

function newAdmin(name = 'Razo', age = 33, country = 'MX') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Tomas', 38, 'CO');