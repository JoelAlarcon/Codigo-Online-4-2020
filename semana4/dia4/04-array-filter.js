/**
 * FILTER
 */

/**
 * FILTER es una funcion propia de los arreglos,
 * recibe callback con los mismos parametros que la funcion foreach
 * La diferencia es que filter retorna un nuevo arreglo con los elementos filtrados
 */

const numeros = [12, -3, 0, -9, 67, 4, -32, 33, -400];

let resultado = numeros.filter((elemento) => {
    if (elemento <= 0) {
        return elemento;
    }
});

console.log(resultado);
