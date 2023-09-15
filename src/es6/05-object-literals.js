//enhaced object literals

//una fucnion que retorne un objeto con los valores que pasaron
function newUser(user, age, country, uId){
    return {
        user: user, //Anteriormente se asignaba el valor recibido
        age,        //ahora con ES6 no es necesario
        country,
        id: uId,    //solo es necesario cuando lo que recibimos tiene un nombre diferente al que queremos en el objeto
    }
}
console.log(newUser("Edracobi28", 33, 'MX', 1));