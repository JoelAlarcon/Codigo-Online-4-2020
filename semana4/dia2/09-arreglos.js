/**
 * Lenar un arreglo con numeros ingresados por el usuario
 */

const n = 5;
let numeros = [];

for (let c = 0; c < n; c++) {
    let ingreso = +prompt("Ingrese un numero");
    numeros.push(ingreso);
}

console.log(numeros);
