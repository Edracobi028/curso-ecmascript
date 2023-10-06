//Global this: acceder a todo lo que tiene el objeto global en los 3 conceptos, Navegador, tu computadora y web worker

//que pasa si accedemos al objeto window desde node
console.log(window); //navegador
console.log(global); // node
console.log(selft);  // webworker
console.log(globalThis); //Exponer la información segun sea el contexto donde está siendo ejecutada
