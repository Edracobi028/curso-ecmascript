//Generator(*): Es un tipo especial de funcion que nos va a retornar una serie de valores según el algoritmo definido.

//Hacdr una funcion de tipo generator llamada "iterate" pasandole un array
function* iterate (array){
    //retornar con yield(palabra reservada) por cada elemento del array
    for (let value of array){
        yield value;
    }
}

//hacer instancia en una constante llamada it le pasamos una array de datos a la funcion de tipo generator
const it = iterate(['Razo', 'Erick', 'Liliana', 'Luke', 'Frank']);

//De esta manera recordamos el estado y 
console.log(it.next().value);//Mostrar uno de los valores con el metodo next(palabra reservada) y value
console.log(it.next().value);//traera el siguiente valor del array, recordando su estado, osea, que ya trajo uno
console.log(it.next().value);

// Generador de identificadores para michis 16/35

function* getId() {
    // Tu código aquí 👈
    var idStorage = [0];
    let idValue = 0;
    for (let id of idStorage) {
      idValue += 1;
      console.log("idValue: "+idValue);
      idStorage.push(idValue);
      yield id;
    }
    console.log(idStorage);
  }
  
  const id = getId();
  console.log(id.next().value);
  console.log(id.next().value);
  console.log(id.next().value);