/**
 * Hacer un algoritmo para calcular el factorial de un numero
 * /// Como es?
 * Ejem: Factorial de 5 = 5x4x3x2x1 = 120
 * Ejem: Factorial de 5 = 4x3x2x1 = 24
 */

let productoTotal = 1;
const nro = 5;

for (let c = nro; c > 0; c--) {
    productoTotal = productoTotal * c
}

console.log(productoTotal);

