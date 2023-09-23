//Object.values : nos devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto

const countries = {MX: 'México', CO:'Colombia', CL: 'Chile', PE: 'Perú'};

//usamos el metodo objectvalues y le pasamos el objeto para obtener solo los valores en un array
//Nota: nos abre la posibilidad de aplicar metodos como map, filter, reduce segun sea el caso.
console.log(Object.values(countries)); //[ 'México', 'Colombia', 'Chile', 'Perú' ]