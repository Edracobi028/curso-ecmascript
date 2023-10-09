//Privados: solo se agrega el simbolo # al inicio del metodo

class user {
    constructor(name, age) { //constructor
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    //setter y getter
    get #uAge() { //definir getter
        return this.age;
    }

    set #uAge(n) { //definir setter pasando el valor que quiero cambiar nombrandolo como n
        this.age = n; //reasignamos con el valor recibido
    }
}

const developer1 = new user('Razo', 33); //creamos una constante "developer" con instancia a la clase "user" pasandole valores
console.log(developer1.uAge);
console.log(developer1.uAge = 20);