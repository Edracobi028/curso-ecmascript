// MatchAll: con RegEx filtrar elementos dentro de un string
//Una forma para generar diferentes filtros o diferentes reglas pa filtrar, buscar segun sea el caso

//Regex: validar que un string cumpla con ciertos objetivos

const regex =  /\b(Apple)+\b/g; //Buscar la palabra apple dentro de un string
const fruit = 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.';

//recorrer con un for el array con el metodoM matchall y le pasamos como parametro la regla o regex que hizimo
for(const match of fruit.matchAll(regex)){
    console.log(match);//mostrar en consola la constante mostrando las veces que se repite y en que indice de caracter está
}

/* Resultado en consola 
[
  'Apple',
  'Apple',
  index: 0,
  input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
  groups: undefined
]
[
  'Apple',
  'Apple',
  index: 21,
  input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
  groups: undefined
]

*/