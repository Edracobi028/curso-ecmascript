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


//logica de Spread operator
//Permite propagar con una lógica la información hacia otros elementos sin tenerla que volver a pasar

let person = {name: 'Oscar', age: 33};  //creamos un objeto en una variable de tipo let
let country = 'MX';
//Crear una variable donde se unan estos dos elementos con el operador de propagacion (...) + los elementos a unir
//a la izquierda de (...) podemos agregar elementos sin variable
let data = {id: 1, ...person, country};
console.log(data);

//lógica de Rest

function sum(num, ...values){
    console.log(values);//ver el contenido de values
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1,2,3);//El 1er valor es para num, los demas que pasemos se agregan  a "values" por el uso de (...)