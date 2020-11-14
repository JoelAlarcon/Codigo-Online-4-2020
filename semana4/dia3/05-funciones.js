/**
 * Funciones que retornan un parametro
 */

/**
 * funcion que retorna el factorial de un numero
 * @param {*} numero  parametro de entrada al que se le va calcular 
 * el factorial
 */

function factorial(numero){
    let rpta =1;
    for(let c = numero; c>0; c--){
        rpta = rpta*c;
    }
    console.log(rpta);
}

let resultado = factorial(6)

console.log(resultado); 