//arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits; //destructuramos e array
console.log(a, b); //es recomendable asi para evitar destructuralo por el indice
console.log(a, fruits[1]); //cuando no se sabe exactamente el indice no sirve este modo

//Object destructuring
let user = {
    username: 'Razo',
    age: 33
}
let {
    username,
    age
} = user; // Destructuramos el objeto
console.log(username, age); //obtener el valor con la destrucuturación
console.log(username, user.age); //Obtener el valor accediendo al objeto