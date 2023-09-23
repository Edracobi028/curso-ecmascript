//ES8 Junio del 2017

//Object entries: Devuelve una matriz de pares propios de la propiedad enumerable

//crear un objeto en una constante llamada "countries" que contenga varios elementos 
const countries = {MX: 'México', CO:'Colombia', CL: 'Chile', PE: 'Perú'};

//pasar el objeto, transforma el objeto en un arreglo respetando la estrucutra
console.log(Object.entries(countries));
//lo que muestra la consola
/* [
    [ 'MX', 'México' ],
    [ 'CO', 'Colombia' ],
    [ 'CL', 'Chile' ],
    [ 'PE', 'Perú' ]
] */