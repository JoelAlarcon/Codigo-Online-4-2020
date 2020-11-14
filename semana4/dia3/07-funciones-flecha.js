/**
 * Funciones de Flecha
 */

// const tablaDeMultiplicar = function(numero){
//     for (let c = 0; c <= 10; c++) {
//         console.log(`${c}x${numero} = ${c * numero}`);
//     }
// };


// Una funcion de flecha es una funcion anonima, solo que esta escrita en una sintaxis moderna del JS
const tablaDeMultiplicar = (numero)=>{
    for (let c = 0; c <= 10; c++) {
        console.log(`${c}x${numero} = ${c * numero}`);
    }
};

tablaDeMultiplicar(7)