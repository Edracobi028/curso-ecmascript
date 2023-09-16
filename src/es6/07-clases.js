//Clases

//Declarar una clase
class User {};

//Instancia d euna clase, una instancia de un objeto de nuestra clase
const newUser = new User();

//Hacer una clase con los metodos que vamos a agregar
class user {
    //Declarar metodo y retornar algo
    greeting(){
        return 'Hello';
    };
}

//Hacemos una instancia y llamada a este metodo de

const nombreClase = new user();//Instancia del metodo
console.log(nombreClase.greeting());//Uso del metodo que esta dentro de la clase con un console.log

const developer = new user(); //hacemos otra instancia
console.log(developer.greeting());

//constructor: donde vamos a inicializar elementos de esta clase
//Nota: Cuando se cree una nueva instancia de la clase va a ejecutar o inicializar estos elementos dentro del contructor 

class user {
    //Constructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello';
    };
}

const erick = new user();//en una constante Hacemos una instancia de la clase 


// this (hace referencia a elemento padre que lo contiene)

//crear una clase llamada user con un constructor que reciba name

class user {
    constructor(name){
        this.name = name; //inicializar name
    }
    //metodos
    speak () {
        return 'Hello';
    }
    //metodo retornando el metodo speak con la referencia this y la variable inicializada con string templates.
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

//Hacer instancia de la clase user en una constante llamada "ana" y pasarle el name
const ana = new user('Ana');
console.log(ana.greeting()); //ver en un console el metodo greeting


//setters y getters, una forma de obtener y guardar elementos dentro de esta estructura

//crear un clase "user" con constructor agregandole dos valores
class user {
    constructor(name, age){ //constructor
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    //setter y getter
    get uAge(){ //definir getter
        return this.age;
    }

    set uAge(n){ //definir setter pasando el valor que quiero cambiar nombrandolo como n
        this.age = n; //reasignamos con el valor recibido
    }
}

const developer1 = new user('Razo', 33); //creamos una constante "developer" con instancia a la clase "user" pasandole valores
console.log(developer1.uAge);
console.log(developer1.uAge = 20);