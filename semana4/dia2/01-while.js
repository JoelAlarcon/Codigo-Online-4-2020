/**
 * Hacer un algoritmo para leer n numeros
 * y al final del proceso mostrar la sumatoria de todos
 */

let n = 10;
let c = 0;
let sumatoria = 0;

while (c < n) {

    let nro = +prompt("Ingrese un numero");
    console.log(nro);
    sumatoria = sumatoria + nro;
    c = c + 1;
}

console.log(`Sumatoria ${sumatoria}`);