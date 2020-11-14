/**
 * La sentencia continue interrumpe la iteracion que se encuentra desarrollando una
 * estructura repetitiva, sin embargo, hace que se continue con la siguiente iteracion
 */

/**
 * Algoritmo que imprime los numeros diferente de 0  
*/

const edades = [20, 12, 2, 0, 1, 4, 5];

for (let c = 0; c < edades.length ; c++) {
    if (edades[c] === 0) {
        continue;
    }
    console.log(edades[c]);
}

