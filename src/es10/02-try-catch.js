try {
    hello();
} catch (error) {
    console.log(error);
}


//Ahora se puede personalizar el trychatch
try {
    anotherFn();
} catch (error) {
    console.log('Esto es un error');
}