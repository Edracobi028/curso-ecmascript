//llamado a la API con productos
//para hacer uso de fetch, instalar en consola:  npm install node-fetch

import fetch from "node-fetch"; //importar la libreria fecth para que nos permita llamar a la API
//Usamos await para que cuando se corra la logica espera a que traiga la información
const response = await fetch('https://api.escuelajs.co/api/v1/products'); //crear constante para llamada a la API
const products = await response.json();//lo que recibimos transformar en un objeto json

export { products };//Hacer un export de la constatnte products
