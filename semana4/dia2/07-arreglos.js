/**
 * Calcular la cantidad de numeros positivos negativos e iguales a cero
 */

let arreglo = [[1, 2, 3, 4, 5, 6, 7, -9, 0, -6]
let p = 0;
let n = 0;
let z = 0;


for (let c = 0; c < arreglo.length; c++) {
    if (arreglo[c] > 0) {
        p++;
} else{
        if (arreglo[c] < 0) 
            n++;
        } else{
            z++;
        }
    }
}
