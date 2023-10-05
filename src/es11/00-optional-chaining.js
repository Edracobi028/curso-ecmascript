//caracteristica para poder validar que la información este presente y que no rompa el flujo del aplicativo
const users = {
    razo: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}

console.log(users.razo); //acceder al hijo

console.log(users.razo.country); //acceder a un nivel mas abajo

/* console.log(users.bebeloper.country); //console.log(users.bebeloper.country); //error */

console.log(users?.bebeloper?.country); //undefined (validando)