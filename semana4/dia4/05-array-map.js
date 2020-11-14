/**
 * MAP
 */

/**
 * MAP es una funcion propia de los arreglos y el comportamiento es similar a la funcion 
 * FILTER, sin embargo en la funcion Map, se retorna todos los elementos del arreglo porque
 * su objetivo principal es armar un nuevo arreglo con algunos o todos los elementos modificados
 */

const numeros = [12, -3, 0, -9, 67, 4, -32, 33, -400];


let respuesta = numeros.map((elemento, i) => {
    if (elemento > 0) {
        return elemento * 2;
    } else {
        return elemento;
    }
});

console.log(respuesta);

// Map = modificar o armar un nuevo arreglo con algun cambio (igual elementos que el original)
// filter = para filtrar elementos (menos elementos que el original)
// foreach = SIRVE PARA RECORREE UN ARREGLO



/**
 * OTRA FORMA DE SOLUCIONAR EL ARREGLO
 */
// const numeros = [12, -3, 0, -9, 67, 4, -32, 33, -400];


// let respuesta = numeros.map((elemento, i) => {
//     if (elemento > 0) {
//         return elemento * 2;
//     }
//     return elemento;
// });

// console.log(respuesta);