/**
 * Funciones que reciben parametros
 */

function tablaDeMultiplicar(numero) {
    for (let c = 0; c <= 10; c++) {
        console.log(`${c}x${numero} = ${c * numero}`);
    }
}

tablaDeMultiplicar(5);
console.log("--------------");
// tablaDeMultiplicar(50);
// console.log("--------------");
// tablaDeMultiplicar(100);
// console.log("--------------");
// tablaDeMultiplicar(-45);




/**
 * Imprimir la tabla de multiplicar de todos los elementos del arreglo
 */

let arreglo = [5, 8, 4, 7, 2, 3];

 for (let c = 0; c < arreglo.length ; c++) {
     console.log(`Tabla del ${arreglo[c]}`);
    tablaDeMultiplicar(arreglo[c]);
 }
