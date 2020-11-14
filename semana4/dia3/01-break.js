/**
 * Algoritmo que recorre un arreglo hasta que encuentre 
 * un numero cero, entonces el algoritmo se detiene    
*/

const edades = [20, 12, 2, 0, 1, 4, 5];

for (let c = 0; c < edades.length ; c++) {
    if (edades[c] === 0) {
        break;
    }
    console.log(edades[c]);
}

