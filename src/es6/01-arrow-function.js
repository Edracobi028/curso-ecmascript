function square(num) {
    return num * num; //retorne el valor por si
}

//con Arrow function es una sintaxis mas amigable sencilla y hacer uso de palabras reservadas: var let y const(de preferencia)
const square = (num) => {
    return num * num;
}

//Arrow function con el return implícito
// si solo e sun argumento no hay necesidad de parentesis, con esto no hay necesidad del return ()
// dejar de usar los handlebars para encapsular el bloque y dejar de usar el return
// Si hay multiples lineas de codigo si hay que usar las {} y return
const square = num => num * num;