//crea un objeto en una constante llamada user
const user = {
    username: 'Edracobi028',
    age: 34,
    country: 'CO'
}
//sacar el valor de username y lo demas del objeto se guarde en values
const {
    username,
    ...values
} = user; //creamos variables username y values
//lammamos username porque ya lo extrajimos con spread
console.log(username);
console.log(values);